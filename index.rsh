'reach 0.1';
'use strict';

// defininf the details of the event
const Details = Object({
  name: Bytes(128),
  reservation: UInt,
  deadline: UInt,
  host: Address,
});

// defininf application participants and APIs
export const main = Reach.App(() => {
  // this participant creates the instance
  // will usually be the host
  // dont restrict so doenst have to be same person
  const Admin = Participant('Admin', {
    details: Details,
    launched: Fun([Contract], Null),
  });
  // for guests to call and register for the event
  const Guest = API('Guest', {
    register: Fun([], Null),
  });
  // for host to record guest attendance
  const Host = API('Host', {
    // takes two arguments
    // first who the guest is
    // second if they showed up or not
    checkin: Fun([Address, Bool], Null),
  });

  // DApp is initialized
  init();

  Admin.only(() => {
    const details = declassify(interact.details);
  });
  // instance creator publishes details of the event
  Admin.publish(details);
    // destructure reservation, deadline and host from details
    const { reservation, deadline, host } = details;
  // deadline is enforced here
  enforce( thisConsensusTime() < deadline, "too late" );
  // signal to the creator that the contract has been launched
  Admin.interact.launched(getContract());

  // create new database to hold guest information
  // stores boolean value for each address key
  const Guests = new Map(Bool);
  // star a parralel reduce block
  // reducing is when a set of data is turned into a single value
  // reducing set of input events/API calls that occur in parallel
  // reduce into two values: done and howMany
  // done is boolean, tells us if event is over and it can be cleared from memory, starts as false
  // howMany is a running counter of how many guests have registered but have not checked in
  const [ done, howMany ] =
    // two invariants and one condition for this parallel reduce
    parallelReduce([ false, 0 ])
    // guests mapping size must be same as howMany counter count
    .invariant( Guests.size() == howMany, "howMany accurate" )
    // contract balance must equal the howMany count times the reservation cost
    .invariant( balance() == howMany * reservation, "balance accurate" )
    // every parallel reducs can be written as a while loop
    // better to think about it as its own construct
    // this is condition for when while loop terminates
    // condition is that we will continue accepting and reducing 
    // input events until we are done and howMany is zero
    // only then is it safe to turn off the ability to check in guests
    .while( ! ( done && howMany == 0 ) )

    // havent seen the .api_ component before, it has two arguments
    // first argument is the API call that is being handled, Guest_register
    // recond argument is a function that accepts the arguments to call (none in this case)
    // and specifies action
    .api_(Guest.register, () => {
      // action specification function is made of two parts
      // first, checks that done is not true, that the event hasn't started already
      check(! done, "event started");
      // checks that the guest is not already registered
      check(isNone(Guests[this]), "already registered");
      // return specifies what should be paid when this call is made (reservation)
      // also specifies what happens in the consensus when it is called (function)
      return [ reservation, (ret) => {
        // the consensus reduction specification function
        // accepts an argument (traditionally labeled ret for return or k for continuation)
        // that must be called with the API call result
        // function can then perform additional checks or effects before yielding the result (by invoking ret and then returning updated values for the reduction)
        // this function first ensures that the deadline has not passed
        enforce( thisConsensusTime() < deadline, "too late" );
        // sets the guest mapping value for the guest address key to true
        Guests[this] = true;
        // returns null to the API caller
        ret(null);
        // increments the count of howMany by one
        return [ false, howMany + 1 ];
      } ];
    })
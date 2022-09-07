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
    parallelReduce([ false, 0 ])
    .invariant( Guests.size() == howMany, "howMany accurate" )
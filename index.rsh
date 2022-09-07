'reach 0.1';
'use strict';

// defininf the details of one reservation object
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
  init();
// Automatically generated with Reach 0.1.11 (da882525)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (da882525)';
export const _backendVersion = 23;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc2
    });
  const map0_ctc = ctc4;
  
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc0, ctc1, ctc2, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc6 = stdlib.T_Object({
    deadline: ctc3,
    host: ctc4,
    name: ctc5,
    reservation: ctc3
    });
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc9 = stdlib.T_Data({
    Guest_register0_75: ctc7,
    Host_checkin0_75: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v722 = stdlib.protect(ctc6, interact.details, 'for Admin\'s interact field details');
  
  const txn1 = await (ctc.sendrecv({
    args: [v722],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:28:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v730], secs: v732, time: v731, didSend: v31, from: v729 } = txn1;
      
      ;
      const v733 = v730.reservation;
      const v734 = v730.deadline;
      const v735 = v730.host;
      const v738 = await ctc.getContractInfo();
      
      const v740 = false;
      const v741 = stdlib.checkedBigNumberify('./index.rsh:35:29:decimal', stdlib.UInt_max, '0');
      const v742 = v731;
      
      if (await (async () => {
        const v757 = stdlib.eq(v741, stdlib.checkedBigNumberify('./index.rsh:38:36:decimal', stdlib.UInt_max, '0'));
        const v758 = v740 ? v757 : false;
        const v759 = v758 ? false : true;
        
        return v759;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v730], secs: v732, time: v731, didSend: v31, from: v729 } = txn1;
  ;
  const v733 = v730.reservation;
  const v734 = v730.deadline;
  const v735 = v730.host;
  const v737 = stdlib.lt(v731, v734);
  stdlib.assert(v737, {
    at: './index.rsh:30:10:application',
    fs: [],
    msg: 'too late',
    who: 'Admin'
    });
  const v738 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.launched(v738), {
    at: './index.rsh:31:26:application',
    fs: ['at ./index.rsh:31:26:application call to [unknown function] (defined at: ./index.rsh:31:26:function exp)', 'at ./index.rsh:31:26:application call to "liftedInteract" (defined at: ./index.rsh:31:26:application)'],
    msg: 'launched',
    who: 'Admin'
    });
  
  let v740 = false;
  let v741 = stdlib.checkedBigNumberify('./index.rsh:35:29:decimal', stdlib.UInt_max, '0');
  let v742 = v731;
  
  let txn2 = txn1;
  while (await (async () => {
    const v757 = stdlib.eq(v741, stdlib.checkedBigNumberify('./index.rsh:38:36:decimal', stdlib.UInt_max, '0'));
    const v758 = v740 ? v757 : false;
    const v759 = v758 ? false : true;
    
    return v759;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v813], secs: v815, time: v814, didSend: v598, from: v812 } = txn3;
    switch (v813[0]) {
      case 'Guest_register0_75': {
        const v816 = v813[1];
        undefined /* setApiDetails */;
        const v821 = v740 ? false : true;
        stdlib.assert(v821, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:41:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:40:30:application call to [unknown function] (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:35:19:function exp)'],
          msg: 'event started',
          who: 'Admin'
          });
        const v823 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v812), null);
        const v824 = {
          None: 0,
          Some: 1
          }[v823[0]];
        const v825 = stdlib.eq(v824, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v825, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:42:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:40:30:application call to [unknown function] (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:35:19:function exp)'],
          msg: 'already registered',
          who: 'Admin'
          });
        ;
        const v846 = stdlib.lt(v814, v734);
        stdlib.assert(v846, {
          at: './index.rsh:44:16:application',
          fs: ['at ./index.rsh:43:35:application call to [unknown function] (defined at: ./index.rsh:43:35:function exp)'],
          msg: 'too late',
          who: 'Admin'
          });
        await stdlib.mapSet(map0, v812, true);
        const v847 = null;
        await txn3.getOutput('Guest_register', 'v847', ctc0, v847);
        const v853 = stdlib.safeAdd(v741, stdlib.checkedBigNumberify('./index.rsh:47:35:decimal', stdlib.UInt_max, '1'));
        const cv740 = false;
        const cv741 = v853;
        const cv742 = v814;
        
        v740 = cv740;
        v741 = cv741;
        v742 = cv742;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Host_checkin0_75': {
        const v883 = v813[1];
        undefined /* setApiDetails */;
        const v895 = v883[stdlib.checkedBigNumberify('./index.rsh:51:10:spread', stdlib.UInt_max, '0')];
        const v897 = stdlib.addressEq(v812, v735);
        stdlib.assert(v897, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:52:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:51:41:application call to [unknown function] (defined at: ./index.rsh:51:41:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:51:41:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:35:19:function exp)'],
          msg: 'not the host',
          who: 'Admin'
          });
        const v899 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v895), null);
        const v900 = {
          None: 0,
          Some: 1
          }[v899[0]];
        const v901 = stdlib.eq(v900, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v901, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:53:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:51:41:application call to [unknown function] (defined at: ./index.rsh:51:41:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:51:41:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:35:19:function exp)'],
          msg: 'no reservation',
          who: 'Admin'
          });
        ;
        const v924 = v883[stdlib.checkedBigNumberify('./index.rsh:51:10:spread', stdlib.UInt_max, '1')];
        const v934 = stdlib.ge(v814, v734);
        stdlib.assert(v934, {
          at: './index.rsh:55:16:application',
          fs: ['at ./index.rsh:54:25:application call to [unknown function] (defined at: ./index.rsh:54:25:function exp)'],
          msg: 'too early',
          who: 'Admin'
          });
        await stdlib.mapSet(map0, v895, undefined /* Nothing */);
        const v935 = v924 ? v895 : v735;
        ;
        const v940 = null;
        await txn3.getOutput('Host_checkin', 'v940', ctc0, v940);
        const v948 = stdlib.safeSub(v741, stdlib.checkedBigNumberify('./index.rsh:59:34:decimal', stdlib.UInt_max, '1'));
        const cv740 = true;
        const cv741 = v948;
        const cv742 = v814;
        
        v740 = cv740;
        v741 = cv741;
        v742 = cv742;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _Guest_register3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Guest_register3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Guest_register3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc7 = stdlib.T_Data({
    Guest_register0_75: ctc5,
    Host_checkin0_75: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v733, v734, v735, v740, v741] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc4, ctc1, ctc3]);
  const v760 = ctc.selfAddress();
  const v762 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:40:30:application call to [unknown function] (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:35:19:application call to "runGuest_register0_75" (defined at: ./index.rsh:40:10:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:35:19:function exp)'],
    msg: 'in',
    who: 'Guest_register'
    });
  const v763 = v740 ? false : true;
  stdlib.assert(v763, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:41:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:40:30:application call to [unknown function] (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:35:19:application call to "runGuest_register0_75" (defined at: ./index.rsh:40:10:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:35:19:function exp)'],
    msg: 'event started',
    who: 'Guest_register'
    });
  const v765 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v760), null);
  const v766 = {
    None: 0,
    Some: 1
    }[v765[0]];
  const v767 = stdlib.eq(v766, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v767, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:42:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:40:30:application call to [unknown function] (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:35:19:application call to "runGuest_register0_75" (defined at: ./index.rsh:40:10:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:35:19:function exp)'],
    msg: 'already registered',
    who: 'Guest_register'
    });
  const v772 = ['Guest_register0_75', v762];
  
  const txn1 = await (ctc.sendrecv({
    args: [v733, v734, v735, v740, v741, v772],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v733, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v813], secs: v815, time: v814, didSend: v598, from: v812 } = txn1;
      
      switch (v813[0]) {
        case 'Guest_register0_75': {
          const v816 = v813[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Guest_register"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v812), null);
          sim_r.txns.push({
            amt: v733,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 0, v812, true);
          const v847 = null;
          const v848 = await txn1.getOutput('Guest_register', 'v847', ctc0, v847);
          
          const v853 = stdlib.safeAdd(v741, stdlib.checkedBigNumberify('./index.rsh:47:35:decimal', stdlib.UInt_max, '1'));
          const v1339 = false;
          const v1340 = v853;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Host_checkin0_75': {
          const v883 = v813[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc1, ctc3, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v813], secs: v815, time: v814, didSend: v598, from: v812 } = txn1;
  switch (v813[0]) {
    case 'Guest_register0_75': {
      const v816 = v813[1];
      undefined /* setApiDetails */;
      const v821 = v740 ? false : true;
      stdlib.assert(v821, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:41:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:40:30:application call to [unknown function] (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:35:19:function exp)'],
        msg: 'event started',
        who: 'Guest_register'
        });
      const v823 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v812), null);
      const v824 = {
        None: 0,
        Some: 1
        }[v823[0]];
      const v825 = stdlib.eq(v824, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v825, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:42:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:40:30:application call to [unknown function] (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:35:19:function exp)'],
        msg: 'already registered',
        who: 'Guest_register'
        });
      ;
      const v846 = stdlib.lt(v814, v734);
      stdlib.assert(v846, {
        at: './index.rsh:44:16:application',
        fs: ['at ./index.rsh:43:35:application call to [unknown function] (defined at: ./index.rsh:43:35:function exp)'],
        msg: 'too late',
        who: 'Guest_register'
        });
      await stdlib.mapSet(map0, v812, true);
      const v847 = null;
      const v848 = await txn1.getOutput('Guest_register', 'v847', ctc0, v847);
      if (v598) {
        stdlib.protect(ctc0, await interact.out(v816, v848), {
          at: './index.rsh:40:11:application',
          fs: ['at ./index.rsh:40:11:application call to [unknown function] (defined at: ./index.rsh:40:11:function exp)', 'at ./index.rsh:46:12:application call to "ret" (defined at: ./index.rsh:43:35:function exp)', 'at ./index.rsh:43:35:application call to [unknown function] (defined at: ./index.rsh:43:35:function exp)'],
          msg: 'out',
          who: 'Guest_register'
          });
        }
      else {
        }
      
      const v853 = stdlib.safeAdd(v741, stdlib.checkedBigNumberify('./index.rsh:47:35:decimal', stdlib.UInt_max, '1'));
      const v1339 = false;
      const v1340 = v853;
      return;
      
      break;
      }
    case 'Host_checkin0_75': {
      const v883 = v813[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Host_checkin3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Host_checkin3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Host_checkin3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    Guest_register0_75: ctc6,
    Host_checkin0_75: ctc5
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v733, v734, v735, v740, v741] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc4, ctc1, ctc3]);
  const v774 = ctc.selfAddress();
  const v776 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:51:41:application call to [unknown function] (defined at: ./index.rsh:51:41:function exp)', 'at ./index.rsh:35:19:application call to "runHost_checkin0_75" (defined at: ./index.rsh:51:10:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:35:19:function exp)'],
    msg: 'in',
    who: 'Host_checkin'
    });
  const v777 = v776[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v781 = stdlib.addressEq(v774, v735);
  stdlib.assert(v781, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:52:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:51:41:application call to [unknown function] (defined at: ./index.rsh:51:41:function exp)', 'at ./index.rsh:35:19:application call to "runHost_checkin0_75" (defined at: ./index.rsh:51:10:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:35:19:function exp)'],
    msg: 'not the host',
    who: 'Host_checkin'
    });
  const v783 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v777), null);
  const v784 = {
    None: 0,
    Some: 1
    }[v783[0]];
  const v785 = stdlib.eq(v784, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v785, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:53:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:51:41:application call to [unknown function] (defined at: ./index.rsh:51:41:function exp)', 'at ./index.rsh:35:19:application call to "runHost_checkin0_75" (defined at: ./index.rsh:51:10:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:35:19:function exp)'],
    msg: 'no reservation',
    who: 'Host_checkin'
    });
  const v794 = ['Host_checkin0_75', v776];
  
  const txn1 = await (ctc.sendrecv({
    args: [v733, v734, v735, v740, v741, v794],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:54:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v813], secs: v815, time: v814, didSend: v598, from: v812 } = txn1;
      
      switch (v813[0]) {
        case 'Guest_register0_75': {
          const v816 = v813[1];
          
          break;
          }
        case 'Host_checkin0_75': {
          const v883 = v813[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Host_checkin"
            });
          const v895 = v883[stdlib.checkedBigNumberify('./index.rsh:51:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v895), null);
          ;
          const v924 = v883[stdlib.checkedBigNumberify('./index.rsh:51:10:spread', stdlib.UInt_max, '1')];
          await stdlib.simMapSet(sim_r, 0, v895, undefined /* Nothing */);
          const v935 = v924 ? v895 : v735;
          sim_r.txns.push({
            kind: 'from',
            to: v935,
            tok: undefined /* Nothing */
            });
          const v940 = null;
          const v941 = await txn1.getOutput('Host_checkin', 'v940', ctc0, v940);
          
          const v948 = stdlib.safeSub(v741, stdlib.checkedBigNumberify('./index.rsh:59:34:decimal', stdlib.UInt_max, '1'));
          const v1357 = true;
          const v1358 = v948;
          const v1360 = stdlib.eq(v948, stdlib.checkedBigNumberify('./index.rsh:38:36:decimal', stdlib.UInt_max, '0'));
          if (v1360) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc1, ctc3, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v813], secs: v815, time: v814, didSend: v598, from: v812 } = txn1;
  switch (v813[0]) {
    case 'Guest_register0_75': {
      const v816 = v813[1];
      return;
      break;
      }
    case 'Host_checkin0_75': {
      const v883 = v813[1];
      undefined /* setApiDetails */;
      const v895 = v883[stdlib.checkedBigNumberify('./index.rsh:51:10:spread', stdlib.UInt_max, '0')];
      const v897 = stdlib.addressEq(v812, v735);
      stdlib.assert(v897, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:52:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:51:41:application call to [unknown function] (defined at: ./index.rsh:51:41:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:51:41:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:35:19:function exp)'],
        msg: 'not the host',
        who: 'Host_checkin'
        });
      const v899 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v895), null);
      const v900 = {
        None: 0,
        Some: 1
        }[v899[0]];
      const v901 = stdlib.eq(v900, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v901, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:53:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:51:41:application call to [unknown function] (defined at: ./index.rsh:51:41:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:51:41:function exp)', 'at ./index.rsh:35:19:application call to [unknown function] (defined at: ./index.rsh:35:19:function exp)'],
        msg: 'no reservation',
        who: 'Host_checkin'
        });
      ;
      const v924 = v883[stdlib.checkedBigNumberify('./index.rsh:51:10:spread', stdlib.UInt_max, '1')];
      const v934 = stdlib.ge(v814, v734);
      stdlib.assert(v934, {
        at: './index.rsh:55:16:application',
        fs: ['at ./index.rsh:54:25:application call to [unknown function] (defined at: ./index.rsh:54:25:function exp)'],
        msg: 'too early',
        who: 'Host_checkin'
        });
      await stdlib.mapSet(map0, v895, undefined /* Nothing */);
      const v935 = v924 ? v895 : v735;
      ;
      const v940 = null;
      const v941 = await txn1.getOutput('Host_checkin', 'v940', ctc0, v940);
      if (v598) {
        stdlib.protect(ctc0, await interact.out(v883, v941), {
          at: './index.rsh:51:11:application',
          fs: ['at ./index.rsh:51:11:application call to [unknown function] (defined at: ./index.rsh:51:11:function exp)', 'at ./index.rsh:58:12:application call to "ret" (defined at: ./index.rsh:54:25:function exp)', 'at ./index.rsh:54:25:application call to [unknown function] (defined at: ./index.rsh:54:25:function exp)'],
          msg: 'out',
          who: 'Host_checkin'
          });
        }
      else {
        }
      
      const v948 = stdlib.safeSub(v741, stdlib.checkedBigNumberify('./index.rsh:59:34:decimal', stdlib.UInt_max, '1'));
      const v1357 = true;
      const v1358 = v948;
      const v1360 = stdlib.eq(v948, stdlib.checkedBigNumberify('./index.rsh:38:36:decimal', stdlib.UInt_max, '0'));
      if (v1360) {
        return;
        }
      else {
        return;
        }
      break;
      }
    }
  
  
  };
export async function Guest_register(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Guest_register expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Guest_register expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Guest_register3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Host_checkin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Host_checkin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Host_checkin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Host_checkin3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Guest_register()byte[0]`, `Host_checkin(address,byte)byte[0]`],
    pure: [],
    sigs: [`Guest_register()byte[0]`, `Host_checkin(address,byte)byte[0]`]
    },
  appApproval: `BiAGAAECCJiO97kMAyYDAQAAAgAAIjUAMRhBAi4pZEkiWzUBJVs1AjEZIxJBAAgxACgqZkIB/TYaABdJQQA5IjUEIzUGSSEEDEAAEiEEEkQpNf8oNP9QgSGvUEIAMIGO4+WVCBJENhoBNhoCUDX/gAEBNP9QQgAWNhoCFzUENhoDNhoBF0kkDEAA5iQSRCEFNAESRDQESSISTDQCEhFEKGRJNQNJSiJbNf8lWzX+VxAgNf2BMVs1/Ek1BTX7gAT22XKFNPtQsDT7IlVAAEM0A1cwARcURDEAiAGNIlUiEkQ0/4gBkDIGNP4MRDEAKIACAQFmgAgAAAAAAAADT7ApNQc0/zT+NP0iNPwjCDIGQgCpNPtXASE1+jT6VwAgNfkxADT9EkQ0+YgBPiJVIxJEMgY0/g9ENPkoKmaxIrIBNP+yCCOyEDT9NPk0+lcgARdNsgezgAgAAAAAAAADrLApNQc0/zT+NP0jNPwjCTIGQgBJIhJEgaCNBogA+iI0ARJENARJIhJMNAISEURJNQU1/4AE5PijJzT/ULA0/yJbNf4yBjT+DEQ0/4GoAVs0/jT/VwggIiIyBkIAADX/Nf41/TX8Nfs1+jT9NP4iEhBBAANCACg0+hY0+xZQNPxQNP0WUQcIUDT+FlAoSwFXADlnSCEFNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQjMTcSRCI1ASI1AkL/r0kxGGFAAANIKokoYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 2,
  stateKeys: 1,
  stateSize: 57,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_host",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_name",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_reservation",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T5",
                "name": "v730",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_host",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_name",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_reservation",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T5",
                "name": "v730",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T11",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Guest_register0_75",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "bool",
                        "name": "elem1",
                        "type": "bool"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Host_checkin0_75",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v813",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v847",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v940",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Guest_register",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "_a1",
        "type": "bool"
      }
    ],
    "name": "Host_checkin",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T11",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Guest_register0_75",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "bool",
                        "name": "elem1",
                        "type": "bool"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Host_checkin0_75",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v813",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620014ec380380620014ec833981016040819052620000269162000465565b60008055436003556040805133815282516020808301919091528084015151805183850152808201516001600160a01b031660608085019190915281850151805160808601529283015160a08501528285015160c08501529182015160e0840152015161010082015290517f8085126eed82a9628cb2b2943d7044a7e8c184f23e4b3b450a09e2f171e93d86918190036101200190a1620000ca3415600762000188565b60208101515151620000e0904310600862000188565b6200012b6040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b602080830180515160600151835152805151518351830152515181015182516001600160a01b0390911660409182015282820180516000908190528151909301929092529051439101526200018081620001b2565b50506200057d565b81620001ae5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b602081015151620001c5576000620001cf565b6020808201510151155b15620001f05760008080556001819055620001ed90600290620002e7565b50565b6200022e6040518060a00160405280600081526020016000815260200160006001600160a01b03168152602001600015158152602001600081525090565b815151815281516020908101518183015282516040908101516001600160a01b0316818401528184018051511515606085015251820151608084015260036000554360015551620002bc9183910181518152602080830151908201526040808301516001600160a01b0316908201526060808301511515908201526080918201519181019190915260a00190565b60405160208183030381529060405260029080519060200190620002e292919062000326565b505050565b508054620002f59062000540565b6000825580601f1062000306575050565b601f016020900490600052602060002090810190620001ed9190620003b5565b828054620003349062000540565b90600052602060002090601f016020900481019282620003585760008555620003a3565b82601f106200037357805160ff1916838001178555620003a3565b82800160010185558215620003a3579182015b82811115620003a357825182559160200191906001019062000386565b50620003b1929150620003b5565b5090565b5b80821115620003b15760008155600101620003b6565b604080519081016001600160401b0381118282101715620003fd57634e487b7160e01b600052604160045260246000fd5b60405290565b604051602081016001600160401b0381118282101715620003fd57634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b0381118282101715620003fd57634e487b7160e01b600052604160045260246000fd5b60008183036101008112156200047a57600080fd5b62000484620003cc565b8351815260e0601f19830112156200049b57600080fd5b620004a562000403565b620004af62000434565b6020860151815260408601516001600160a01b0381168114620004d157600080fd5b60208201526080605f1985011215620004e957600080fd5b620004f362000434565b9350606086015184526080860151602085015260a0860151604085015260c0860151606085015283604082015260e086015160608201528082525080602083015250809250505092915050565b600181811c908216806200055557607f821691505b602082108114156200057757634e487b7160e01b600052602260045260246000fd5b50919050565b610f5f806200058d6000396000f3fe60806040526004361061006e5760003560e01c80633c4c9a961161004b5780633c4c9a96146100db57806383230757146100f3578063ab53f2c614610108578063d39c61841461012b57005b80631e93b0f1146100775780632f3d04991461009b5780633bc5b7bf146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610b03565b61013e565b3480156100ba57600080fd5b506100ce6100c9366004610b30565b61016e565b6040516100929190610b88565b6100e361019a565b6040519015158152602001610092565b3480156100ff57600080fd5b50600154610088565b34801561011457600080fd5b5061011d6101d3565b604051610092929190610bba565b6100e3610139366004610c25565b610270565b604080518082019091526000808252602082015261016a61016436849003840184610cf7565b826102d2565b5050565b6040805160608101825260008082526020820181905291810191909152610194826106cf565b92915050565b60006101a4610995565b6020818101515160009081905260408051808201909152818152918201526101cc82826102d2565b5192915050565b6000606060005460028080546101e890610dba565b80601f016020809104026020016040519081016040528092919081815260200182805461021490610dba565b80156102615780601f1061023657610100808354040283529160200191610261565b820191906000526020600020905b81548152906001019060200180831161024457829003601f168201915b50505050509050915091509091565b600061027a610995565b6020818101805151600190528051516040908101516001600160a01b03881690529051518101518515159083015280518082019091526000808252918101919091526102c682826102d2565b60200151949350505050565b6102e260036000541460116107a7565b81516102fd9015806102f657508251600154145b60126107a7565b60008080556002805461030f90610dba565b80601f016020809104026020016040519081016040528092919081815260200182805461033b90610dba565b80156103885780601f1061035d57610100808354040283529160200191610388565b820191906000526020600020905b81548152906001019060200180831161036b57829003601f168201915b50505050508060200190518101906103a09190610def565b90506103c2604080516060810182526000602082018181529282015290815290565b7f15d6488464d7085424d54b89b50a999f848b6a67d4daa157da22752ffc67592a33856040516103f3929190610e7e565b60405180910390a1600060208501515151600181111561041557610415610b54565b141561054057610438826060015161042e576001610431565b60005b60096107a7565b6104606000610446336106cf565b51600181111561045857610458610b54565b14600a6107a7565b815161046f903414600b6107a7565b61048082602001514310600c6107a7565b33600090815260046020908152604080832080546201000162ff00ff19909116179055519182527fd74d935229190e7fdcae31f2a4e2ddd52645651ea2d2fb667efa96c52e4ca3a1910160405180910390a1600083526104de6109e9565b8251815152602080840151825182015260408085015183516001600160a01b0390911691015281015160009052608083015161051b9060016107cd565b6020808301805190910191909152514360409091015261053a8161081a565b506106c9565b600160208501515151600181111561055a5761055a610b54565b14156106c9576020840151516040908101518252820151610587906001600160a01b03163314600d6107a7565b8051516105b49060019061059a906106cf565b5160018111156105ac576105ac610b54565b14600e6107a7565b6105c03415600f6107a7565b6105d2826020015143101560106107a7565b8051516001600160a01b03166000908152600460209081526040909120805462ffffff191690558151015161060b57816040015161060f565b8051515b82516040516001600160a01b03929092169181156108fc0291906000818181858888f19350505050158015610648573d6000803e3d6000fd5b50604051600081527fd535acd7359dcbe0b647e88354eef447593d4854a3cb7202168e8221be37e3289060200160405180910390a16000602084015261068c6109e9565b8251815152602080840151825182015260408085015183516001600160a01b03909116910152810151600190819052608084015161051b91610946565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561071b5761071b610b54565b1415610798576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561075c5761075c610b54565b600181111561076d5761076d610b54565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b8161016a5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826107da8382610efa565b91508110156101945760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016107c4565b60208101515161082b576000610835565b6020808201510151155b15610853576000808055600181905561085090600290610a30565b50565b6108906040518060a00160405280600081526020016000815260200160006001600160a01b03168152602001600015158152602001600081525090565b815151815281516020908101518183015282516040908101516001600160a01b031681840152818401805151151560608501525182015160808401526003600055436001555161091d9183910181518152602080830151908201526040808301516001600160a01b0316908201526060808301511515908201526080918201519181019190915260a00190565b60405160208183030381529060405260029080519060200190610941929190610a6a565b505050565b6000826109538382610f12565b91508111156101945760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016107c4565b6040518060400160405280600081526020016109e46040805160808101825260006020808301828152838501839052845180860190955282855290840191909152606082019290925290815290565b905290565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b508054610a3c90610dba565b6000825580601f10610a4c575050565b601f0160209004906000526020600020908101906108509190610aee565b828054610a7690610dba565b90600052602060002090601f016020900481019282610a985760008555610ade565b82601f10610ab157805160ff1916838001178555610ade565b82800160010185558215610ade579182015b82811115610ade578251825591602001919060010190610ac3565b50610aea929150610aee565b5090565b5b80821115610aea5760008155600101610aef565b600060a08284031215610b1557600080fd5b50919050565b6001600160a01b038116811461085057600080fd5b600060208284031215610b4257600080fd5b8135610b4d81610b1b565b9392505050565b634e487b7160e01b600052602160045260246000fd5b6002811061085057634e487b7160e01b600052602160045260246000fd5b81516060820190610b9881610b6a565b8083525060208301511515602083015260408301511515604083015292915050565b82815260006020604081840152835180604085015260005b81811015610bee57858101830151858201606001528201610bd2565b81811115610c00576000606083870101525b50601f01601f191692909201606001949350505050565b801515811461085057600080fd5b60008060408385031215610c3857600080fd5b8235610c4381610b1b565b91506020830135610c5381610c17565b809150509250929050565b6040805190810167ffffffffffffffff81118282101715610c8f57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715610c8f57634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610c8f57634e487b7160e01b600052604160045260246000fd5b600081830360a0811215610d0a57600080fd5b610d12610c5e565b833581526080601f1983011215610d2857600080fd5b610d30610c95565b610d38610cc6565b602086013560028110610d4a57600080fd5b81526040860135610d5a81610c17565b60208201526040605f1985011215610d7157600080fd5b610d79610c5e565b93506060860135610d8981610b1b565b84526080860135610d9981610c17565b60208581019190915260408201949094528152918101919091529392505050565b600181811c90821680610dce57607f821691505b60208210811415610b1557634e487b7160e01b600052602260045260246000fd5b600060a08284031215610e0157600080fd5b60405160a0810181811067ffffffffffffffff82111715610e3257634e487b7160e01b600052604160045260246000fd5b806040525082518152602083015160208201526040830151610e5381610b1b565b60408201526060830151610e6681610c17565b60608201526080928301519281019290925250919050565b6001600160a01b038381168252825160208084019190915283015151805160c08401929190610eac81610b6a565b80604086015250602081015115156060850152604081015190508181511660808501526020810151151560a085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610f0d57610f0d610ee4565b500190565b600082821015610f2457610f24610ee4565b50039056fea26469706673582212205c4611a9ecbaf8c54b88b8e10b4d3c27221861af7463a3a136bc82771465a64364736f6c634300080c0033`,
  BytecodeLen: 5356,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:63:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:35:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Guest_register": Guest_register,
  "Host_checkin": Host_checkin
  };
export const _APIs = {
  Guest: {
    register: Guest_register
    },
  Host: {
    checkin: Host_checkin
    }
  };

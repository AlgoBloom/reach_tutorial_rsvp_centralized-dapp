// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Guest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Guest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Guest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc3 = stdlib.T_Object({
    deadline: ctc0,
    host: ctc1,
    name: ctc2,
    reservation: ctc0
    });
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Bool;
  
  
  const v133 = stdlib.protect(ctc3, interact.details, 'for Guest\'s interact field details');
  const v137 = v133.reservation;
  
  const txn1 = await (ctc.sendrecv({
    args: [v133],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:33:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [v137, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v142], secs: v144, time: v143, didSend: v41, from: v141 } = txn1;
      
      const v145 = v142.reservation;
      sim_r.txns.push({
        amt: v145,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v149 = v142.deadline;
      const v150 = v142.host;
      const v153 = await ctc.getContractInfo();
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v142], secs: v144, time: v143, didSend: v41, from: v141 } = txn1;
  const v145 = v142.reservation;
  ;
  const v149 = v142.deadline;
  const v150 = v142.host;
  const v152 = stdlib.lt(v143, v149);
  stdlib.assert(v152, {
    at: './index.rsh:36:8:application',
    fs: [],
    msg: 'too late',
    who: 'Guest'
    });
  const v153 = await ctc.getContractInfo();
  stdlib.protect(ctc4, await interact.registered(v153), {
    at: './index.rsh:38:26:application',
    fs: ['at ./index.rsh:38:26:application call to [unknown function] (defined at: ./index.rsh:38:26:function exp)', 'at ./index.rsh:38:26:application call to "liftedInteract" (defined at: ./index.rsh:38:26:application)'],
    msg: 'registered',
    who: 'Guest'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v164], secs: v166, time: v165, didSend: v109, from: v163 } = txn2;
  const v167 = stdlib.addressEq(v163, v150);
  stdlib.assert(v167, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:51:8:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'not the host',
    who: 'Guest'
    });
  ;
  const v170 = stdlib.ge(v165, v149);
  stdlib.assert(v170, {
    at: './index.rsh:54:8:application',
    fs: [],
    msg: 'too early',
    who: 'Guest'
    });
  const v171 = v164 ? v141 : v163;
  ;
  return;
  
  
  
  
  };
export async function Host(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Host expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Host expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc3 = stdlib.T_Object({
    deadline: ctc0,
    host: ctc1,
    name: ctc2,
    reservation: ctc0
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3]);
  
  
  const v127 = stdlib.protect(ctc3, interact.details, 'for Host\'s interact field details');
  const v132 = stdlib.protect(ctc4, interact.showed, 'for Host\'s interact field showed');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v142], secs: v144, time: v143, didSend: v41, from: v141 } = txn1;
  const v145 = v142.reservation;
  ;
  const v149 = v142.deadline;
  const v150 = v142.host;
  const v152 = stdlib.lt(v143, v149);
  stdlib.assert(v152, {
    at: './index.rsh:36:8:application',
    fs: [],
    msg: 'too late',
    who: 'Host'
    });
  const v155 = ctc.selfAddress();
  const v157 = stdlib.digest(ctc5, [v142]);
  const v158 = stdlib.digest(ctc5, [v127]);
  const v159 = stdlib.digestEq(v157, v158);
  stdlib.assert(v159, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:45:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:42:10:application call to [unknown function] (defined at: ./index.rsh:42:14:function exp)'],
    msg: 'wrong event',
    who: 'Host'
    });
  
  const v161 = stdlib.addressEq(v155, v150);
  stdlib.assert(v161, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:51:8:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'not the host',
    who: 'Host'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v141, v145, v149, v150, v132],
    evt_cnt: 1,
    funcNum: 1,
    lct: v143,
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:6:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v164], secs: v166, time: v165, didSend: v109, from: v163 } = txn2;
      
      ;
      const v171 = v164 ? v141 : v163;
      sim_r.txns.push({
        kind: 'from',
        to: v171,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v164], secs: v166, time: v165, didSend: v109, from: v163 } = txn2;
  const v167 = stdlib.addressEq(v163, v150);
  stdlib.assert(v167, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:51:8:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'not the host',
    who: 'Host'
    });
  ;
  const v170 = stdlib.ge(v165, v149);
  stdlib.assert(v170, {
    at: './index.rsh:54:8:application',
    fs: [],
    msg: 'too early',
    who: 'Host'
    });
  const v171 = v164 ? v141 : v163;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAgABACI1ADEYQQE/KGRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAAWyMSRCM0ARJENARJIhJMNAISEUQpZDUDSTUFFzX/gAQPv8Y0NP8WUQcIULAxADQDVzAgEkQyBjQDgShbD0SxIrIBNAOBIFuyCCOyEDEANANXACA0/02yB7NCAGZIgaCNBogAzCI0ARJENARJIhJMNAISEURJNQU1/4AE5PijJzT/ULA0/4GoAVs1/jT+iACgNP8iWzX9NP9XCCA1/DIGNP0MRDEANP4WUDT9FlA0/FApSwFXAFBnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 80,
  unsupported: [],
  version: 10,
  warnings: []
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
                    "internalType": "struct T1",
                    "name": "_name",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_reservation",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v142",
                "type": "tuple"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
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
                    "internalType": "struct T1",
                    "name": "_name",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_reservation",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v142",
                "type": "tuple"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
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
                "internalType": "bool",
                "name": "v164",
                "type": "bool"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
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
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v164",
                "type": "bool"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610963380380610963833981016040819052610022916102dd565b60008055436003556040805133815282516020808301919091528084015151805183850152808201516001600160a01b031660608085019190915281850151805160808601529283015160a08501528285015160c08501529182015160e0840152015161010082015290517f8085126eed82a9628cb2b2943d7044a7e8c184f23e4b3b450a09e2f171e93d86918190036101200190a1602081015151606001516100cf9034146007610185565b602081015151516100e39043106008610185565b6040805160808082018352600060208084018281528486018381526060808701858152338089528a8601805151840151865280515151855251518601516001600160a01b039081168352600197889055439097558951958601529251978401979097525195820195909552935116908301529060a0016040516020818303038152906040526002908051906020019061017d9291906101ae565b5050506103e7565b816101aa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546101ba906103ac565b90600052602060002090601f0160209004810192826101dc5760008555610222565b82601f106101f557805160ff1916838001178555610222565b82800160010185558215610222579182015b82811115610222578251825591602001919060010190610207565b5061022e929150610232565b5090565b5b8082111561022e5760008155600101610233565b604080519081016001600160401b038111828210171561027757634e487b7160e01b600052604160045260246000fd5b60405290565b604051602081016001600160401b038111828210171561027757634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b038111828210171561027757634e487b7160e01b600052604160045260246000fd5b60008183036101008112156102f157600080fd5b6102f9610247565b8351815260e0601f198301121561030f57600080fd5b61031761027d565b61031f6102ad565b6020860151815260408601516001600160a01b038116811461034057600080fd5b60208201526080605f198501121561035757600080fd5b61035f6102ad565b9350606086015184526080860151602085015260a0860151604085015260c0860151606085015283604082015260e086015160608201528082525080602083015250809250505092915050565b600181811c908216806103c057607f821691505b602082108114156103e157634e487b7160e01b600052602260045260246000fd5b50919050565b61056d806103f66000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d5780639a3e391214610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b61004761009036600461038d565b6100b8565b3480156100a157600080fd5b506100aa610275565b6040516100649291906103a5565b6100c8600160005414600c610312565b6100e2813515806100db57506001548235145b600d610312565b6000808055600280546100f490610402565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610402565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b50505050508060200190518101906101859190610453565b90507fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f491533836040516101b89291906104e0565b60405180910390a16101e381606001516001600160a01b0316336001600160a01b0316146009610312565b6101ef3415600a610312565b6102018160400151431015600b610312565b6102116040830160208401610515565b61021b573361021e565b80515b6001600160a01b03166108fc82602001519081150290604051600060405180830381858888f1935050505015801561025a573d6000803e3d6000fd5b506000808055600181905561027190600290610337565b5050565b60006060600054600280805461028a90610402565b80601f01602080910402602001604051908101604052809291908181526020018280546102b690610402565b80156103035780601f106102d857610100808354040283529160200191610303565b820191906000526020600020905b8154815290600101906020018083116102e657829003601f168201915b50505050509050915091509091565b816102715760405163100960cb60e01b81526004810182905260240160405180910390fd5b50805461034390610402565b6000825580601f10610353575050565b601f0160209004906000526020600020908101906103719190610374565b50565b5b808211156103895760008155600101610375565b5090565b60006040828403121561039f57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156103d9578581018301518582016060015282016103bd565b818111156103eb576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061041657607f821691505b6020821081141561039f57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461044e57600080fd5b919050565b60006080828403121561046557600080fd5b6040516080810181811067ffffffffffffffff8211171561049657634e487b7160e01b600052604160045260246000fd5b6040526104a283610437565b815260208301516020820152604083015160408201526104c460608401610437565b60608201529392505050565b8035801515811461044e57600080fd5b6001600160a01b0383168152813560208083019190915260608201906105079084016104d0565b151560408301529392505050565b60006020828403121561052757600080fd5b610530826104d0565b939250505056fea264697066735822122021956593a75ff3bb3a9f954818928f294979cd07b1f432f5693d1eb56b03a98664736f6c634300080c0033`,
  BytecodeLen: 2403,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:39:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:57:9:after expr stmt semicolon',
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
  "Guest": Guest,
  "Host": Host
  };
export const _APIs = {
  };

const x = [
  {
    "name": "Ethereum Mainnet",
    "chain": "ETH",
    "icon": "ethereum",
    "rpc": [
      "https://cloudflare-eth.com",
      "https://api.mycryptoapi.com/eth"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "infoURL": "https://ethereum.org",
    "shortName": "eth",
    "chainId": 1,
    "networkId": 1,
    "slip44": 60,
    "ens": {
      "registry": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    "explorers": [
      {
        "name": "etherscan",
        "url": "https://etherscan.io",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Binance Smart Chain Mainnet",
    "chain": "BSC",
    "rpc": [
      "https://bsc-dataseed1.binance.org",
      "https://bsc-dataseed2.binance.org",
      "https://bsc-dataseed3.binance.org",
      "https://bsc-dataseed4.binance.org",
      "https://bsc-dataseed1.defibit.io",
      "https://bsc-dataseed2.defibit.io",
      "https://bsc-dataseed3.defibit.io",
      "https://bsc-dataseed4.defibit.io",
      "https://bsc-dataseed1.ninicoin.io",
      "https://bsc-dataseed2.ninicoin.io",
      "https://bsc-dataseed3.ninicoin.io",
      "https://bsc-dataseed4.ninicoin.io",
      "wss://bsc-ws-node.nariox.org"
    ],
    "faucets": [
      "https://free-online-app.com/faucet-for-eth-evm-chains/"
    ],
    "nativeCurrency": {
      "name": "Binance Chain Native Token",
      "symbol": "BNB",
      "decimals": 18
    },
    "infoURL": "https://www.binance.org",
    "shortName": "bnb",
    "chainId": 56,
    "networkId": 56,
    "slip44": 714,
    "explorers": [
      {
        "name": "bscscan",
        "url": "https://bscscan.com",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "EOS Mainnet",
    "chain": "EOS",
    "rpc": [
      "https://api.eosargentina.io"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "EOS",
      "symbol": "EOS",
      "decimals": 18
    },
    "infoURL": "https://eoscommunity.org/",
    "shortName": "EOS-Mainnet",
    "chainId": 59,
    "networkId": 59,
    "explorers": [
      {
        "name": "bloks",
        "url": "https://bloks.eosargentina.io",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "OKExChain Testnet",
    "chain": "okexchain",
    "rpc": [
      "https://exchaintestrpc.okex.org"
    ],
    "faucets": [
      "https://www.okex.com/drawdex"
    ],
    "nativeCurrency": {
      "name": "OKExChain Global Utility Token in testnet",
      "symbol": "OKT",
      "decimals": 18
    },
    "infoURL": "https://www.okex.com/okexchain",
    "shortName": "tokt",
    "chainId": 65,
    "networkId": 65,
    "explorers": [
      {
        "name": "OKLink",
        "url": "https://www.oklink.com/okexchain-test",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "OKXChain Mainnet",
    "chain": "okxchain",
    "rpc": [
      "https://exchainrpc.okex.org",
      "https://okc-mainnet.gateway.pokt.network/v1/lb/6275309bea1b320039c893ff"
    ],
    "faucets": [
      "https://free-online-app.com/faucet-for-eth-evm-chains/?"
    ],
    "nativeCurrency": {
      "name": "OKXChain Global Utility Token",
      "symbol": "OKT",
      "decimals": 18
    },
    "infoURL": "https://www.okex.com/okc",
    "shortName": "okt",
    "chainId": 66,
    "networkId": 66,
    "explorers": [
      {
        "name": "OKLink",
        "url": "https://www.oklink.com/en/okc",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "GateChain Testnet",
    "chainId": 85,
    "shortName": "gttest",
    "chain": "GTTEST",
    "networkId": 85,
    "nativeCurrency": {
      "name": "GateToken",
      "symbol": "GT",
      "decimals": 18
    },
    "rpc": [
      "https://testnet.gatenode.cc"
    ],
    "faucets": [
      "https://www.gatescan.org/testnet/faucet"
    ],
    "explorers": [
      {
        "name": "GateScan",
        "url": "https://www.gatescan.org/testnet",
        "standard": "EIP3091"
      }
    ],
    "infoURL": "https://www.gatechain.io"
  },
  {
    "name": "GateChain Mainnet",
    "chainId": 86,
    "shortName": "gt",
    "chain": "GT",
    "networkId": 86,
    "nativeCurrency": {
      "name": "GateToken",
      "symbol": "GT",
      "decimals": 18
    },
    "rpc": [
      "https://evm.gatenode.cc"
    ],
    "faucets": [
      "https://www.gatescan.org/faucet"
    ],
    "explorers": [
      {
        "name": "GateScan",
        "url": "https://www.gatescan.org",
        "standard": "EIP3091"
      }
    ],
    "infoURL": "https://www.gatechain.io"
  },
  {
    "name": "TomoChain",
    "chain": "TOMO",
    "rpc": [
      "https://rpc.tomochain.com"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "TomoChain",
      "symbol": "TOMO",
      "decimals": 18
    },
    "infoURL": "https://tomochain.com",
    "shortName": "tomo",
    "chainId": 88,
    "networkId": 88,
    "slip44": 889
  },
  {
    "name": "TomoChain Testnet",
    "chain": "TOMO",
    "rpc": [
      "https://rpc.testnet.tomochain.com"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "TomoChain",
      "symbol": "TOMO",
      "decimals": 18
    },
    "infoURL": "https://tomochain.com",
    "shortName": "tomot",
    "chainId": 89,
    "networkId": 89,
    "slip44": 889
  },
  {
    "name": "Huobi ECO Chain Mainnet",
    "chain": "Heco",
    "rpc": [
      "https://http-mainnet.hecochain.com",
      "wss://ws-mainnet.hecochain.com"
    ],
    "faucets": [
      "https://free-online-app.com/faucet-for-eth-evm-chains/"
    ],
    "nativeCurrency": {
      "name": "Huobi ECO Chain Native Token",
      "symbol": "HT",
      "decimals": 18
    },
    "infoURL": "https://www.hecochain.com",
    "shortName": "heco",
    "chainId": 128,
    "networkId": 128,
    "slip44": 1010,
    "explorers": [
      {
        "name": "hecoinfo",
        "url": "https://hecoinfo.com",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Polygon Mainnet",
    "chain": "Polygon",
    "rpc": [
      "https://polygon-rpc.com/",
      "https://rpc-mainnet.matic.network",
      "https://matic-mainnet.chainstacklabs.com",
      "https://rpc-mainnet.maticvigil.com",
      "https://rpc-mainnet.matic.quiknode.pro",
      "https://matic-mainnet-full-rpc.bwarelabs.com"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "MATIC",
      "symbol": "MATIC",
      "decimals": 18
    },
    "infoURL": "https://polygon.technology/",
    "shortName": "MATIC",
    "chainId": 137,
    "networkId": 137,
    "slip44": 966,
    "explorers": [
      {
        "name": "polygonscan",
        "url": "https://polygonscan.com",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "BMC Mainnet",
    "chain": "BMC",
    "rpc": [
      "https://mainnet.bmcchain.com/"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "BTM",
      "symbol": "BTM",
      "decimals": 18
    },
    "infoURL": "https://bmc.bytom.io/",
    "shortName": "BMC",
    "chainId": 188,
    "networkId": 188,
    "explorers": [
      {
        "name": "Blockmeta",
        "url": "https://bmc.blockmeta.com",
        "standard": "none"
      }
    ]
  },
  {
    "name": "BMC Testnet",
    "chain": "BMC",
    "rpc": [
      "https://testnet.bmcchain.com"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "BTM",
      "symbol": "BTM",
      "decimals": 18
    },
    "infoURL": "https://bmc.bytom.io/",
    "shortName": "BMCT",
    "chainId": 189,
    "networkId": 189,
    "explorers": [
      {
        "name": "Blockmeta",
        "url": "https://bmctestnet.blockmeta.com",
        "standard": "none"
      }
    ]
  },
  {
    "name": "LACHAIN Mainnet",
    "chain": "LA",
    "icon": "lachain",
    "rpc": [
      "https://rpc-mainnet.lachain.io"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "LA",
      "symbol": "LA",
      "decimals": 18
    },
    "infoURL": "https://lachain.io",
    "shortName": "LA",
    "chainId": 225,
    "networkId": 225,
    "explorers": [
      {
        "name": "blockscout",
        "url": "https://scan.lachain.io",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "LACHAIN Testnet",
    "chain": "TLA",
    "icon": "lachain",
    "rpc": [
      "https://rpc-testnet.lachain.io"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "TLA",
      "symbol": "TLA",
      "decimals": 18
    },
    "infoURL": "https://lachain.io",
    "shortName": "TLA",
    "chainId": 226,
    "networkId": 226,
    "explorers": [
      {
        "name": "blockscout",
        "url": "https://scan-test.lachain.io",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Fantom Opera",
    "chain": "FTM",
    "rpc": [
      "https://rpc.ftm.tools"
    ],
    "faucets": [
      "https://free-online-app.com/faucet-for-eth-evm-chains/"
    ],
    "nativeCurrency": {
      "name": "Fantom",
      "symbol": "FTM",
      "decimals": 18
    },
    "infoURL": "https://fantom.foundation",
    "shortName": "ftm",
    "chainId": 250,
    "networkId": 250,
    "icon": "fantom",
    "explorers": [
      {
        "name": "ftmscan",
        "url": "https://ftmscan.com",
        "icon": "ftmscan",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Fantom Testnet",
    "chain": "FTM",
    "rpc": [
      "https://rpc.testnet.fantom.network"
    ],
    "faucets": [
      "https://faucet.fantom.network"
    ],
    "nativeCurrency": {
      "name": "Fantom",
      "symbol": "FTM",
      "decimals": 18
    },
    "infoURL": "https://docs.fantom.foundation/quick-start/short-guide#fantom-testnet",
    "shortName": "tftm",
    "chainId": 4002,
    "networkId": 4002,
    "icon": "fantom",
    "explorers": [
      {
        "name": "ftmscan",
        "url": "https://testnet.ftmscan.com",
        "icon": "ftmscan",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Huobi ECO Chain Testnet",
    "chain": "Heco",
    "rpc": [
      "https://http-testnet.hecochain.com",
      "wss://ws-testnet.hecochain.com"
    ],
    "faucets": [
      "https://scan-testnet.hecochain.com/faucet"
    ],
    "nativeCurrency": {
      "name": "Huobi ECO Chain Test Native Token",
      "symbol": "htt",
      "decimals": 18
    },
    "infoURL": "https://testnet.hecoinfo.com",
    "shortName": "hecot",
    "chainId": 256,
    "networkId": 256
  },
  {
    "name": "Double-A Chain Mainnet",
    "chain": "AAC",
    "rpc": [
      "https://rpc.acuteangle.com"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "Acuteangle Native Token",
      "symbol": "AAC",
      "decimals": 18
    },
    "infoURL": "https://www.acuteangle.com/",
    "shortName": "aac",
    "chainId": 512,
    "networkId": 512,
    "slip44": 1512,
    "explorers": [
      {
        "name": "aacscan",
        "url": "https://scan.acuteangle.com",
        "standard": "EIP3091"
      }
    ],
    "icon": "aac"
  },
  {
    "name": "Double-A Chain Testnet",
    "chain": "AAC",
    "icon": "aac",
    "rpc": [
      "https://rpc-testnet.acuteangle.com"
    ],
    "faucets": [
      "https://scan-testnet.acuteangle.com/faucet"
    ],
    "nativeCurrency": {
      "name": "Acuteangle Native Token",
      "symbol": "AAC",
      "decimals": 18
    },
    "infoURL": "https://www.acuteangle.com/",
    "shortName": "aact",
    "chainId": 513,
    "networkId": 513,
    "explorers": [
      {
        "name": "aacscan-testnet",
        "url": "https://scan-testnet.acuteangle.com",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "BlockChain Station Mainnet",
    "chain": "BCS",
    "rpc": [
      "https://rpc-mainnet.bcsdev.io",
      "wss://rpc-ws-mainnet.bcsdev.io"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "BCS Token",
      "symbol": "BCS",
      "decimals": 18
    },
    "infoURL": "https://blockchainstation.io",
    "shortName": "bcs",
    "chainId": 707,
    "networkId": 707,
    "explorers": [
      {
        "name": "BlockChain Station Explorer",
        "url": "https://explorer.bcsdev.io",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "BlockChain Station Testnet",
    "chain": "BCS",
    "rpc": [
      "https://rpc-testnet.bcsdev.io",
      "wss://rpc-ws-testnet.bcsdev.io"
    ],
    "faucets": [
      "https://faucet.bcsdev.io"
    ],
    "nativeCurrency": {
      "name": "BCS Testnet Token",
      "symbol": "tBCS",
      "decimals": 18
    },
    "infoURL": "https://blockchainstation.io",
    "shortName": "tbcs",
    "chainId": 708,
    "networkId": 708,
    "explorers": [
      {
        "name": "BlockChain Station Explorer",
        "url": "https://testnet.bcsdev.io",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Moonbeam",
    "chain": "MOON",
    "rpc": [
      "https://rpc.api.moonbeam.network",
      "wss://wss.api.moonbeam.network"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "Glimmer",
      "symbol": "GLMR",
      "decimals": 18
    },
    "infoURL": "https://moonbeam.network/networks/moonbeam/",
    "shortName": "mbeam",
    "chainId": 1284,
    "networkId": 1284,
    "explorers": [
      {
        "name": "moonscan",
        "url": "https://moonbeam.moonscan.io",
        "standard": "none"
      }
    ]
  },
  {
    "name": "Moonriver",
    "chain": "MOON",
    "rpc": [
      "https://rpc.api.moonriver.moonbeam.network",
      "wss://wss.api.moonriver.moonbeam.network"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "Moonriver",
      "symbol": "MOVR",
      "decimals": 18
    },
    "infoURL": "https://moonbeam.network/networks/moonriver/",
    "shortName": "mriver",
    "chainId": 1285,
    "networkId": 1285,
    "explorers": [
      {
        "name": "moonscan",
        "url": "https://moonriver.moonscan.io",
        "standard": "none"
      }
    ]
  },
  {
    "name": "Moonrock old",
    "chain": "MOON",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {
      "name": "Rocs",
      "symbol": "ROC",
      "decimals": 18
    },
    "infoURL": "",
    "shortName": "mrock-old",
    "chainId": 1286,
    "networkId": 1286,
    "status": "deprecated"
  },
  {
    "name": "Moonbase Alpha",
    "chain": "MOON",
    "rpc": [
      "https://rpc.api.moonbase.moonbeam.network",
      "wss://wss.api.moonbase.moonbeam.network"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "Dev",
      "symbol": "DEV",
      "decimals": 18
    },
    "infoURL": "https://docs.moonbeam.network/networks/testnet/",
    "shortName": "mbase",
    "chainId": 1287,
    "networkId": 1287,
    "explorers": [
      {
        "name": "moonscan",
        "url": "https://moonbase.moonscan.io",
        "standard": "none"
      }
    ]
  },
  {
    "name": "Moonrock",
    "chain": "MOON",
    "rpc": [
      "https://rpc.api.moonrock.moonbeam.network",
      "wss://wss.api.moonrock.moonbeam.network"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "Rocs",
      "symbol": "ROC",
      "decimals": 18
    },
    "infoURL": "https://docs.moonbeam.network/learn/platform/networks/overview/",
    "shortName": "mrock",
    "chainId": 1288,
    "networkId": 1288
  },
  {
    "name": "Celo Mainnet",
    "chainId": 42220,
    "shortName": "CELO",
    "chain": "CELO",
    "networkId": 42220,
    "nativeCurrency": {
      "name": "CELO",
      "symbol": "CELO",
      "decimals": 18
    },
    "rpc": [
      "https://forno.celo.org",
      "wss://forno.celo.org/ws"
    ],
    "faucets": [
      "https://free-online-app.com/faucet-for-eth-evm-chains/"
    ],
    "infoURL": "https://docs.celo.org/",
    "explorers": [
      {
        "name": "blockscout",
        "url": "https://explorer.celo.org",
        "standard": "none"
      }
    ]
  },
  {
    "name": "Celo Alfajores Testnet",
    "chainId": 44787,
    "shortName": "ALFA",
    "chain": "CELO",
    "networkId": 44787,
    "nativeCurrency": {
      "name": "CELO",
      "symbol": "CELO",
      "decimals": 18
    },
    "rpc": [
      "https://alfajores-forno.celo-testnet.org",
      "wss://alfajores-forno.celo-testnet.org/ws"
    ],
    "faucets": [
      "https://celo.org/developers/faucet",
      "https://cauldron.pretoriaresearchlab.io/alfajores-faucet"
    ],
    "infoURL": "https://docs.celo.org/"
  },
  {
    "name": "Celo Baklava Testnet",
    "chainId": 62320,
    "shortName": "BKLV",
    "chain": "CELO",
    "networkId": 62320,
    "nativeCurrency": {
      "name": "CELO",
      "symbol": "CELO",
      "decimals": 18
    },
    "rpc": [
      "https://baklava-forno.celo-testnet.org"
    ],
    "faucets": [
      "https://docs.google.com/forms/d/e/1FAIpQLSdfr1BwUTYepVmmvfVUDRCwALejZ-TUva2YujNpvrEmPAX2pg/viewform",
      "https://cauldron.pretoriaresearchlab.io/baklava-faucet"
    ],
    "infoURL": "https://docs.celo.org/"
  },
  {
    "name": "Avalanche Fuji Testnet",
    "chain": "AVAX",
    "rpc": [
      "https://api.avax-test.network/ext/bc/C/rpc"
    ],
    "faucets": [
      "https://faucet.avax-test.network/"
    ],
    "nativeCurrency": {
      "name": "Avalanche",
      "symbol": "AVAX",
      "decimals": 18
    },
    "infoURL": "https://cchain.explorer.avax-test.network",
    "shortName": "Fuji",
    "chainId": 43113,
    "networkId": 1,
    "explorers": [
      {
        "name": "snowtrace",
        "url": "https://testnet.snowtrace.io",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Avalanche C-Chain",
    "chain": "AVAX",
    "rpc": [
      "https://api.avax.network/ext/bc/C/rpc"
    ],
    "faucets": [
      "https://free-online-app.com/faucet-for-eth-evm-chains/"
    ],
    "nativeCurrency": {
      "name": "Avalanche",
      "symbol": "AVAX",
      "decimals": 18
    },
    "infoURL": "https://www.avax.network/",
    "shortName": "Avalanche",
    "chainId": 43114,
    "networkId": 43114,
    "slip44": 9005,
    "explorers": [
      {
        "name": "snowtrace",
        "url": "https://snowtrace.io",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Aurora Mainnet",
    "chain": "NEAR",
    "rpc": [
      "https://mainnet.aurora.dev"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "infoURL": "https://aurora.dev",
    "shortName": "aurora",
    "chainId": 1313161554,
    "networkId": 1313161554,
    "explorers": [
      {
        "name": "aurorascan.dev",
        "url": "https://aurorascan.dev",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Aurora Testnet",
    "chain": "NEAR",
    "rpc": [
      "https://testnet.aurora.dev/"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "infoURL": "https://aurora.dev",
    "shortName": "aurora-testnet",
    "chainId": 1313161555,
    "networkId": 1313161555,
    "explorers": [
      {
        "name": "aurorascan.dev",
        "url": "https://testnet.aurorascan.dev",
        "standard": "EIP3091"
      }
    ]
  },
  {
    "name": "Aurora Betanet",
    "chain": "NEAR",
    "rpc": [
      "https://betanet.aurora.dev/"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "infoURL": "https://aurora.dev",
    "shortName": "aurora-betanet",
    "chainId": 1313161556,
    "networkId": 1313161556
  }
]

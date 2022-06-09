<template>
  <div class="mx-auto max-w-3xl px-4 space-y-8">
    <div class="space-y-2">
      <h1 class="font-semibold text-3xl md:text-5xl">Smart Contract Playground</h1>
      <p class="text-xl">Easy way to read any <span
        class="px-2 py-0.5 rounded border bg-yellow-50">smart contract</span> with address and ABI</p>
    </div>
    <div class="grid grid-cols-1 gap-6 text-lg">
      <div class="space-y-4">
        <chain-selector ref="selectChain" @select="onSelectChain"/>
        <input class="p-2 border w-full" v-model="address" type="text">
        <div class="flex flex-col space-y-2">
          <select class="bg-white p-2 border w-full" v-model="activeABI">
            <option v-for="key in Object.keys(ABI)" :key="key" :value="key">{{ key }}</option>
          </select>
          <div>or</div>
          <input ref="inputFile" type="file" @change="previewFiles"/>
        </div>
        <div class="space-y-3">
          <div v-for="item in Object.keys(input)">
            <label
              class="flex flex-col p-2 border w-full bg-white">
              <span class="text-gray-500 text-xs">{{ item }}</span>
              <input class="flex-1 outline-none" v-model="input[item]" type="text">
            </label>
          </div>
        </div>
        <div class="rounded p-4 w-full text-white font-bold bg-blue-400 cursor-pointer text-center" @click="load()">Process</div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div class="border p-3 bg-gray-100 space-y-2" v-for="item in methods">
          <div class="text-xs flex space-x-1 items-center">
            <h4 class="uppercase font-bold">{{ item.name }}</h4>
            <span>(</span>
            <div v-if="item.inputs.length" class="flex space-x-1 text-xs text-gray-500 items-center">
              <span
                v-for="inputItem in item.inputs" :key="inputItem.name"
                class="flex p-1 py-0.5 border bg-yellow-50 rounded"
              >{{ inputItem.name }}</span>
            </div>
            <span>)</span>
          </div>
          <div class="p-2 border text-xs font-mono bg-white">
            <span v-if="output[item.name]">{{ output[item.name] }}</span>
            <span v-else class="text-gray-500">Please input</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Web3 from "web3";
import ChainSelector from "../../../components/ChainSelector";
import DIcon from "../../../components/Icon/Icon";
export default {
  name: 'IndexPage',
  components: {DIcon, ChainSelector},
  head() {
    const desc = "Easy way to read any smart contract with address and ABI"
    const title = "Smart Contract Playground | SmartContractToolkit.com"
    return {
      title: title,
      meta: [
        {hid: 'description', name: "description", "content": desc},
        {hid: 'og:title', name: "og:title", "content": title},
        {hid: 'og:description', name: "og:description", "content": desc},
      ]
    }
  },
  data() {
    return {
      address: "0xb7F7c7D91Ede27b019e265F8ba04c63333991e02",
      activeABI: 'ERC20',
      input: {},
      output: {},
      err: {},
      activeChain: {
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
      }
    }
  },
  methods: {
    createInput() {
      this.$refs.selectChain.selected = this.activeChain
      this.input = {}
      this.output = {}
      this.err = {}
      this.methods.forEach(item => {
        this.$set(this.output, item.name, null)
        this.$set(this.err, item.name, null)
        item.inputs.forEach(input => {
          this.$set(this.input, input.name, null)
        })
      })
    },
    async load() {
      try {
        const w3 = new Web3(this.activeChain.rpc[0]);
        const contract = new w3.eth.Contract(this.ABI[this.activeABI].schemas, this.address);
        this.methods.forEach(item => {
          const args = []
          this.output[item.name] = null
          this.err[item.name] = null
          let inputFilled = true
          item.inputs.forEach(inputParam => {
            if (!this.input[inputParam.name]) {
              inputFilled = false
            }
            args.push(this.input[inputParam.name])
          })
          if (inputFilled) {
            contract.methods[item.name].apply(window, args).call().then(function (res, err) {
              if (err) {
                console.log("An error occured", err)
                this.err[[item.name]] = err
              }
              this.output[item.name] = res
            }.bind(this))
          }
        })
      } catch (e) {
        console.log(e);
        console.log("A");
      }
    },
    logFile(event) {
      const str = event.target.result;
      const json = JSON.parse(str);
      const key = `ABI_INPUT_${Object.keys(this.ABI).length}`
      this.$store.commit('ADD_ABI', {
        key: key,
        abi: {
          name: key,
          show: false,
          schemas: json
        }
      })
      this.activeABI = key
    },
    previewFiles(event) {
      let reader = new FileReader();
      reader.readAsText(event.target.files[0]);
      reader.onload = this.logFile;
      this.$refs.inputFile.value = null;
    },
    onSelectChain(item) {
      this.activeChain = item
      this.$refs.selectChain.selected = this.activeChain
    }
  },
  computed: {
    ABI() {
      return this.$store.state.ABI
    },
    methods() {
      return this.ABI[this.activeABI] ? this.ABI[this.activeABI].schemas.filter(x => x.type === 'function' && x.stateMutability === 'view') : []
    }
  },
  watch: {
    activeABI() {
      this.createInput()
    }
  },
  mounted() {
    this.createInput()
  }
}
</script>

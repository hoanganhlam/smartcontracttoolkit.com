<template>
  <div class="mx-auto max-w-3xl space-y-8">
    <div class="space-y-10">
      <div class="space-y-3 text-center">
        <h2 class="text-4xl font-semibold">ABI Downloads</h2>
        <p class="text-xl w-2/3 mx-auto">Find and download ABI for your projects.</p>
      </div>
      <div class="space-y-4">
        <abi-viewer v-for="item in items" :key="item.name" :value="item"/>
      </div>
      <app-list/>
    </div>
  </div>
</template>

<script>
import DIcon from "../components/Icon/Icon";
import {cloneDeep} from "lodash"
import ABIViewer from "../components/ABIViewer";
import AppList from "../components/AppList";

export default {
  name: "AbiApp",
  components: {AppList, 'abi-viewer': ABIViewer, DIcon},
  head() {
    const title = "ABI Downloads | ERC20 | ERC 721 | ERC1155"
    const desc = "Find and download ABI for your projects. Currently, supported ERC20, ERC721 and ERC1155"
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
      items: []
    }
  },
  created() {
    Object.keys(this.$store.state.ABI).forEach(item => {
      this.items.push(cloneDeep(this.$store.state.ABI[item]))
    })
  },
}
</script>

<style scoped>

</style>

<template>
  <div class="px-4 space-y-8">
    <div class="border-b pt-16 pb-32">
      <div class="mx-auto max-w-3xl space-y-10 md:flex items-center md:space-x-6 space-y-6 md:space-y-0">
        <div class="space-y-3 md:w-2/3">
          <h2 class="text-5xl font-bold">Smart Contract Toolkit</h2>
          <p class="text-xl">It can also be used as a working tool,</p>
          <p class="text-xl"><b>Smart Contract Toolkit</b> help you work more <span class="px-2 py-0.5 rounded border bg-yellow-50">effectively</span> on blockchain.</p>
        </div>
        <div class="flex-1">
          <img src="/Smart_Contract_Toolkit.svg" alt="Smart Contract Toolkit">
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-3xl space-y-10">
      <div class="space-y-3 text-center">
        <h2 class="text-3xl font-semibold">Explore</h2>
        <p class="text-xl w-2/3 mx-auto">Check out free apps that help you explore and create contract easiest.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <nuxt-link
          v-for="item in apps"
          :key="item.id"
          :to="`/${item.id}`"
          class="border p-4 rounded flex hover:shadow">
          <d-icon :name="item.icon" class="xl"/>
          <div class="ml-4">
            <h3 class="text-xl font-bold">{{ item.name }}</h3>
            <p class="text-lg">{{ item.desc }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import DIcon from "../components/Icon/Icon";

export default {
  name: "IndexPage",
  components: {DIcon},
  head() {
    const desc = "Smart Contract Toolkit help you work more effectively on blockchain. It can also be used as a working tool."
    const title = "Smart Contract Toolkit"
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
      apps: [
        {
          name: "Playground",
          id: "playground",
          icon: "play",
          desc: "Easy way to read any smart contract with address and ABI."
        },
        {
          name: "ABI downloads",
          id: "abi",
          icon: "download",
          desc: "Find and download ABI for your projects."
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

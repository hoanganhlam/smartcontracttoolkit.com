<template>
  <div class="mx-auto max-w-3xl px-4 space-y-8">
    <div class="space-y-10">
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

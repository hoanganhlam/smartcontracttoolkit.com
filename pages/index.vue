<template>
  <div class="space-y-8">
    <div class="border-b pb-8 md:pt-16 md:pb-32 px-4">
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
    <div class="mx-auto max-w-3xl space-y-10 px-4">
      <div class="space-y-3 text-center">
        <h2 class="text-3xl font-semibold">Explore</h2>
        <p class="text-xl md:w-2/3 mx-auto">Check out free apps that help you explore and create contract easiest.</p>
      </div>
      <app-list/>
    </div>
  </div>
</template>

<script>
import DIcon from "../components/Icon/Icon";
import AppList from "../components/AppList";

export default {
  name: "IndexPage",
  components: {AppList, DIcon},
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
  }
}
</script>

<style scoped>

</style>

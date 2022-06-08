<template>
  <div>
    <header class="border-b py-1">
      <div class="mx-auto max-w-3xl px-4 uppercase font-bold py-2">
        <nuxt-link class="py-2" to="/">Home</nuxt-link>
      </div>
    </header>
    <main class="py-8">
      <nuxt/>
    </main>
    <footer class="py-4 text-xs text-center bg-gray-50 border-t">
      <p class="text-gray-500">© 2022 smartcontracttoolkit.com. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>

export default {
  name: "LayoutDefault",
  components: {},
  head() {
    return {
      title: "Smart Contract Toolkit | SmartContractToolkit.com",
      meta: [{hid: 'description', name: 'description', content: "desc"}],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
        }
      ]
    }
  }
}
</script>

<style>
main {
  min-height: calc(100vh - 98px);
}
</style>

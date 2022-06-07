<template>
  <div>
    <header class="mb-6 bg-gray-100 py-1">
      <div class="mx-auto max-w-lg uppercase font-bold py-2">
        <nuxt-link class="py-2" to="/">Home</nuxt-link>
      </div>
    </header>
    <main>
      <nuxt/>
    </main>
    <footer class="mt-8 py-4 text-sm text-center">
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
          href: 'https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;500;600;700;800&display=swap'
        }
      ]
    }
  }
}
</script>

<style>

</style>

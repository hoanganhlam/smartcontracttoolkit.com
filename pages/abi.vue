<template>
  <div class="mx-auto max-w-3xl px-4 space-y-8">
    <div class="space-y-10">
      <div class="space-y-3 text-center">
        <h2 class="text-3xl font-semibold">ABI Downloads</h2>
        <p class="text-xl w-2/3 mx-auto">Find and download ABI for your projects.</p>
      </div>
      <div class="space-y-4">
        <div
          v-for="item in items" :key="item.name"
          class="rounded cursor-pointer hover:shadow-xl shadow duration-200"
        >
          <div class="flex justify-between items-center p-4">
            <div class="font-bold text-xl cursor-pointer flex space-x-2" @click="item.show = !item.show">
              <d-icon :name="item.show ? 'collapse': 'expand'"></d-icon>
              <span>{{ item.name }}</span>
            </div>
            <div class="flex space-x-4">
              <div class="cursor-pointer">
                <d-icon name="copy"></d-icon>
              </div>
              <a :href="item.uri" download>
                <d-icon name="download"></d-icon>
              </a>
            </div>
          </div>
          <div v-if="item.show" class="p-4 border-t max-h-64 overflow-y-auto">
            <pre>{{ item.content }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DIcon from "../components/Icon/Icon";

export default {
  name: "AbiApp",
  components: {DIcon},
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
      items: [
        {
          name: "ERC20",
          show: false,
          uri: 'https://gist.githubusercontent.com/hoanganhlam/362d77a2352c84abfb971e4692061d6c/raw/39159b62337240aeea095899ba186efd2dd56be6/ABI-ERC20.json',
          content: null
        },
        {
          name: "ERC721",
          show: false,
          uri: 'https://gist.githubusercontent.com/hoanganhlam/0fef79860e992cf3cabf7e8b8fb11ccf/raw/3ba6810ee322bf8a1fa05420159fc292155c339c/ABI-ERC721.json',
          content: null
        },
        {
          name: "ERC1155",
          show: false,
          uri: 'https://gist.githubusercontent.com/hoanganhlam/96c9012eb45f3c5b55592e53979727d9/raw/892627810d058e1d5cfedd366040b9244386c02f/ABI-ERC1155.json',
          content: null
        },
      ]
    }
  },
  mounted() {
    this.items.forEach(item => {
      fetch(item.uri).then(res => {
        return res.json()
      }).then(json => {
        item.content = json
      })
    })
  },
}
</script>

<style scoped>

</style>

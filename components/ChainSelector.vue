<template>
  <div class="relative" ref="instance">
    <div class="p-2 flex space-x-2 border w-full cursor-pointer" @click="active = true">
      <d-icon name="chain"/>
      <span>{{ selected ? selected.name : 'Select a chain' }}</span>
    </div>
    <div v-if="active" class="absolute -top-3 -right-3 -left-3 border bg-white p-3 shadow space-y-3">
      <input class="p-4 rounded py-1 border w-full" v-model="search" type="text" placeholder="Search by a word">
      <div>
        <div class="cursor-pointer py-1" v-for="item in shown" :key="item.chainId" @click="select(item)">
          <div>{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DIcon from "./Icon/Icon";
export default {
  name: "ChainSelector",
  components: {DIcon},
  data() {
    return {
      search: null,
      selected: null,
      active: false
    }
  },
  computed: {
    dataset() {
      return this.$store.state.CHAIN_LIST
    },
    shown() {
      return this.dataset.filter(x => {
        if (!this.search) return true;
        return x.name.toLowerCase().includes(this.search.toLowerCase())
      }).slice(0, 5)
    }
  },
  watch: {
    active() {
      if (this.active) {
        window.addEventListener('click', this.clickOutSite)
      } else {
        window.removeEventListener('click', this.clickOutSite)
      }
    }
  },
  methods: {
    select(item) {
      this.$emit('select', item)
      this.active = false
    },
    clickOutSite(e) {
      if (!this.$refs.instance.contains(e.target)) {
        this.active = false
      }
    }
  }
}
</script>

<style scoped>

</style>

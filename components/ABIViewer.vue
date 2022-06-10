<template>
  <div
    v-if="value"
    class="rounded cursor-pointer hover:shadow-xl shadow duration-200"
  >
    <div class="flex justify-between items-center p-4">
      <div class="font-bold text-xl cursor-pointer flex space-x-2" @click="is_show = !is_show">
        <d-icon :name="value.show ? 'collapse': 'expand'"/>
        <span>{{ value.name }}</span>
      </div>
      <div class="flex space-x-4">
        <div class="cursor-pointer">
          <d-icon name="copy"/>
        </div>
        <a :href="value.uri" download>
          <d-icon name="download"/>
        </a>
      </div>
    </div>
    <div v-if="is_show" class="p-4 border-t space-y-3">
      <div class="flex space-x-4 flex-wrap">
        <div class="flex items-center">
          <input
            id="count-method"
            type="checkbox"
            v-model="filter.method"
            class="check-box">
          <label for="count-method" class="ml-2 text-sm font-medium">Method</label>
          <span class="ml-1 text-gray-400">({{ countFunction }})</span>
        </div>
        <div class="flex items-center">
          <input
            id="count-event"
            type="checkbox"
            v-model="filter.event"
            class="check-box">
          <label for="count-event" class="ml-2 text-sm font-medium">Event</label>
          <span class="ml-1 text-gray-400">({{ countEvent }})</span>
        </div>
        <template v-if="filter.method">
          <div class="flex items-center">
            <input
              id="count-view"
              type="checkbox"
              v-model="filter.read"
              class="check-box">
            <label for="count-view" class="ml-2 text-sm font-medium">Read</label>
            <span class="ml-1 text-gray-400">({{ countView }})</span>
          </div>
          <div class="flex items-center">
            <input
              id="count-write"
              type="checkbox"
              v-model="filter.write"
              class="check-box">
            <label for="count-write" class="ml-2 text-sm font-medium">Write</label>
            <span class="ml-1 text-gray-400">({{ countWrite }})</span>
          </div>
        </template>
      </div>
      <div class="max-h-64 overflow-y-auto">
        <pre>{{ code }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import DIcon from "./Icon/Icon";

export default {
  name: "ABIViewer",
  components: {DIcon},
  props: {
    value: {
      type: Object,
      default: null
    }
  },
  data() {
    let countView = 0;
    let countFunction = 0;
    let countEvent = 0;
    let countWrite = 0;
    this.value.schemas.forEach(x => {
      if (x.type === 'function') {
        countFunction++
        if (x.stateMutability === 'view') {
          countView++
        } else {
          countWrite++
        }
      } else {
        countEvent++
      }
    })
    return {
      is_show: this.value.show,
      countView,
      countFunction,
      countEvent,
      countWrite,
      filter: {
        read: true,
        write: true,
        method: true,
        event: true
      }
    }
  },
  computed: {
    code() {
      return this.value.schemas.filter(x => {
        let check = false;
        if (this.filter.method && this.filter.event) {
          check = true;
        } else if (!this.filter.method && !this.filter.event) {
          check = false
        } else if (this.filter.method) {
          check = x.type === 'function'
        } else if (this.filter.event) {
          check = x.type === 'event'
        }
        if (this.filter.method) {
          if (x.stateMutability === 'view') {
            check = this.filter.read
          } else {
            check = this.filter.write
          }
        }
        return check
      })
    }
  }
}
</script>

<style scoped>
.check-box {
  @apply w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600;
}
</style>

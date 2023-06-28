<template>
  <div>
    {{ sports.sports }}
  </div>
</template>

<script setup>
import { useSportsStore } from '@/store/sports'

const sports = useSportsStore()

await sports.getSports()
</script>
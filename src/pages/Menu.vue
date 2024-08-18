<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  imgFileName: { type: String, required: true },
  active: { type: Boolean, default: false },
})

const getImageSrc = computed(() => {
  const { active, imgFileName } = props
  return active ? `/${imgFileName}.webp` : `${imgFileName}_inactive.webp`
})
</script>

<template>
  <div class="card">
    <div class="card__wrapper">
      <img class="card__img" :src="getImageSrc" :alt="`${imgFileName}.webp`">
      <div class="card__content">
        <div class="card__title">
          {{ title }}
        </div>
        <div class="card__sub__tittle">{{ subTitle }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding-left: 8px;
  padding-right: 8px;
  width: 400px;
  height: 100px;
  background: #fff7f7;
  color: black;
  border-radius: 10px;
}
.card__wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}
.card__img {
  border-radius: 50%;
  width: 70px;
  height: 70px;
}
.card__content {
  margin: 0 auto;
  text-align: center;
}
.card__title {
  font-size: 1.8rem;
  font-weight: 900;
}
.card__sub__tittle {
  font-size: 1rem;
  color: slategray;
}
</style>

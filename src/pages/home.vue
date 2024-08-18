<script setup lang="ts">
import Menu from './Menu.vue';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { animateCards, MENUS } from './menu.ts';

const currentIndex = ref(MENUS.length-1);
const menuContainer = ref<HTMLElement>();
const menus = computed((): Element[] => {
  return Array.from(menuContainer.value?.children ?? [])
})

const handleWheel = (event: WheelEvent) => {
  event.preventDefault();
  const scrollDirection = event.deltaY > 0 ? 'down' : 'up';

  if (scrollDirection === 'down' && currentIndex.value < menus.value.length - 1) {
    currentIndex.value++;
  } else if (scrollDirection === 'up'  && currentIndex.value > 0) {
    currentIndex.value--;
  }
  animateCards(menus.value, currentIndex.value);
}

onMounted(() => {
  window.addEventListener('wheel', handleWheel, { passive: false });
  animateCards(menus.value, currentIndex.value);
})

onUnmounted(() => {
  window.removeEventListener('wheel', handleWheel)
})
</script>

<template>
  <main>
    <div ref='menuContainer' class="menu__container">
      <Menu v-for="(menu, index) in MENUS.reverse()"
            class="menu__item"
            :key="`${menu.subTitle}`"
            :title="menu.title"
            :sub-title="menu.subTitle"
            :img-file-name="menu.imgFileName"
            :active="currentIndex === index"  />
    </div>
  </main>
  <footer>
    마우스 휠을 사용하여 메뉴를 선택하세요.
  </footer>
</template>

<style scoped>
footer {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
}
main {
  width: 100vw;
}
.menu__container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}
.menu__item {
  position: absolute;
  backface-visibility: hidden;
}
</style>

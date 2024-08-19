<script setup lang="ts">
import { dummy } from './data.ts';

</script>

<template>
  <div class="wrapper">
    <div class="search-bar">
      <img class="search-icon" src="/src/assets/search.svg" alt="검색 아이콘">
      <input type="text" autofocus />
    </div>
    <ul class="auto-completion">
      <li v-for="d in dummy" :key="d.key">
        {{d.description}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
input {
  all: unset;
  color: black;
  box-sizing: border-box;
  width: 100%;
  margin: 0 10px 0 10px;
}
li {
  margin-top: 5px;
  margin-bottom: 5px;
}
.wrapper {
  min-width: 70vw;
}
.search-bar {
  display: flex;
   border: 1px solid black;
  align-items: center;
  background: #fff7f7;
  border-radius: 20px;
  padding: 0 15px 0 15px;
  height: 48px;
}
.search-icon {
  width: 18px;
  height: 18px;
}
.auto-completion {
  background: #fff7f7;
  margin: 0 48px 0 48px;
  padding: 10px;
  color: black;
}

</style>

<script setup lang="ts">
import { ref } from "vue";

const tab = ref("");
</script>
<template>
  <q-layout view="lHh lpr lFf">
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>

        <q-toolbar-title class="text">Three Tech</q-toolbar-title>
      </q-toolbar>

      <q-tabs v-model="tab" class="tabs">
        <q-tab name="images">
          <router-link to="/" class="text"> 이미지 생성 </router-link>
        </q-tab>

        <q-tab name="list">
          <router-link to="/list" class="text">작품목록</router-link>
        </q-tab>

        <q-tab name="algorithm">
          <router-link to="/algorithm" class="text"> 알고리즘 </router-link>
        </q-tab>

        <q-tab name="contact">
          <router-link to="/contact" class="text"> Contact </router-link>
        </q-tab>
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view style="min-height: inherit" />
    </q-page-container>
  </q-layout>
</template>

<style>
.text {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 20px;
}
</style>

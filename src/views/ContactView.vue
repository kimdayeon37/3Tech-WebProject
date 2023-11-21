<script setup>
import { NotionRenderer, getPageBlocks } from "vue3-notion";
import { ref, onMounted } from "vue";
import Footer from "../layouts/Footer.vue";

const data = ref();

onMounted(async () => {
  data.value = await getPageBlocks("82c0d12456f24cc3a16bcebd1b6ebe6b");
});
</script>

<template>
  <br />
  <br />
  <NotionRenderer v-if="data" :blockMap="data" fullPage />
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <q-img src="src/assets/member.png" />
    </div>
  </div>
  <Footer />
</template>

<style>
@import "vue3-notion/dist/style.css"; /* optional Notion-like styles */
</style>

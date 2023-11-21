<script setup>
import { ref } from "vue";
import SelectImg from "../components/Prompt/SelectImage.vue";
import Footer from "../layouts/Footer.vue";


const slide = ref(1);
const autoplay = ref(true);
</script>

<template>
  <q-carousel
    animated
    v-model="slide"
    navigation
    infinite
    :autoplay="autoplay"
    arrows
    transition-prev="slide-right"
    transition-next="slide-left"
  >
    <q-carousel-slide :name="1" img-src="/src/assets/dalle2.png" />
    <q-carousel-slide :name="2" img-src="/src/assets/dalle.png" />
    <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
  </q-carousel>
<SelectImg />

<Footer />
</template>
<style></style>
<template>
  <q-dialog transition-show="rotate" transition-hide="rotate">
    <q-card class="q-pa-lg dialog-box">
      <q-form>
        <q-card-section>
          <div class="text-h6"><b>달나라 자동차, 만화</b></div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-btn
            push
            align="around"
            class="q-mb-md btn-fixed-width"
            color="secondary"
            label="Image Click !"
            icon="lightbulb_outline"
            @click="refresh"
          />
          <div class="q-gutter-sm row items-start">
            <q-img
              v-for="(image, index) in displayImages"
              :key="index"
              :src="image.url"
              :spinner-color="image.spinnerColor"
              style="height: 145px; max-width: 145px"
            />
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="close" color="black" @click="emits('update:modelValue', false)" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
const emits = defineEmits(["update:modelValue"]);

const imageFilenames: string[] = [
  "src/assets/data12/cartoon1.png",
  "src/assets/data12/cartoon2.png",
  "src/assets/data12/cartoon3.png",
  "src/assets/data12/cartoon4.png",
  "src/assets/data12/cartoon5.png",
  "src/assets/data12/cartoon6.png",
  "src/assets/data12/cartoon7.png",
  "src/assets/data12/cartoon8.png",
  "src/assets/data12/cartoon9.png",
];

type ImageType = {
  url: string;
  spinnerColor: string;
};

const images = ref<ImageType[]>([]);

// 각 이미지에 대한 객체를 반복하고 생성하여 images 배열을 초기화
for (let i = 0; i < imageFilenames.length; i++) {
  images.value.push({
    url: imageFilenames[i],
    spinnerColor: "red",
  });
}

// 9개의 랜덤 셔플 이미지
const displayImages = ref<ImageType[]>(shuffleArray(images.value).slice(0, 9));

const refresh = () => {
  displayImages.value = shuffleArray(images.value).slice(0, 9);
};

// Fisher-Yates 셔플 알고리즘을 사용
function shuffleArray(array: ImageType[]) {
  const shuffledArray = array.slice(); // Copy the original array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
</script>

<style>
.dialog-box {
  width: 600px;
}
</style>

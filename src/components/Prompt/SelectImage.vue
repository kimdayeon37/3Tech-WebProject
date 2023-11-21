<template>
  <div class="body q-pa-md">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-list>
        <q-card-actions>
          <h4><b>원하는 스타일을 설정하고, 프롬프트를 입력해 보세요!</b></h4>
        </q-card-actions>
        <q-card class="my-card">

          <q-btn color="black" class="full-width" label="Choose Drawing Style" />

          <q-item tag="label" v-ripple>
            <q-item-section avatar>
              <q-radio v-model="style" val="0" color="teal" />
            </q-item-section>
            <q-item-section>
              <q-item-label>풍경</q-item-label>
              <q-item-label caption>풍경 이미지 선택</q-item-label>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section avatar>
              <q-radio v-model="style" val="1" color="orange" />
            </q-item-section>
            <q-item-section>
              <q-item-label>그림</q-item-label>
              <q-item-label caption>그림 이미지 선택</q-item-label>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section avatar top>
              <q-radio v-model="style" val="2" color="cyan" />
            </q-item-section>
            <q-item-section>
              <q-item-label>만화</q-item-label>
              <q-item-label caption>만화 이미지 선택</q-item-label>
            </q-item-section>
          </q-item>
        </q-card>

        <br />
        <q-btn color="black" class="full-width" label="Prompt Input" />
        <q-input class="self-center full-width no-outline" outlined v-model="promt" label="내용 입력 *" lazy-rules
          />
        <q-btn label="Submit" type="submit" color="black" />
      </q-list>
    </q-form>
    <br />
    <ResultImage v-if="viewResult" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useQuasar, QSpinnerFacebook } from 'quasar'
import { onBeforeUnmount } from 'vue'
import axios from "axios";
import ResultImage from "./ResultImage.vue"

const style = ref(0);
const promt = ref("");
const dense = ref(true);
let viewResult = ref(false);
const resultImageUrl = ref("");

onMounted(() => {

  viewResult.value = false;
  console.log(viewResult.value);

});

const $q = useQuasar()
let timer

onBeforeUnmount(() => {
  if (timer !== void 0) {
    clearTimeout(timer)
    $q.loading.hide()
  }
})

const showLoading = () => {
  $q.loading.show({
    spinner: QSpinnerFacebook,
    spinnerColor: 'yellow',
    spinnerSize: 140,
    backgroundColor: 'black',
    message: 'Some important process is in progress. Hang on...',
    messageColor: 'black'
  })
  // hiding in 3s
  timer = setTimeout(() => {
    $q.loading.hide()
    timer = void 0
    viewResult.value = true;
  }, 3000)
}

const onSubmit = async () => {
  showLoading();  
  try {
    const response = await axios.post(
      "http://localhost:8000/drawing",
      {
        prompt: promt.value, // Replace with promt.value
        style_no: style.value, // Replace with style.value
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .then(() => {
        console.log("전송 성공");
        console.log(response.data);
        viewResult.value = true;
      })
  } catch (e) {
    console.log("전송 실패", e);
    console.log(viewResult.value);
  }
  
};
</script>

<style>
.body {
  font-family: 'Hahmlet', serif;
}
</style>
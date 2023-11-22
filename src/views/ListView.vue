<script setup lang="ts">
import { ref, computed } from "vue";
import WinterDialog from "../components/List/WinterDialog.vue"
import DrawskyDialog from "../components/List/DrawskyDialog.vue" 
import DrawingDialog from "../components/List/DrawingDialog.vue"
import TrainDialog from "../components/List/TrainDialog.vue"
import FlowerDialog from "../components/List/FlowerDialog.vue"
import GardenDialog from "../components/List/GardenDialog.vue"
import SunsetDialog from "../components/List/SunsetDialog.vue"
import NightskyDialog from "../components/List/NightskyDialog.vue"
import PlaygroundDialog from "../components/List/PlaygroundDialog.vue"
import SnowmountainDialog from "../components/List/SnowmountainDialog.vue"
import CartoonDialog from "../components/List/CartoonDialog.vue"
import Cartoon2Dialog from "../components/List/Cartoon2Dialog.vue"
import SeaDialog from "../components/List/SeaDialog.vue"
import Nightsky2Dialog from "../components/List/Nightsky2Dialog.vue"
import NightCartoonDialog from "../components/List/NightCartoonDialog.vue"
import BusDialog from "../components/List/BusDialog.vue"
import BlackholeDialog from "../components/List/BlackholeDialog.vue"
import AirplaneDialog from "../components/List/AirplaneDialog.vue"
import MountainDialog from "../components/List/MountainDialog.vue"
import SkiDialog from "../components/List/SkiDialog.vue"
import TsunamiDialog from "../components/List/TsunamiDialog.vue"
import SummerDialog from "../components/List/SummerDialog.vue"
import UniverseDialog from "../components/List/UniverseDialog.vue"
import EuropeDiallog from "../components/List/EuropeDiallog.vue"
import MedievalEuropeDialog from "../components/List/MedievalEuropeDialog.vue"
import EarthDialog from "../components/List/EarthDialog.vue"
import HouseDialog from "../components/List/HouseDialog.vue"
import ParisDialog from "../components/List/ParisDialog.vue"
import PyramidDialog from "../components/List/PyramidDialog.vue"
import ScarecrowDialog from "../components/List/ScarecrowDialog.vue"
import VolcanoDialog from "../components/List/VolcanoDialog.vue"
import FallDialog from "../components/List/FallDialog.vue"

const toggleWinter = ref(false);
const toggleDrawsky = ref(false);
const toggleDrawing = ref(false);
const toggleTrain = ref(false);
const toggleFlower = ref(false);
const toggleGarden = ref(false);
const toggleSunset = ref(false);
const toggleNightsky = ref(false);
const toggleplayground = ref(false);
const togglesnowmountain = ref(false);
const togglecartoon = ref(false);
const togglecartoon2 = ref(false);
const togglesea = ref(false);
const togglenightsky2 = ref(false);
const togglenightcartoon = ref(false);
const togglebus = ref(false);
const toggleblackhole = ref(false);
const toggleairplane =  ref(false);
const togglemountain =  ref(false);
const toggleski  = ref(false);
const toggletsunami = ref(false);
const togglesummer = ref(false);
const toggleUniverse = ref(false);
const toggleeurope = ref(false);
const toggleMedievalEurope = ref(false);
const toggleEarth = ref(false);
const toggleHouse = ref(false);
const toggleParis = ref(false);
const togglePyramid = ref(false);
const toggleScarecrow = ref(false);
const toggleVolcano = ref(false);
const toggleFall = ref(false);

const myListRef  = ref(null);

const imageUrls = [
      'src/assets/data1/fall1.png',
      'src/assets/data2/winter1.png',
      'src/assets/data3/drawsky1.png',
      'src/assets/data4/drawing1.png',
      'src/assets/data5/train1.png',
      'src/assets/data6/flower1.png',
      'src/assets/data7/garden1.png',
      'src/assets/data8/sunset1.png',
      'src/assets/data9/nightsky1.png',
      'src/assets/data10/playground1.png',
      'src/assets/data11/snowmountain5.png',
      'src/assets/data12/cartoon1.png',
      'src/assets/data13/cartoon1.png',
      'src/assets/data14/sea6.png',
      'src/assets/data15/nightsky4.png',
      'src/assets/data16/nightcartoon1.png',
      'src/assets/data17/bus1.png',
      'src/assets/data18/blackhole1.png',
      'src/assets/data19/airplane6.png',
      'src/assets/data20/mountain1.png',
      'src/assets/data21/ski1.png',
      'src/assets/data22/tsunami1.png',
      'src/assets/data23/summer1.png',
      'src/assets/data24/universe1.png',
      'src/assets/data25/europe1.png',
      'src/assets/data26/medievalEurope1.png',
      'src/assets/data27/earth1.png',
      'src/assets/data28/house6.png',
      'src/assets/data29/paris1.png',
      'src/assets/data30/pyramid1.png',
      'src/assets/data31/scarecrow1.png',
      'src/assets/data32/volcano1.png',
    ]
    const listEl = computed(() => (myListRef.value as any)?. $el || null);

const activateDialog = (index: number) => {
  if (index === 1) {
    toggleWinter.value = true;
  } else if (index === 2) {
    toggleDrawsky.value = true;
  } else if (index === 3) {
    toggleDrawing.value = true;
  } else if (index === 4) {
    toggleTrain.value = true;
  } else if (index === 5) {
    toggleFlower.value = true;
  } else if (index === 6) {
    toggleGarden.value = true;
  } else if (index === 7) {
    toggleSunset.value = true;
  } else if (index === 8) {
    toggleNightsky.value = true;
  } else if (index === 9) {
    toggleplayground.value = true;
  } else if (index === 10) {
    togglesnowmountain.value = true;
  } else if (index === 11) {
    togglecartoon.value = true;
  } else if (index === 12) {
    togglecartoon2.value = true;
  } else if (index === 13) {
    togglesea.value = true;
  } else if (index === 14) {
    togglenightsky2.value = true;
  } else if (index === 15) {
    togglenightcartoon.value = true;
  } else if (index === 16) {
    togglebus.value = true;
  } else if (index === 17) {
    toggleblackhole.value = true;
  } else if (index === 18) {
    toggleairplane.value = true;
  } else if (index === 19) {
    togglemountain.value = true;
  } else if (index === 20) {
    toggleski.value = true;
  } else if (index === 21) {
    toggletsunami.value = true;
  } else if (index === 22) {
    togglesummer.value = true;
  } else if (index === 23) {
    toggleUniverse.value = true;
  } else if (index === 24) {
    toggleeurope.value = true;
  } else if (index === 25) {
    toggleMedievalEurope.value = true;
  } else if (index === 26) {
    toggleEarth.value = true;
  } else if (index === 27) {
    toggleHouse.value = true;
  } else if (index === 28) {
    toggleParis.value = true;
  } else if (index === 29) {
    togglePyramid.value = true;
  } else if (index === 30) {
    toggleScarecrow.value = true;
  } else if (index === 31) {
    toggleVolcano.value = true;
  } else if (index === 32) {
    toggleFall.value = true;
  } 
};
</script>
<template>
  <div class="q-pa-md">
    <div ref="myListRef" class="row justify-center q-gutter-sm">
      <q-intersection
      v-for="index in 32"
        :key="index"
        :root="listEl "
        transition="scale"
        class="example-item"
      >
        <q-card flat bordered class="q-ma-sm" @click="activateDialog(index)"
>
          <img :src="imageUrls[index % imageUrls.length]"> <!-- Use the image URL based on index -->
          <q-card-section>
            <div class="text-h6">Art #{{index}}</div>
            <div class="text-subtitle2">by AI</div>
          </q-card-section>
        </q-card>
      </q-intersection>
      <WinterDialog v-model="toggleWinter" />
      <DrawskyDialog v-model="toggleDrawsky" />
      <DrawingDialog v-model="toggleDrawing" />
      <TrainDialog v-model="toggleTrain" />
      <FlowerDialog v-model="toggleFlower" />
      <GardenDialog v-model="toggleGarden" />
      <SunsetDialog v-model="toggleSunset" />
      <NightskyDialog v-model="toggleNightsky" />
      <PlaygroundDialog v-model="toggleplayground" />
      <SnowmountainDialog v-model="togglesnowmountain" />
      <CartoonDialog v-model="togglecartoon" />
      <Cartoon2Dialog v-model="togglecartoon2" />
      <SeaDialog v-model="togglesea" />
      <Nightsky2Dialog v-model="togglenightsky2" />
      <NightCartoonDialog v-model="togglenightcartoon" />
      <BusDialog v-model="togglebus" />
      <BlackholeDialog v-model="toggleblackhole" />
      <AirplaneDialog v-model="toggleairplane" />
      <MountainDialog v-model="togglemountain" />
      <SkiDialog v-model="toggleski" />
      <TsunamiDialog v-model="toggletsunami" />
      <SummerDialog v-model="togglesummer" />
      <UniverseDialog v-model="toggleUniverse" />
      <EuropeDiallog v-model="toggleeurope"/>
      <MedievalEuropeDialog v-model="toggleMedievalEurope"/>
      <EarthDialog v-model="toggleEarth" />
      <HouseDialog v-model="toggleHouse" />
      <ParisDialog v-model = "toggleParis" />
      <PyramidDialog v-model ="togglePyramid" />
      <ScarecrowDialog v-model="toggleScarecrow" />
      <VolcanoDialog v-model="toggleVolcano" />
      <FallDialog v-model="toggleFall" />

    </div>
  </div>
</template>

<style lang="sass" scoped>
.example-item
  height: 290px
  width: 290px
  margin: 50px 0px
</style>
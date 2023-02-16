<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <swiper :slides-per-view="1" :options="{ slidesPerView: true, loop: true }">
        <swiper-slide v-bind:style="{ height: height }">
          Tuorial 1
        </swiper-slide>
        <swiper-slide v-bind:style="{ height: height }">
          Tuorial 2
        </swiper-slide>
        <swiper-slide v-bind:style="{ height: height }">
          Tuorial 3
        </swiper-slide>
      </swiper>
    </ion-content>
  <ion-footer>
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
  </ion-page>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import '@ionic/vue/css/ionic-swiper.css';
  export default defineComponent({
    components: {
      Swiper,
      SwiperSlide
    },
    data: () => ({
      height: window.innerHeight+"px",
    }),
    // created() {
    //   this.setup()
    // },
    // methods: {
    //   setup() {
    //     const slideOpts = {
    //       initialSlide: 1,
    //       speed: 400
    //     };
    //     return { slideOpts }
    //   }
    // }

  });
</script>

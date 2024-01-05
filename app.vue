<template>
  <main class="h-screen w-full flex justify-center items-center">
    <div class="h-full mobile:w-full desktop:w-3/4">
      <HeaderLayout />
      <div class="w-full flex flex-col desktop:flex-row sm:justify-center sm:items-center desktop:gap-24 desktop:mt-20">
        <NuxtTailwindLightbox :image-list="imageList" class="desktop:min-w-[400px]" />
        <AboutProduct />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import image1 from '@/assets/images/image-product-1.jpg';
import image2 from '@/assets/images/image-product-2.jpg';
import image3 from '@/assets/images/image-product-3.jpg';
import image4 from '@/assets/images/image-product-4.jpg';

const imageList = ref([image1, image2, image3, image4]);
</script>

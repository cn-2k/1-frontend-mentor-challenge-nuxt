<template>
  <main class="desktop:px-96">
    <HeaderLayout />
    <div
      class="w-full flex flex-col desktop:flex-row sm:justify-center sm:items-center desktop:gap-24 desktop:mt-20 desktop:px-10"
    >
      <NuxtTailwindLightbox :image-list="imageList" class="desktop:min-w-[400px]" />
      <AboutProduct />
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

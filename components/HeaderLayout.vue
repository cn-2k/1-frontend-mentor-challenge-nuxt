<template>
  <header class="desktop:pb-6 desktop:pt-4 mobile:p-2">
    <div
      class="w-full h-16 p-2 lg:p-0 lg:mt-4 flex justify-between items-center border-transparent desktop:border-b desktop:border-gray-200"
    >
      <div class="flex gap-5 justify-center items-center desktop:items-start">
        <!-- <img src="~/assets/images/icon-menu.svg" alt="Sneakers logo" class="md:hidden" /> -->
        <nuxt-icon name="icon-menu" class="md:hidden text-base" filled />
        <img src="~/assets/images/logo.svg" alt="Sneakers logo" />
        <ul class="flex-wrap text-neutral-dark-grayish-blue hidden md:flex">
          <li v-for="menu in menuList" :key="menu" class="ml-10 hover:text-neutral-very-dark-blue transition-colors">
            <a
              href="#"
              class="inline-block hover:border-primary-orange rounded-t-lg pb-10 border-b-4 border-transparent transition-all"
              aria-current="page"
              >{{ menu }}</a
            >
          </li>
        </ul>
      </div>
      <div class="flex items-center desktop:items-start justify-start h-full">
        <div class="flex gap-5 desktop:gap-9 items-center w-full justify-center">
          <ProductsCart />
          <img
            src="~/assets/images/image-avatar.png"
            alt="Sneakers logo"
            class="border-2 rounded-full hover:border-primary-orange w-8 h-8 desktop:w-12 desktop:h-12 transition-colors cursor-pointer"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const menuList = ref(['Collections', 'Men', 'Women', 'About', 'Contact']);
</script>

<style scoped></style>

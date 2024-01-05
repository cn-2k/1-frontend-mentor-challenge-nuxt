<template>
  <header class="desktop:py-5 mobile:p-2">
    <div
      class="w-full p-3 desktop:p-0 lg:mt-4 flex justify-between items-center border-transparent desktop:border-b desktop:border-gray-200"
    >
      <div class="flex gap-5 justify-center items-center desktop:items-start">
        <nuxt-icon name="icon-menu" class="md:hidden text-base cursor-pointer" filled @click="toggleSidebar" />
        <img src="~/assets/images/logo.svg" alt="Sneakers logo" />
        <ul class="ml-10 space-x-8 text-neutral-dark-grayish-blue hidden md:flex">
          <li v-for="menu in menuList" :key="menu" class="hover:text-neutral-very-dark-blue transition-colors">
            <a
              href="#"
              class="inline-block hover:border-primary-orange rounded-t-lg desktop:pb-10 desktop:border-b-4 border-transparent transition-all"
              aria-current="page"
              >{{ menu }}</a
            >
          </li>
        </ul>
      </div>
      <div class="flex items-center justify-center">
        <div class="flex gap-5 desktop:gap-9 items-end desktop:items-center w-full justify-center">
          <ProductsCart />
          <img
            src="~/assets/images/image-avatar.png"
            alt="Sneakers logo"
            class="border-2 rounded-full hover:border-primary-orange w-10 h-10 desktop:w-14 desktop:h-14 transition-colors cursor-pointer"
          />
        </div>
      </div>
    </div>
  </header>
  <div
    :class="{ 'translate-x-0': menuDrawer, '-translate-x-full': !menuDrawer }"
    class="block md:hidden bg-white w-72 h-screen absolute z-50 top-0 shadow-xl p-7 transition-transform transform"
  >
    <div class="flex flex-col">
      <nuxt-icon
        class="cursor-pointer text-2xl text-neutral-dark-grayish-blue"
        name="icon-close"
        filled
        @click="toggleSidebar"
      />
      <div class="mt-20">
        <ul class="text-neutral-very-dark-blue space-y-6 text-xl font-bold">
          <li v-for="menu in menuList" :key="menu" class="">
            <a href="#" aria-current="page">{{ menu }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div v-if="menuDrawer" class="absolute block md:hidden top-0 bg-black/70 w-full h-full z-10"></div>
</template>

<script setup lang="ts">
const menuList = ref(['Collections', 'Men', 'Women', 'About', 'Contact']);
const menuDrawer = ref(false);

const toggleSidebar = () => {
  menuDrawer.value = !menuDrawer.value;
};
</script>

<style scoped></style>

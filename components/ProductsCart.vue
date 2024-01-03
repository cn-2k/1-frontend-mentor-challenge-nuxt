<template>
  <HeadlessPopover class="relative">
    <HeadlessPopoverButton class="outline-none">
      <span class="relative inline-block">
        <nuxt-icon
          name="icon-cart"
          class="text-[24px] cursor-pointer text-gray-500 hover:text-gray-800 transition-colors"
        />
        <span
          class="absolute top-0 left-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-primary-orange rounded-full"
          >{{ cart.cart.length }}</span
        >
      </span>
    </HeadlessPopoverButton>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <HeadlessPopoverPanel class="absolute z-10 mt-3 w-96 -translate-x-1/2 transform bg-white">
        <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
          <h4 class="font-bold p-6">Cart</h4>
          <hr />
          <div class="p-6">
            <div v-if="cart.cart.length" class="w-full flex gap-4">
              <img :src="image1" class="rounded-lg" width="60px" />
              <div class="flex flex-col text-neutral-dark-grayish-blue">
                <p>
                  {{ cart.product.title }}
                </p>
                <p>
                  {{ formatCurrency(cart.basePriceWithDiscount) }} x {{ cart.product.amount }}
                  <span class="font-bold text-black">{{ formatCurrency(cart.productPriceWithDiscount) }}</span>
                </p>
              </div>
              <div class="my-auto">
                <nuxt-icon
                  name="icon-trash"
                  class="text-neutral-grayish-blue hover:text-primary-orange/50 cursor-pointer text-2xl"
                  @click="cart.cart.splice(0)"
                />
              </div>
            </div>
            <button
              v-if="cart.cart.length"
              class="select-none w-full bg-primary-orange p-4 rounded-lg mt-8 cursor-pointer hover:bg-primary-orange/80 transition-colors"
            >
              <div class="w-full flex justify-center items-center gap-4">
                <p class="text-white font-bold">Checkout</p>
              </div>
            </button>
            <p v-if="!cart.cart.length" class="text-neutral-500 font-bold text-center">Your cart is empty.</p>
          </div>
        </div>
      </HeadlessPopoverPanel>
    </transition>
  </HeadlessPopover>
</template>

<script lang="ts" setup>
import { useCartStore } from '@/store/cart';
import image1 from '@/assets/images/image-product-1.jpg';

const cart = useCartStore();

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};
</script>

<style></style>

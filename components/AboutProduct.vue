<template>
  <div class="w-full md:w-[700px] desktop:w-[400px] p-5 desktop:p-0">
    <h4 class="text-primary-orange uppercase font-bold text-sm tracking-wider">Sneaker Company</h4>
    <h1 class="text-3xl desktop:text-5xl mt-2 desktop:mt-4 font-bold text-neutral-very-dark-blue">
      {{ cart.product.title }}
    </h1>
    <p class="mt-2 desktop:mt-10 text-neutral-dark-grayish-blue">
      These low-profile sneakers are your perfect casual wear companion. featuring a durable rubber outer sole, they'll
      withstand everything the weather can offer.
    </p>
    <div class="w-full justify-between flex desktop:flex-col desktop:gap-2 mt-6">
      <div class="flex items-center gap-4">
        <span class="text-3xl font-bold text-neutral-very-dark-blue leading-tight">{{
          formatCurrency(cart.productPriceWithDiscount)
        }}</span>
        <span class="text-primary-orange font-bold bg-primary-orange/15 px-3 py-0.5 rounded-lg"
          >{{ cart.product.discount }}%</span
        >
      </div>
      <span class="font-bold text-neutral-grayish-blue line-through">{{ formatCurrency(cart.product.price) }}</span>
    </div>
    <div class="w-full desktop:flex desktop:gap-4 items-center">
      <div class="w-full bg-neutral-light-grayish-blue h-0.5 p-6 rounded-lg mt-4 flex justify-between items-center">
        <nuxt-icon
          name="icon-minus"
          class="my-auto text-primary-orange hover:text-primary-orange/50 cursor-pointer"
          @click="cart.removeProductAmount"
        />
        <span class="font-bold text-neutral-very-dark-blue">{{ cart.product.amount }}</span>
        <nuxt-icon
          name="icon-plus"
          class="text-primary-orange hover:text-primary-orange/50 cursor-pointer"
          @click="cart.addProductAmount"
        />
      </div>
      <button
        class="select-none w-full bg-primary-orange shadow-xl shadow-primary-orange/30 p-4 rounded-lg mt-4 cursor-pointer hover:bg-primary-orange/80 transition-colors"
        @click="cart.addToCart(cart.product)"
      >
        <div class="w-full flex justify-center items-center gap-4">
          <nuxt-icon name="icon-cart" class="text-[24px] cursor-pointer text-white" />
          <p class="text-white font-bold">Add to cart</p>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart';
import { formatCurrency } from '@/utils/formatCurrency';

const cart = useCartStore();

const product = ref({
  title: 'Fall Limited Edition Sneakers',
  price: 300,
  basePrice: 280,
  discount: 50,
  amount: 1,
});

onMounted(() => {
  getProductInfo();
});

const getProductInfo = () => {
  const storage = localStorage.getItem('cart');

  if (storage) {
    const cartStorage = JSON.parse(localStorage.getItem('cart') || '[]').cart;
    const cartArray = cartStorage.filter((i: any) => i.title === product.value.title);

    if (cartArray.length) {
      cart.product = cartArray[0];
    } else {
      cart.product = product.value;
    }
  } else {
    cart.product = product.value;
  }
};
</script>

<style scoped></style>

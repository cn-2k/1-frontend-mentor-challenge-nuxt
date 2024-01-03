export const useCartStore = defineStore('cart', () => {
  type ProductProps = {
    title: string;
    price: number;
    basePrice: number;
    discount: number;
    amount: number;
  };

  const cart = ref<Array<any>>([]);

  const product = ref<ProductProps>({
    title: '',
    price: 0,
    basePrice: 0,
    discount: 0,
    amount: 0,
  });

  const productPriceWithDiscount = computed(
    () => product.value.price - (product.value.price * product.value.discount) / 100
  );

  const basePriceWithDiscount = computed(
    () => product.value.basePrice - (product.value.basePrice * product.value.discount) / 100
  );

  const addProductAmount = () => {
    product.value.amount++;
    updateProductPrice();
  };

  const removeProductAmount = () => {
    if (product.value.amount > 0) {
      product.value.amount--;
      updateProductPrice();
    }
  };

  const updateProductPrice = () => {
    product.value.price = product.value.amount > 0 ? product.value.basePrice * product.value.amount : 0;
  };

  const addToCart = (product: ProductProps) => {
    if (cart.value.includes(product) || product.amount === 0) return;
    cart.value.push(product);
  };

  return {
    product,
    addProductAmount,
    removeProductAmount,
    productPriceWithDiscount,
    addToCart,
    cart,
    basePriceWithDiscount,
  };
});

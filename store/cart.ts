import { defineStore, skipHydrate } from 'pinia';

export const useCartStore = defineStore(
  'cart',
  () => {
    type ProductProps = {
      title: string;
      price: number;
      basePrice: number;
      discount: number;
      amount: number;
    };

    const cart = ref<any>([]);

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

    // const addToCart = (newProduct: ProductProps) => {
    //   const productAlreadyInCart = cart.value.some((existingProduct: ProductProps) => {
    //     return existingProduct.title === newProduct.title;
    //   });

    //   if (productAlreadyInCart || newProduct.amount === 0) return;

    //   cart.value.push(newProduct);
    //   alert('Produto adicionado ao carrinho!');
    // };

    // const addToCart = (newProduct: ProductProps) => {
    //   const productIndex = cart.value.findIndex((existingProduct: ProductProps) => {
    //     return existingProduct.title === newProduct.title;
    //   });

    //   if (productIndex !== -1) {
    //     // Produto já existe no carrinho
    //     if (cart.value[productIndex].amount !== newProduct.amount) {
    //       // Atualizar a quantidade se for diferente
    //       cart.value.splice(productIndex, 1, newProduct);
    //       alert('Quantidade do produto atualizada no carrinho!');
    //     } else {
    //       alert('Produto já está no carrinho com a mesma quantidade.');
    //     }
    //   } else {
    //     // Adicionar o produto ao carrinho
    //     cart.value.push(newProduct);
    //     alert('Produto adicionado ao carrinho!');
    //   }
    // };

    const addToCart = (newProduct: ProductProps) => {
      const existingProduct = cart.value.find((product: ProductProps) => {
        return product.title === newProduct.title;
      });

      if (existingProduct) {
        // Produto já existe no carrinho
        if (existingProduct.amount !== newProduct.amount) {
          // Atualizar a quantidade se for diferente
          Object.assign(existingProduct, newProduct);
          alert('Quantidade do produto atualizada no carrinho!');
        } else {
          alert('Produto já está no carrinho com a mesma quantidade.');
        }
      } else {
        // Adicionar o produto ao carrinho
        cart.value.push(newProduct);
        alert('Produto adicionado ao carrinho!');
      }
    };

    return {
      product,
      addProductAmount,
      removeProductAmount,
      productPriceWithDiscount,
      addToCart,
      cart: skipHydrate(cart),
      basePriceWithDiscount,
    };
  },
  {
    persist: {
      storage: localStorage,
      paths: ['cart'],
    },
  }
);

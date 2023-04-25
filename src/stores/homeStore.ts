import type { Pizza } from "@/views/HomeView.vue";
import { defineStore } from "pinia";

export const useHomeStore = defineStore("homeStore", {
  state: () => ({
    sort: { name: "популярности", sort: "rating", order: "desc" },
    category: 0,
    search: "",
    totalPrice: 0,
    cart: [] as Pizza[],
  }),
  actions: {
    addItem(item: Pizza) {
      const findItem = this.cart.find(
        el =>
          el.id === item.id &&
          el.activeSize === item.activeSize &&
          el.activeType === item.activeType
      );
      if (findItem) {
        findItem.count!++;
      } else {
        this.cart.push({ ...item, count: 1 });
      }
      this.totalPrice += item.price;
    },
    removeItem(item: Pizza) {
      const index = this.cart.findIndex(cartItem => {
        return (
          cartItem.id === item.id &&
          cartItem.activeSize === item.activeSize &&
          cartItem.activeType === item.activeType
        );
      });

      if (index !== -1) {
        this.cart.splice(index, 1);
        this.totalPrice -= item.price;
      }
    },
    clearItems() {
      this.cart = [];
      this.totalPrice = 0;
    },
  },
});

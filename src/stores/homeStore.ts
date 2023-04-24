import { defineStore } from "pinia";

export const useHomeStore = defineStore("homeStore", {
  state: () => ({
    sort: { name: "популярности", sort: "rating", order: "desc" },
    category: 0,
    search: "",
  }),
});

export const useUserStore = defineStore("UserStore", () => {
  const user = ref({
    username: "Артем",
    lastname: "Садиков",
    userAvatar: "",
  });

  return {
    user,
  };
});

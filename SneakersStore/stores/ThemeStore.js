export const useThemeStore = defineStore("themeStore", () => {
  const theme = ref("dark");

  const changeCurrentTheme = (newTheme) => {
    theme.value = newTheme;
  };

  return {
    theme,
    changeCurrentTheme,
  };
});

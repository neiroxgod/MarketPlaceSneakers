<template>
  <div class="flex items-center content-center ml-2">
    <Switch @update:checked="toggleDarkMode" id="airplane-mode" />
    <Label class="text-slate-900 ml-1" for="airplane-mode"> Theme</Label>
  </div>
</template>

<script setup>
import { useThemeStore } from "../../stores/ThemeStore.js";

const themeStore = useThemeStore();

function toggleDarkMode(theme = "dark") {
  theme = useColorMode().preference === "dark" ? "light" : "dark";

  themeStore.changeCurrentTheme(theme);
  useColorMode().preference = theme;
}
</script>

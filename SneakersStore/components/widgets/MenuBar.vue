<template>
  <div
    :class="
      themeStore.theme == 'dark'
        ? 'rounded-md mx-auto bg-white px-5 py-2 mt-10 w-full'
        : 'rounded-md mx-auto bg-cyan-400 px-5 py-2 mt-10 w-full'
    "
  >
    <div class="flex">
      <div class="relative w-full">
        <Input
          id="search"
          type="text"
          placeholder="Search..."
          class="pl-10 w-full"
        />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <Icon name="ic:sharp-search" class="size-6 text-muted-foreground" />
        </span>
      </div>
      <widgetsThemeToggler />
      <WidgetsUserInMenu />
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "../../stores/ThemeStore.js";

const themeStore = useThemeStore();
</script>

<template>
  <div class="flex align-center items-center ml-2">
    <Avatar>
      <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    >
  </div>
</template>

<script setup>
import { useUserStore } from "../../stores/UserStore.js";

const userStore = useUserStore();
</script>

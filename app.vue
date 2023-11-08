<template>
  <div>
    <NuxtLoadingIndicator></NuxtLoadingIndicator>
    <NuxtLayout>
      <NuxtPage :keepalive="true"></NuxtPage>
    </NuxtLayout>
  </div>
</template>
<script setup></script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

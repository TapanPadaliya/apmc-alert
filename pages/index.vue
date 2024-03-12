<template>
  <div><GoogleLogin :callback="callback" /></div>
</template>
<script setup>
definePageMeta({
  //   layout: "private",
});

const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Handle the response", response);
};
</script>

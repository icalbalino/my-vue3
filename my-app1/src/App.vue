<template>
  <v-app >
    <v-content style="padding:0;">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>

<style>
@charset "utf-8";
@import url(http://fonts.googleapis.com/css?family=Raleway:800,700,400);
@import url(http://fonts.googleapis.com/css?family=Signika:400,600);

*{
  font-family: 'Raleway', sans-serif;
}

</style>
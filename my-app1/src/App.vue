<template>
  <v-app>
    <Header></Header>
    <Navbar></Navbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Navbar from './components/Navbar';

export default {
  name: "App",
  components: { Header, Navbar },
  data: () => ({
    //
  }),
};
</script>

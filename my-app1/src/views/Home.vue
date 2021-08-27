<template>
  <div id="home">
    <header id="Beranda">
      <v-container fluid style="height:670px; padding:0; margin:0;">
        <v-app-bar src="https://picsum.photos/1920/1080?random" class="d-flex justify-center align-center fill-height" style="height:670px;">
            <template v-slot:img="{ props }">
                <v-img v-bind="props" style="height:670px;"></v-img>
            </template>
            <h2>
              Ical Ferin Balino <br>
              <strong class="warning--text">Student At Faculty of Information Technology, Informatics Engineering</strong>
            </h2>
        </v-app-bar>
      </v-container>
    </header>

    <nav>
      <v-container fluid style="padding:0; margin:0;">
        <v-app-bar app light dense height="100" style="position: sticky;">
            <v-tabs v-model="tab" centered slider-color="warning"> 
                <v-tab v-for="list in lists" :key="list.text" router :to="list.route">{{ list.text }}</v-tab>
            </v-tabs>
        </v-app-bar>
        <v-container style="height: 1000px;"></v-container>
      </v-container>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      lists: [
          {text: 'Home', route: '#Beranda'}, 
          {text: 'About Me', route: '#AboutMe'}, 
          {text: 'Experience', route: '#Experience'}, 
          {text: 'Skills & Competence', route: '#Skills'}, 
          {text: 'Education', route: '#Education'}, 
          {text: 'Contact', route: '#Contact'}, 
      ]
    }
  }   
};
</script>

<style>
    h2 {
        font-size: 40px;
        margin: 0;
        font-family: 'Raleway', sans-serif;
        text-align: center;
    }

    h2 > strong {
        font-size: 30px;
        font-weight: 600;
    }
</style>


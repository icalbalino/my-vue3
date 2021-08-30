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

    <template>
      <v-app-bar app light dense height="100" style="position: sticky;">
          <v-tabs v-model="tab" centered slider-color="warning"> 
              <v-tab v-for="list in lists" :key="list.text">{{ list.text }}</v-tab>
          </v-tabs>
      </v-app-bar>
    </template>

    <v-main >
      <section id="AboutMe">
        <v-container>
          <v-row no-gutters>
            <v-col class="mb-6" cols="12">
              <v-card class="pa-5" tile style="text-align:center;">
                <h2>Who Am I</h2>
                <h4 class="pa-2">ICAL FERIN BALINO</h4>
              </v-card>
            </v-col>

            <v-col class="" cols="12" xs="12" sm="6" md="6">
              <v-card class="d-flex align-center justify-center" tile>
                <v-img src="https://picsum.photos/id/1010/1000/"></v-img>
              </v-card>
            </v-col>
          
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-card class="pa-5" tile>
                <h3 class="mb-5">I Design Awesome Web Apps</h3>
                <p style="text-align:justify;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere consequuntur error quibusdam excepturi vero, mollitia illum quasi minima, dicta ex optio quos sapiente quod harum totam suscipit aperiam. Commodi, beatae.</p>
                <p style="text-align:justify;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid repudiandae quam excepturi ad doloremque nulla minima nemo. Iste facilis dolore reprehenderit voluptate aspernatur tenetur explicabo rem enim temporibus. Dolore.</p>
              </v-card>
            </v-col>          
          </v-row>
        </v-container>

        <v-container>
          <v-row>
            <v-col v-for="n in 24" :key="n" cols="4">
              <v-card height="200"></v-card>
            
            </v-col>
          </v-row>
        </v-container>
      </section>
      <section id="Experience"></section>
      <section id="Skills"></section>
      <section id="Education"></section>
    </v-main>

    <v-footer id="Contact" dark padless>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px"> {{ icon }} </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
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
      ],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }
  }   
};
</script>

<style>
    h2 {
        font-size: 40px;
        margin: 0;
        font-family: 'Raleway', sans-serif;
        font-weight: normal;
        text-align: center;
    }

    h2 > strong {
        font-size: 30px;
        font-weight: 600;
    }
    .nav {
      z-index: 12;
      color: red;
      background-color: aqua;
      border: 1px solid black !important;
      height: 1000px;
    }
</style>


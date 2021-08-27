<template>
    <!-- <nav>
        <ul class="white">
            <li v-for="list in lists" :key="list"><a href="" class="warning--text">{{ list }}</a></li>
        </ul>
    </nav> -->
    <v-container fluid style="padding:0; margin:0;">
        <v-app-bar app light class="white" style="position: sticky;" dense height="15">
            <template v-slot:extension>
                <v-tabs  v-model="tab" centered slider-color="warning"> 
                    <v-tab v-for="list in lists" :key='list'>{{list}}</v-tab>
                </v-tabs>
            </template>
        </v-app-bar>
        <v-container fluid style="height: 1000px;"></v-container>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            lists: [
                'Home', 
                'About Me', 
                'Experience', 
                'Skills & Competence', 
                'Education', 
                'Contact'
            ]
        }
    }   
}
</script>

<style>
    ul {
        text-align: center;
    }
    
    li, a {
        font-size: 15px;
        font-weight: 500;
        text-decoration: none;
        display: inline-block;
        list-style-type: none;
        /* padding: 10px; */
        text-align: center;
        /* margin-right: 20px; */
    }
</style>
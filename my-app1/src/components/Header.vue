<template>
    <div >
        <v-container fluid style="height:670px; padding:0; margin:0;">
            <v-app-bar src="https://picsum.photos/1920/1080?random" class="d-flex justify-center align-center fill-height" style="height:670px;"> 
            
                <template v-slot:img="{ props }">
                    <v-img v-bind="props" style="height:670px;"></v-img>
                </template>

                <h2>Ical Ferin Balino <br>
                    <strong class="warning--text">Student At Faculty of Information Technology, Informatics Engineering</strong>
                </h2>
           
            </v-app-bar>
        </v-container>
    </div>
</template>

<script>
export default {
    
}
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

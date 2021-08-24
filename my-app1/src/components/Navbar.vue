<template>
    <nav>
        <ul class="white">
            <li v-for="list in lists" :key="list"><a href="" class="warning--text">{{ list }}</a></li>
        </ul>
    </nav>
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
        padding: 10px;
        text-align: center;
        margin-right: 20px;
    }
</style>
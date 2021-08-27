<template>
    <nav>
        <ul class="white">
            <li v-for="list in lists" :key="list"><a href="{{list.route}}" class="warning--text">{{ list.text }}</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            lists: [
                {text: 'Home', route: '#Home'}, 
                {text: 'About Me', route: '#AboutMe'}, 
                {text: 'Experience', route: '#Experience'}, 
                {text: 'Skills & Competence', route: '#Skills'}, 
                {text: 'Education', route: '#Education'}, 
                {text: 'Contact', route: '#Contact'}, 
            ]
        }
    }
}
</script>

<template>
    <div class="cp-cont">
        <h1>Child props</h1>
        <ul>
            <li v-for="(wbs,i) in wb" :key="i">
                <a :href="wbs.link">
                    <img :src="wbs.img" :alt="wbs.name">
                </a>
                <span>
                    {{ wbs.name }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'Child',
    props : {
        wb : {
            type : Array,
            default : ()=>[]
        }
    },
    data(){
        return {
            name : '',
        }
    },
    methods : {
        console : function(val){
            console.log(val)
        },
    }
}
</script>
<style scoped>
ul li img {max-width: 100%;}
</style>
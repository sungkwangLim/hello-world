<template>
    <div>
        <h1 v-if="show">asdfasdfasfas</h1>
        <h1 v-else>111222asdfasdfasfas</h1>
        <h2>{{data}}</h2>
        <button v-on:mouseover="hello('data')">call hello function</button>
        <button v-on:click="display">toggle</button>
        <button v-on:click="updateTitle('parent update title')">parent Upate Title</button>
        

        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            <tr v-for="user in users" :key="user.id">
                <td>
                    {{user.id}}
                </td>
                <td>
                    {{user.name}}
                </td>
                <td>
                    {{user.email}}
                </td>
            </tr>
        </table>
        <p> {{ message }} </p>
        <input type="text" v-model="message" v-on:keyup.enter="add">
        <button v-on:click="add">Name add</button>
    </div>
</template>

<script>
export default {
    name:'Home',
    props:{
        data: String
    },methods:{
        hello(item){
            console.warn(item)
        },
        display(){
            this.show = !this.show
        },
        add(){
            this.users.push({id:this.users.length+1,name:this.message,email:'asdfasdf'})
        },
        updateTitle(item){
            this.$emit('changeTitle',item)
        }
    },data(){
        return {
            show: false,
            users : [
                {id:1,name:'peter',email:'peter@test.com'},
                {id:2,name:'sam',email:'sam@test.com'},
                {id:3,name:'tony',email:'tony@test.com'},
                {id:4,name:'bruce',email:'bruce@test.com'},
            ],
            message : ''
        }
    },
}
</script>
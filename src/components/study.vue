<template>
  <div></div>
</template>

<script>
export default {
    name:'study',
    data(){
        return{
            a:1
        }
    },
    created: function(){ //create 훅은 인스턴트가 생성 된 후에 호출됩니다.
        console.log(`a is : ${this.a}`);
    }
}
</script>

<style>

</style>
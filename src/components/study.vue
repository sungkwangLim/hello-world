<template>
  <div>
      <p> {{ msg }} </p>
      <span> {{ a + 1}}  </span>
      <div :id="`vue${dynamicId}`" v-if="dynamicView"> {{ reverseMessage }} </div>
      <a :[attr]="attr" @[eventName]="goodgood">asdf</a>
      <p> {{ sum }} {{ now }}</p>
      <input type="text" v-model="qa" :class="{'toggleClass' : qaClass}">
      <my-component></my-component>
  </div>
</template>

<script>

export default {
    name:'study',
    data(){
        return{
            msg : 'vue hi',
            a:1,
            dynamicId : 'studyId1',
            dynamicView : true,
            attr : 'href',
            eventName: 'mouseover',
            qa : '',
            qaClass : true
        }
    },
    created: function(){ //create 훅은 인스턴트가 생성 된 후에 호출됩니다.
        console.log(`a is : ${this.a}`);
        console.log(document.querySelector('#vuestudyId1')) //dom 에 있는 아이디값을 못 불러옴
    },
    mounted: function(){
        console.log(document.querySelector('#vuestudyId1')) //dom 에 있는 아이디값을 불러옴
        console.log(`sum is : ${this.sum}`);
    },
    computed : {
        reverseMessage : function(){
            return this.msg.split('').reverse().join('')
        },
        sum : function() {
            return this.a + 8
        },
        now: function () {
            return new Date()
        }
    },
    methods : {
        goodgood(){ 
            console.log('good');
        }
    },
    watch : {
        qa : function(newqa){            
            this.qaClass = !this.qaClass
            console.log('watch qa',newqa);
        }
    }
}
</script>

<style>
    html {background: #202124;}
    input.toggleClass {background: #000; color: #fff;}
</style>
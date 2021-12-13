<template>
  <div>
      <div class="box"></div>
  </div>
</template>

<script>
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin); 
export default {
    name : 'gsapstudy',
    mounted : function(){
        document.querySelector('#title').style.display = "none";
        document.querySelector('#gnb').style.display = "none";
        document.querySelector('#goBack').style.display = "none"
        console.log(gsap);
        gsap.to('.box',{
            scrollTrigger : '#app',
            x: '50vw'
        })
    }
}
</script>

<style>
    .box {width: 30vw; height: 30vw; background: rgba(255,255,255,0.25);}
</style>
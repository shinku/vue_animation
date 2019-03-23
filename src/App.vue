<template>
  <div id="app" @touchstart='handleTouchStart' @touchend='handleTouchEnd' @touchmove='handleTouchMove'>
    <ball v-for="count in ballnumber" :key='count' ></ball>
    <div class="ball nno" >BALL</div>
    <div class="car nno" >CAR</div>
<div class="bird nno" >BIRD</div>
  </div>
</template>

<script>
import ball from './components/ball.vue'
//import {TweenLite, TimelineLite} from 'gsap'
import {ShinEvent} from 'shinevent'
import ani from './stylecontroller/AnimationController'


export default {
  name: 'app',
  data () {
    return {
      msg: 'welcome to shinanimation',
      ballnumber:150,
      isClicked:false,
    }
    
  },
  created(){
    //
  },
  mounted(){
    return;
    /*let time=new TimelineLite();
    time.add(TweenMax.to('.ball',.5,{left:'100px',top:'100px',delay:1}));
    time.add(TweenMax.to('.car',.5,{left:'150px',top:'150px'}));
    time.add(TweenMax.to('.bird',.5,{left:'200px',top:'200px'}));*/
  },
  methods:{
    handleTouchStart:function(e){
      console.log(e);
      e.preventDefault();
      let x=e.touches[0].clientX;
      let y=e.touches[0].clientY;
      let data={x,y};
      let event=new ShinEvent('hascenter');
      event.data=data;
      ani.dispatchEvent(event);
      this.isClicked=true;
    },
    handleTouchMove:function(e)
    {
      if(this.isClicked)
      {
         let x=e.touches[0].clientX;
        let y=e.touches[0].clientY;
        let data={x,y};
        let event=new ShinEvent('hascenter');
        event.data=data;
        ani.dispatchEvent(event);
      }
    },
    handleTouchEnd:function(e){
      //console.log(e);
      this.isClicked=false;
      ani.dispatchEvent(new ShinEvent('nocenter'))

    }
  },
  components:{
    ball
  }
}
</script>

<style>
*{
  margin: 0 0
}
.nno{
  position: absolute;
  width: 100px;
  height: 100px;
  top:0px;
  left:0px;
  color: antiquewhite
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 1200px;
  background:#000000;
  width: 750px;
  overflow: hidden;
  position: absolute
}


</style>

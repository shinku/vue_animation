<template>
    <div :style='style.ball.style' style="background:#ffffff; opacity:0.8;" >
    </div>
</template>
<script>
import anic from '../stylecontroller/AnimationController.js'
import {BallStyleObject} from '../stylemodule/BallStyleObject.js'
export default {
    data (){
        return {
            size:100,
            styleObject:new BallStyleObject(),
            
            style:{
                //绑定元素的style属性
                ball:{}

            }   
        }
    },
    created:function() {
        //在新建的时候注册当前的style元素
        anic.addCell(this.styleObject);
        this.style.ball=this.styleObject;
        

    },
    methods:{
        handleGetCenter:function(e){
            //console.log(e.data);
            this.centerpositoin=e.data;

        },
        handeNoCenter:function(e){
            
        }
    },
    destroyed:function () {
        //被销毁的时候注销掉改当前的style元素
        anic.removeCell(this.styleObject);

    },
}
</script>

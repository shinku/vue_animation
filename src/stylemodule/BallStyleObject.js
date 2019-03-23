import StyleObject from './StyleObject';
import anic from '../stylecontroller/AnimationController'

class BallStyleObject extends StyleObject{
    constructor(){
        super();
        this.moveSpeed=Math.random()*10+5;
        this.moveSpeed2=Math.random()*10-5;
        this.width=this.height=Math.random()*5+5;
        this.tox=this.x=Math.random()*750;
        this.toy=this.y=Math.random()*1200;
        this.roat=0;
        this.ra=500;
        this.tora=100+Math.random()*50;
        this.roatSpeed=Math.random()*10-5;
        anic.addEventListener('hascenter',this.handleGetCenter,this);
        anic.addEventListener('nocenter',this.handeNoCenter,this);
        this.centerposition=null;
        this.cp={tox:0,toy:0};
    }
    handleGetCenter(e){
        this.centerposition=e.data;
       this.cp.x=this.centerposition.x;
       this.cp.y=this.centerposition.y;
    }
    handeNoCenter(e){
        this.centerposition=null;
    }
    update(){
        //更新方法为没一次增加自己的y（top坐标）
        //属性值映射在get style 方法上
        this.roat+= this.roatSpeed;
        if(this.centerposition)
        {
            this.ra+=(this.tora-this.ra)*0.01;
            this.roat+= this.roatSpeed;
            this.cp.tox+=(this.cp.x-this.cp.tox)*0.2;
            this.cp.toy+=(this.cp.y-this.cp.toy)*0.1;
            this.toy=Math.sin(this.roat/180*Math.PI)*this.ra+this.cp.toy;
            this.tox=Math.cos(this.roat/180*Math.PI)*this.ra+this.cp.tox;
            this.x+=(this.tox-this.x)*0.1;
            this.y+=(this.toy-this.y)*0.05;
        }
        else{
            
            this.ra+=(100-this.ra)*0.1;
            this.toy+=this.moveSpeed;
            this.tox+=this.moveSpeed2;
            this.x+=(this.tox-this.x)*0.3;
            this.y+=(this.toy-this.y)*0.2;
            //如果走到屏幕大于1200的屏幕外的时候，
            //重新更新自己的位置
            if(this.y>1200)
            {
                this.tox=this.x=Math.random()*750;
                this.y=this.toy=-200;
                this.moveSpeed=Math.random()*10+5;
                this.moveSpeed2=Math.random()*10-5;
            }
        }
        super.update();
    }
}
export { BallStyleObject };
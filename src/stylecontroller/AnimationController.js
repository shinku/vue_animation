//导入统一的时间轴对象以及时间相关的事件
import {ShinTimeLine,ShinTimeEvent} from 'shintimeline'
import { ShinEventDispatcher } from "shinevent";

class AnimationController extends ShinEventDispatcher{
    
    constructor(){
        //单例模式，确保只会被新建一次。
        super();
        if(AnimationController._instance)
        {
            throw "count not be definded again";
            //return;
        }
        this.animations=new Map();
        this.start();
    }
    static instance(){
        if(!AnimationController._instance)
        {
            AnimationController._instance=new AnimationController();
        }
        return AnimationController._instance;
    }
    start(){
        //初始化
        ShinTimeLine.addEventListener(ShinTimeEvent.FRAME,this.onenterframe,this);
    }
    onenterframe(e)
    {
        this.update();
    }

    addCell(ani){
        this.animations.set(ani,ani);
    }

    removeCell(ani)
    {
        //移除ani元素
        if(this.animations.get(ani))
        {
            this.animations.delete(ani);
        }
    }
    update(){
        //console.log(1);
        this.animations.forEach((ani,index)=>{
            //console.log(ani.update);
            if(ani.update)
            {
                ani.update();
            }
        })

    }
}
//AnimationController=
export default AnimationController.instance();
import { ShinEventDispatcher } from 'shinevent';
class StyleObject  extends ShinEventDispatcher{
    constructor(){
        super();
        this.scale=1;
        this.rotation=0;
        this._style={};
    }
    set width(num){
        this._width=num;
        
    }
    get width(){
        return this._width;
    }

    set height(num)
    {
        this._height=num;
    }
    get height()
    {
        return this._height;
    }
    set x(num)
    {
        this._left=num;
    }
    get x(){
        return this._left;
    }
    set y(num)
    {
        
        this._top=num;
        
    }
    get y()
    {
        
        return this._top;
    }
    set scale(num){
        this._scale=num;
    }
    get scale()
    {  
        return this._scale;
    }
    set rotation(num){
        this._rotstion=num;
    }
    get rotation(){
        return this._rotstion;
    }
    update(){
        this._style={
            width:`${this.width}px`,
            height:`${this.height}px`,
            position:'absolute',
            borderRadius:`${this.width/2}px`,
            transform:`scale(${this.scale},${this.scale}) rotate(${this.rotation}deg) translate(${this.x}px,${this.y}px)`
        }
    }
    
    get style(){
        
        return this._style
         
    }

}
export default StyleObject
import { ShinEventDispatcher } from "shinevent";

class GameCenter extends ShinEventDispatcher{
    constructor(){
        super();
    }
    static get instance()
    {
        if(!GameCenter._instance)
        {
            GameCenter._instance=new GameCenter();
        }
        return GameCenter._instance;
    }
}
let gc=new GameCenter();
export {gc} 
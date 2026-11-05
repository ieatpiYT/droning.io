import {Application, Graphics, Container} from 'pixi.js'

export class Map extends Container 
{
    constructor() 
    {
        super();
        const background = new Graphics()
            .rect(0, 0, 2000, 2000)
            .fill({color: '#49c239'})
            .stroke({width: 5, color: '#1a1a1a'});
        this.addChild(background);
    }
}

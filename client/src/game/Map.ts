/*
Map.ts
*/

import {Application, Graphics, Container} from 'pixi.js'

export class Map extends Container
{
    constructor()
    {
        super(); 
    
        const background = new Graphics().
        rect(0, 0, 1000, 1000)
        .stroke({width: 5, color: 'green'})

        this.addChild(background);
    }
}
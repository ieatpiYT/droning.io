/*
Player.ts
*/

import {Container} from 'pixi.js';

export class Player extends Container
{
    public radius: number;
    
    constructor(x: number, y: number, radius: number)
    {
        super();

        this.x = x;
        this.y = y;
        this.radius = radius;
    }  
}
/*
Player.ts
*/

import {Graphics, Container} from 'pixi.js';

export class Player extends Container
{
    public radius: number;
    public speed = 5;
    
    constructor(x: number, y: number, radius: number)
    {
        super();

        this.x = x;
        this.y = y;
        this.radius = radius;

        let visual = new Graphics()
        .circle(this.x, this.y, this.radius)
        .fill({color: 0xff0000});

        this.addChild(visual);
    }
}


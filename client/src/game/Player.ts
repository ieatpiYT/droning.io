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

        let keys = 
        {
            w: false,
            a: false,
            s: false,
            d: false
        }

        window.addEventListener('keydown', (e) => {
            if (e.code === 'KeyW') {keys.w = true};
            if (e.code === 'KeyA') {keys.a = true};
            if (e.code === 'KeyS') {keys.s = true};
            if (e.code === 'KeyD') {keys.d = true};
        })

        window.addEventListener('keyup', (e) => {
            if (e.code === 'KeyW') {keys.w = false};
            if (e.code === 'KeyA') {keys.a = false};
            if (e.code === 'KeyS') {keys.s = false};
            if (e.code === 'KeyD') {keys.d = false};
        })
    }
}


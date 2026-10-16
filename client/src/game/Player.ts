/*
Player.ts
*/

import {Graphics, Container} from 'pixi.js';

export class Player extends Container
{
    public radius: number;
    public speed = 3;
    public worldX: number;
    public worldY: number;

    private keys: Record<string, boolean> = {};
    
    constructor(x: number, y: number, radius: number)
    {
        super();

        this.worldX = x;
        this.worldY = y;
        this.radius = radius;

        let visual = new Graphics()
        .circle(this.x, this.x, this.radius)
        .fill({color: 0xff0000});

        this.addChild(visual);  

        window.addEventListener('keydown', (e) => { this.keys[e.code] = true; });
        window.addEventListener('keyup', (e) => { this.keys[e.code] = false; });
    }

    public update()
    {
        let dx = 0;
        let dy = 0;

        if (this.keys['KeyW']) dy -= 1;
        if (this.keys['KeyS']) dy += 1;
        if (this.keys['KeyA']) dx -= 1;
        if (this.keys['KeyD']) dx += 1;

        if (dx !== 0 && dy !== 0) 
        {
            dx *= 0.7071;
            dy *= 0.7071;
        }

        this.worldX += dx * this.speed;
        this.worldY += dy * this.speed;
    }
}


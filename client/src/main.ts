/*
main.ts
*/

import {Application, Graphics} from 'pixi.js';
import {Map} from './game/Map';
import {Player} from './game/Player';

let canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;

const app = new Application();

async function gameLoop()
{
    await app.init({
        canvas: canvas,
        resizeTo: window,
        background: '#ffffff'
    })

    let map = new Map();
    let player = new Player(0, 0, 50);

    app.stage.addChild(map);
    app.stage.addChild(player);
}

gameLoop();
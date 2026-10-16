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
        background: '#1099bb'
    })

    let map = new Map();
    let player = new Player(100, 100, 20);

    app.stage.addChild(map);
    app.stage.addChild(player);

    app.ticker.add(() => {
        player.update();

        player.x = app.screen.width / 2;
        player.y = app.screen.height / 2;

        map.x = (app.screen.width / 2) - player.worldX;
        map.y = (app.screen.height / 2) - player.worldY;
    })
}

gameLoop();
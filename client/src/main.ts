import {Application, Graphics} from 'pixi.js';
import {Map} from './game/Map';

let canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;

const app = new Application();

async function gameLoop()
{
    await app.init({
        canvas: canvas,
        resizeTo: window,
        background: '#ffffff'
    })

    let map= new Map();

    let player = new Graphics()
    .circle(200, 200, 20)
    .fill('#5522d5');

    app.stage.addChild(map);
    app.stage.addChild(player);
}

gameLoop();
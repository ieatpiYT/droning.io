import {Application} from 'pixi.js';
import {Map} from './game/Map';

let canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;

const app = new Application();

async function gameLoop()
{
    await app.init({
        canvas: canvas
    })

    

}
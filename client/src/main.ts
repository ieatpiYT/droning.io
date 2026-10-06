import {Application} from 'pixi.js';

let canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;

const app = new Application();

async function gameLoop()
{
    await app.init({
        canvas:canvas
    })

    
}
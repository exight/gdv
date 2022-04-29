import * as G from 'glob';
import { swapBuffers } from './setup-checkerboard';


/**
 * Determines the color of a pixel (x, y) to create
 * a checkerboard pattern and saves it into the data array.
 * The data array holds the linearised pixel data of the target canvas
 * row major. Each pixel is of RGBA format.
 * @param data The linearised pixel array
 * @param x The x coordinate of the pixel
 * @param y The y coordinate of the pixel
 * @param width The width of the canvas
 * @param height The height of the canvas
 */
export function checkerboard(data: Uint8ClampedArray, x: number, y: number, width: number, height: number) {
    // console.log(Math.round(width/8)*4);
    // console.log(x);
    
    // TODO: Imagine an 8x8 tile checkerboard across the width and height of the canvas. Compute if the pixel at position (x, y) is inside a black or white tile. Set the pixel color accordingly in the pixel array 'data'.
  
   

    let position = (y*(width*4))+(x*4);

    const farbe = (Math.floor(x/width*8)%2 ^ Math.floor(y/height*8)%2) ? [255,255,255,255]: [0,0,0,255];

    data.set(farbe, position);

    
    
}





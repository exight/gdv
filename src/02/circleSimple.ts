import { swapBuffers } from './setup-circleSimple';

/**
 * Determines the color of a pixel (x, y) to create
 * a circle and saves it into the data array.
 * The data array holds the linearised pixel data of the target canvas
 * row major. Each pixel is of RGBA format.
 * @param data The linearised pixel array
 * @param x The x coordinate of the pixel
 * @param y The y coordinate of the pixel
 * @param width The width of the canvas
 * @param height The height of the canvas
 * @param radius The radius of the circle
 */
export function circleSimple(data: Uint8ClampedArray, x: number, y: number, width: number, height: number, radius: number) {

    // TODO: Imagine a circle with center in the middle of the framebuffer and given radius. Which pixel is the center? Check if pixel (x, y) is inside the circle or not. Set the pixel color accordingly in the pixel array 'data'.
    const middleX= width/2
    const middleY= height/2
    
    let position = (y*(width*4))+(x*4);
    if(Math.pow(x-middleX, 2)+Math.pow(y-middleY, 2)<=radius*radius){
        data.set([0,0,0,255], position);
        console.log(position);
        
    }


}

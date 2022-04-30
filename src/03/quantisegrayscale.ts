/**
 * Posterise the source image and save the result in the target image.
 * Restrict the amount of used brightness levels to four equidistant values.
 *
 * @param x The x coordinate of the pixel to posterise
 * @param y The y coordinate of the pixel to posterise
 * @param source The source image data
 * @param target The image data to save the converted color information to
 * @param width The width of the canvas
 * @param height The height of the canvas
 */
export function quantisegrayscale(x: number, y: number, source: Uint8ClampedArray, target: Uint8ClampedArray, width: number, height: number) {

    // TODO: Convert the pixel at position (x, y) in the source array from RGB to XYZ. Limit the 
    let position = (y*(width*4))+(x*4);
    
    let r=source[position];
    let g=source[position+1];
    let b=source[position+2];
    let a=source[position+3];

    //umrechnung von rgb nach xyz
    const X =  0.4124564*r+0.3575761*g+0.1804375*b;
    const Y =  0.2126729*r+0.7151522*g+0.0721750*b;
    const Z =  0.0193339*r+0.1191920*g+0.9503041*b;

    // TODO: Limit the brightness to the set of 4 different values 0, 85, 170, 255.
    // let Y_quant =(Math.floor(Math.pow(255, 1/Y)*Math.pow(2,4))%4)*85;
    let Y_quant=Math.round(Y/85)*85
    console.log(Y_quant);
    
    // TODO: Set the RGBA values in the target array to this brightness.
    
    target.set([0, 0, 0,255-Y_quant], position);

}

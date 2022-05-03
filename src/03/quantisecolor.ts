/**
 * Posterise the source image and save the result in the target image.
 * Restrict each color channel to four equidistant values.
 *
 * @param x The x coordinate of the pixel to posterise
 * @param y The y coordinate of the pixel to posterise
 * @param source The source image data
 * @param target The image data to save the converted color information to
 * @param width The width of the canvas
 * @param height The height of the canvas
 */
export function quantiseColor(x: number, y: number, source: Uint8ClampedArray, target: Uint8ClampedArray, width: number, height: number) {

    // TODO: Limit the brightness of each color channel to the set of 4 different values 0, 85, 170, 255.
    // TODO: Set the RGBA values in the target array accordingly.
    // TODO:
    let position = (y*(width*4))+(x*4);
    
    let r=source[position];
    let g=source[position+1];
    let b=source[position+2];
    let a=source[position+3];
    let numberColors=4
    let step=256/(numberColors)
    let r_quant=quant(r,step);
    let g_quant=quant(g,step);
    let b_quant=quant(b,step);
    let a_quant=quant(a,step);

    target.set([r_quant, g_quant, b_quant,a_quant], position);

}
function quant(value:number, step:number) {
    
    let quant=Math.floor(Math.floor(value/step)*step);
    switch(quant){
        case 64:
            quant=85;
            break
        case 128:
            quant=170;
            break
        case 192:
            quant=255;
            break
        default:
            quant=0;
    }
    // console.log(quant);
    
    return quant
    
}
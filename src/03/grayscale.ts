/**
 * Convert the color information of the pixel at (x, y) to grayscale by using the
 * Y coordinate of the XYZ color space.
 *
 * @param x The x coordinate of the pixel to convert
 * @param y The y coordinate of the pixel to convert
 * @param source The source image data
 * @param target The image data to save the converted color information to
 * @param width The width of the canvas
 * @param height The height of the canvas
 */
export function grayscale(x: number, y: number, source: Uint8ClampedArray, target: Uint8ClampedArray, width: number, height: number) {

    // TODO: Convert the pixel at position (x, y) in the source array from RGB to XYZ.
    // TODO: Set the RGBA values in the target array according to the Y component of the source pixel in XYZ space.
    let position = (y*(width*4))+(x*4);
    
    let r=source[position];
    let g=source[position+1];
    let b=source[position+2];
    let a=source[position+3];

    //umrechnung von rgb nach xyz
    const X =  0.4124564*r+0.3575761*g+0.1804375*b;
    const Y =  0.2126729*r+0.7151522*g+0.0721750*b;
    const Z =  0.0193339*r+0.1191920*g+0.9503041*b;
 
    target.set([0, 0, 0, 255-Y], position);

}

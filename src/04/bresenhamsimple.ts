 function setPixel(data: Uint8ClampedArray, x: number, y: number, width: number, height: number) {

    var index = (x + y * width) * 4;
    data[index + 0] = 0;
    data[index + 1] = 0;
    data[index + 2] = 0;
    data[index + 3] = 255;
}

/**
 * Draws a line from pointA to pointB on the canvas
 * with the Bresenham algorithm.
 * @param  {Uint8ClampedArray} data   - The linearised pixel array
 * @param  {[number, number]} pointA - The start point of the line
 * @param  {[number, number]} pointB - The end point of the line
 * @param  {number} width          - The width of the canvas
 * @param  {number} height         - The height of the canvas
 */
export function bresenhamSimple(data: Uint8ClampedArray, pointA: [number, number], pointB: [number, number], width: number, height: number) {
    
    // TODO: 1. Calculate dx and dy and set the start position x and y
    let x1=pointA[0];
    let y1=pointA[1];
    let x2=pointB[0];
    let y2=pointB[1];
    let dx = (x2 -x1);
    let dy = (y2 - y1);    
    // TODO: 2. Calculate the initial epsilon of the bresenham algorithm
    // TODO: 3. Go from pointA[0] to pointB[0], and update epsilon in each step as given in the bresenham algorithm. Increase y when necessary.
    let fehler =dx/2;
    let y=y1;
    for(let x=x1; x<x2; x+=4){
        fehler-=dy;
        if(fehler<0){
            y=y+1;
            fehler+=dx;
        }
        let position = (y*(width*4))+(x*4);
        data.set([0, 0, 0, 255], position);
    }

}

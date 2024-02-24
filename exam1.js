function setPixel(screen, x, y, color) {
    screen.buffer[x + y * screen.width] = color;
}

function snakePath (screen, startX, startY, pathLength) {
    let x = startX;
    let y = startY;
    let counter = 1; 
    let Vx = 1;
    let Vy = 1;

    while (counter <= pathLength) {
        setPixel (screen, x, y, counter);
        counter ++;

        x = x + Vx;
        y = y + Vy;

        if (x == screen.width - 1 || x == 0) {
            Vx = -Vx;
        }  
        
        if (y == screen.height - 1 || y == 0) {
            Vy = -Vy;
        }
    }
}

function printScreen(screen) {

    let s = "";
    for(let i = 0; i < screen.buffer.length; i ++) {
        if(i % screen.width == 0) {
            s += "\n";
        }
        let pix = '' + screen.buffer[i];
        if(pix.length == 1) {
            s += ' ' + pix;
        } else {
            s += pix;
        }
    }

    console.log(s);

}

function initScreen(width, height) {
    let screen = {
        buffer: [],
        width: width,
        height: height
    }
    for(let i = 0; i < width * height; i ++) {
        screen.buffer[i] = '.';
    }
    return screen;
}

let screen = initScreen(20, 15);

snakePath(screen, 5, 3, 13);

printScreen(screen);


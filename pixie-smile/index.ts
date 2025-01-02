// image data
const imageWidth = 20;
const imageHeight = 8;
const imageData = createImageData();

const isPointingImage = (x: number, y: number): boolean => {
    return x >= 0 && x < imageWidth && y >= 0 && y < imageHeight;
}

const drawDot = (x: number, y: number) => {
    if(isPointingImage(x, y)) {
        imageData[y * imageWidth + x] = true;
    }
}

const drawHorizontalLine = (x: number, y: number, length: number): void => {
    for (let i = 0; i < length; i++) {
        drawDot(x + i, y);
    }
}

const drawVerticalLine = (x: number, y: number, length: number): void => {
    for (let i = 0; i < length; i++) {
        drawDot(x, y + i);
    }
}

const drawRectangle = (x: number, y: number, width: number, height: number): void => {
    // top
    drawHorizontalLine(x, y, width)
    // bottom
    drawHorizontalLine(x, y + height - 1, width)
    //left
    drawHorizontalLine(x, y, height);
    // right
    drawHorizontalLine(x + width - 1, y, height);

}

const outputImage = (onChar = "x", offChar = " "): void => {
    let text = "";
    for (let i = 0; i < imageData.length; i++) {
        if(i > 0 && i % imageWidth === 0) {
            text += "\n";
        }
        text += imageData[i] ? onChar : offChar;
    }
    console.log(text);
}

function createImageData(): boolean[] {
    const length = imageWidth * imageHeight;
    return new Array(length).fill(false)
}

// draw head
drawRectangle(0, 0, 20, 8);
// eyes
drawDot(7, 2);
drawDot(12, 2);
// smile
drawDot(4, 4);
drawHorizontalLine(4, 5, 12);
drawDot(15, 4);

// output what we drew to the console
outputImage();
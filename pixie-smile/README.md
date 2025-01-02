# ASCII Art Image Drawer in TypeScript

This is a simple TypeScript program that simulates drawing on a grid of boolean values, where each point on the grid is either "on" or "off". The program allows you to draw shapes like dots, lines, and rectangles on a predefined 2D grid (representing an image). You can visualize the image by outputting it to the console.

## Features

- **Draw Dots**: Place dots at specific coordinates on the grid.
- **Draw Horizontal and Vertical Lines**: Create straight lines horizontally or vertically.
- **Draw Rectangles**: Create rectangular shapes by drawing the four sides.
- **Output Image**: Print the drawn image to the console in ASCII format.
- **Customization**: Customize the characters used to represent "on" and "off" pixels.

## How It Works

- The `imageWidth` and `imageHeight` constants define the dimensions of the "image" grid.
- The `imageData` array holds boolean values that represent the grid, where `true` indicates a "filled" pixel and `false` represents an "empty" pixel.
- The function `createImageData` initializes the `imageData` array with all values set to `false` (empty).
- The program includes functions to draw dots, horizontal lines, vertical lines, and rectangles, modifying the `imageData` array accordingly.
- The `outputImage` function outputs the image to the console, where filled pixels are represented by `onChar` (default "x") and empty pixels by `offChar` (default space).

## Functions

### `createImageData(): boolean[]`

Initializes the `imageData` array, setting all pixels to `false` (empty).

### `isPointingImage(x: number, y: number): boolean`

Checks whether a given (x, y) coordinate is within the bounds of the image.

### `drawDot(x: number, y: number): void`

Draws a dot (set the pixel to `true`) at the given coordinates if they are within bounds.

### `drawHorizontalLine(x: number, y: number, length: number): void`

Draws a horizontal line starting at the given (x, y) coordinate with the specified length.

### `drawVerticalLine(x: number, y: number, length: number): void`

Draws a vertical line starting at the given (x, y) coordinate with the specified length.

### `drawRectangle(x: number, y: number, width: number, height: number): void`

Draws a rectangle at the given coordinates, with the specified width and height, by drawing all four sides.

### `outputImage(onChar = "x", offChar = " "): void`

Outputs the current state of the image to the console, using `onChar` for filled pixels and `offChar` for empty pixels.

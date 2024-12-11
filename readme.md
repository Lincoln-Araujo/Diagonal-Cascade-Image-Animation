# Diagonal Cascade Image Animation

This project is an example of image transition animation in a tiled layout, creating a diagonal reveal effect. Each time the image changes, the tiles flip in sequence, forming a dynamic visual pattern.

## Features

- **Diagonal Cascade Animation:**  
  The tiles are not flipped line by line or column by column. Instead, the flipping order follows a diagonal pattern, for example starting from the last row and moving diagonally up to the first row, resulting in a more sophisticated effect.

- **Direction Alternation:**  
  With every new image transition, the animation direction is reversed. Thus, if in one cycle the tiles are flipped diagonally bottom-up, in the next cycle the order will be inverted, creating a visually interesting “back-and-forth” effect.

- **Responsiveness:**  
  The layout uses modern CSS, including `aspect-ratio` and `max-width`, to keep the container and tiles proportional on different screen sizes. Further adjustments may be needed depending on the project.

- **Timing and Image Customization:**  
  You can adjust transition intervals, flip speed, and the images used in the code as required.

## How to Use

1. **Clone or Download the Repository:**
   Download the project files or use `git clone` if this is in a Git repository.

2. **Project Structure:**
   You’ll have at least an `index.html` file, a CSS file (either separate or inline in the HTML), and a JavaScript file (integrated into the HTML or separate). Images should be located in the same folder or in a reachable path.

3. **Run the Project:**
   Open `index.html` in a modern browser (Chrome, Firefox, Safari, Edge) to see the animation in action.

4. **Adjust Images:**
   In the JavaScript code, locate the `images` array and replace the paths (`fotoA.jpg`, `fotoB.jpg`, `fotoC.jpg`) with your own images. Also adjust file extensions and names as needed.

5. **Customize the Animation:**
   - **Transition Timing:** Adjust `setTimeout(showNextImage, 5000)` or another timer value in the code.
   - **Flip Animation Duration:** Adjust `transition: transform 1s ease;` in the CSS to speed up or slow down the tile rotation.
   - **Diagonal Pattern Logic:** If you want to change the diagonal pattern, modify the logic in the `flipTiles` function that defines the tile iteration order.

## Technologies Used

- **HTML5 & CSS3:** Responsive layout, use of grid, aspect-ratio, and transitions.
- **JavaScript:** Controls display logic, timing, and tile animation order.
- **Images:** `jpg` or `webp` files referenced in the code.

## Possible Best Practices

- **Separation of Concerns:**  
  For more complex projects, consider separating CSS and JavaScript into distinct files for easier maintenance and scalability.

- **Accessibility:**  
  If needed, add descriptions (`alt`) or alternative text to improve accessibility, although this project is primarily visual.

- **Compatibility:**
  The use of properties like `aspect-ratio` may not be compatible with very old browsers. Consider adjustments or fallback options if needed.

## License

Feel free to use and modify this code as needed. If this is a public project, you may choose any license you prefer.

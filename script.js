const imageGrid = document.querySelector('.image-grid');
  const coverContainer = document.querySelector('.cover-container');
  const rows = 3;
  const cols = 4;
  const images = ['fotoA.webp', 'fotoB.jpg', 'fotoC.webp'];

  let currentIndex = 0;
  let nextIndex = 1;
  let flipped = false;
  let forwardDirection = true;
  let tiles;

  function createTiles() {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const tile = document.createElement('div');
        tile.className = 'tile';

        const front = document.createElement('div');
        front.className = 'face front';
        front.style.backgroundImage = `url(${images[currentIndex]})`;
        front.style.backgroundPosition = `${(c * 33.333)}% ${(r * 50)}%`;

        const back = document.createElement('div');
        back.className = 'face back';
        back.style.backgroundImage = `url(${images[nextIndex]})`;
        back.style.backgroundPosition = `${(c * 33.333)}% ${(r * 50)}%`;

        tile.appendChild(front);
        tile.appendChild(back);
        imageGrid.appendChild(tile);
      }
    }
    tiles = document.querySelectorAll('.tile');
  }

  createTiles();

  function flipTiles(cascadeDelay, add, forward) {
    return new Promise(resolve => {
      const tileArray = Array.from(tiles);

      // Gerar o array de tiles em ordem diagonal
      const diagonalOrder = [];
      for (let d = 0; d <= (rows - 1) + (cols - 1); d++) {
        // Para cada diagonal d
        // variação de r: de baixo (rows-1) para cima (0)
        for (let r = rows - 1; r >= 0; r--) {
          const c = d - r;
          if (c >= 0 && c < cols) {
            // Tile válida
            // tileIndex = r * cols + c (caso tiles sejam lineares)
            const tileIndex = r * cols + c;
            diagonalOrder.push(tileArray[tileIndex]);
          }
        }
      }

      // Se forwardDirection for falso, inverte a ordem
      const iterationOrder = forward ? diagonalOrder : diagonalOrder.slice().reverse();

      iterationOrder.forEach((tile, index) => {
        setTimeout(() => {
          if (add) {
            tile.classList.add('flipped');
          } else {
            tile.classList.remove('flipped');
          }
          if (index === iterationOrder.length - 1) {
            setTimeout(resolve, 1000);
          }
        }, index * cascadeDelay);
      });
    });
  }

  function prepareNextImage() {
    tiles.forEach(tile => {
      const front = tile.querySelector('.front');
      const back = tile.querySelector('.back');
      if (flipped) {
        front.style.backgroundImage = `url(${images[nextIndex]})`;
      } else {
        back.style.backgroundImage = `url(${images[nextIndex]})`;
      }
    });
  }

  async function showNextImage() {
   
    prepareNextImage();

    if (!flipped) {
      await flipTiles(300, true, forwardDirection);
      currentIndex = nextIndex;
      nextIndex = (nextIndex + 1) % images.length;
      flipped = true;
    } else {
      await flipTiles(300, false, forwardDirection);
      currentIndex = nextIndex;
      nextIndex = (nextIndex + 1) % images.length;
      flipped = false;
    }

    forwardDirection = !forwardDirection;

    setTimeout(showNextImage, 1000);
  }

  setTimeout(showNextImage, 1000);
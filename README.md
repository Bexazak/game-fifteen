# Fifteen Puzzle Game <br> [Demo](https://bexazak.github.io/game-fifteen/)

## Stack
- Vue3, Composition API
- Vite
- Pinia
- Vue Router 4
- Pug, SCSS

### Description
The Fifteen Puzzle is a classic sliding puzzle game consisting of a grid of numbered squares with one square missing. The goal of the game is to rearrange the tiles by sliding them into the empty space, with the aim of achieving numerical order from 1 to 15.

![Fifteen Puzzle Game](https://bexazak.github.io/game-fifteen/assets/15-Puzzle_solved-Gh9qZFoK.png)

### Game rules

The game board consists of a 4x4 grid with 15 numbered tiles and one empty space.
Tiles can only be moved horizontally or vertically into the empty space.
To move a tile, click or tap on it if it's adjacent to the empty space. The tile will then slide into the empty space.
Continue sliding tiles until they are arranged in numerical order from 1 to 15, with the empty space in the bottom-right corner.
The game may have variations and additional features, but these are the basic rules of the Fifteen Puzzle.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
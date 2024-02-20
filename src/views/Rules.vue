<template lang="pug">
  div.v-content
    h1 Rules of the Fifteen Puzzle: Mastering the Grid Challenge
    img(:src="Image" style="width: 420px" alt="15 Puzzle Game")
    ul.list_numbered
      li
        div.list_title Objective
        p The objective of the game is to arrange the numbered tiles in ascending order, starting from the top left corner with the blank space at the bottom right corner.
      li
        div.list_title Game Setup
        p The game consists of a 4x4 grid with fifteen numbered tiles and one blank space. Tiles are initially randomly arranged within the grid.
      li
        div.list_title Movement
        p Tiles can only be moved to the adjacent empty space. Movement is accomplished by sliding a tile into the empty space either horizontally or vertically.
      li
        div.list_title Gameplay
        p Players can move tiles one at a time to rearrange them in order to solve the puzzle. The blank space serves as the one position where tiles can be moved.
      li
        div.list_title Solving the Puzzle
        p The puzzle is solved when all the tiles are arranged in ascending order, with the blank space in the bottom right corner.
      li
        div.list_title Challenges
        p The puzzle can be challenging due to limited movements and the need for strategic planning to avoid getting stuck.
      li
        div.list_title Strategies
        p Players often use systematic approaches to solve the puzzle efficiently, such as moving tiles around to create opportunities for larger tile movements.
      li
        div.list_title Variations
        p There are different variations of the game, including larger grids with more tiles, which increase the complexity of the puzzle.
      li
        div.list_title Time Tracking
        p Some versions of the game involve tracking the time it takes to solve the puzzle, adding a competitive element to the gameplay.
      li
        div.list_title Practice
        p Like many puzzles, solving the Fifteen Puzzle often improves with practice and the development of problem-solving strategies.

    p Remember, the key to success in the Fifteen Puzzle is patience, strategy, and careful planning. Enjoy the challenge!

</template>

<script setup>
import Image from '@/assets/images/15-Puzzle_solved.png'

</script>
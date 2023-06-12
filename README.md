# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![](./screenshot.jpg)
![](./screenshot2.jpg)

### Links

- Solution URL: [solution URL](https://www.frontendmentor.io/solutions/product-preview-using-vite-react-tailwind-css-B657jhtIlO)
- Live Site URL: [live site URL](https://fem-product-preview-goat.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Tooling
- [Tailwind CSS](https://tailwindcss.com/) - For styles

### What I learned

Interestingly, using flex-1 for both items in flex doesn't make the items give equal width because flex doesn't account for padding. Using basis-6/12 works.
In the end, I chose to use grid where I could use flexbox for practicing purpose and it gave the same result.
[Further read about equal column width in flex](https://css-tricks.com/equal-columns-with-flexbox-its-more-complicated-than-you-might-think/)

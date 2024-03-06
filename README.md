# React + Vite

Setup to get React working in Vite with HMR and some ESLint rules.

# Useful commands:

Move with the terminal where the code is 'src':
```
npm i
npm i @types/node -D
npm run dev
npm run build
npm run preview
```
## Test the build

First time install
```
npm install -g serve
```
Move to build directory (usually 'dist') with the terminal. Launch:
```
serve
```

# After build

Rename 'dist' directory to 'docs'.

Add '/purple-website' to the 2 paths in the index (add to images to if you removed before) 

# New page

- Open `vite.config.js` file and add the page with its index.html
- Copy in src the directory of a page, like 'chobe' and rename it with the same name of the page
- Modify index.html inside the folder
- Modify name and internal names of the 2 jsx and the scss
- Open the folder with the type, in chobe is 'tool', modify name and internal names of the two files jsx and scss
- Insert the body of the page is in this jsx file

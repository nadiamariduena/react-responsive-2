## ( in progress ) this is a website for notes, not a beautiful one.

### I stole this tutorial from:

https://codeburst.io/how-to-build-fully-responsive-react-apps-with-nothing-but-inline-styles-and-javascript-242c091b6ba1 - source!
[How to Build Fully Responsive React Apps with Nothing but Inline Styles and JavaScript](https://codeburst.io/how-to-build-fully-responsive-react-apps-with-nothing-but-inline-styles-and-javascript-242c091b6ba1)

<br>
<br>

<p>I took my time and add comments that are in the article and put it into the lines in the project </p>

<br>
<br>

<p>I am not going to lie, i ve spend lots of time searching for a video tutorial
that goes right into the point when it concerns styles, until now i havent found one
that talks specifically about media queries in react, in one i could have a glimpse
 but It looked too messy for me, as i like to organize the media queries in specific folders/mixin scss
but even if it looks messy i found it simple in a way, it looks more or less like so:</p>

<p>This example is about a button appearing in desktop but disappearing in less or equal than 960 inner width</p>

<br>

```javascript
const showButton = () => {
  if (window.innerWidth <= 960) {
    setButton(false);
  } else {
    setButton(true);
  }
};
```

<p>What i dont like of this way, is that it s everything inside the js files, it seems 
to me like a soup :)</p>

<!-- [<img src="./src/img/uglywebsite.gif">](https://nadiamariduena.github.io/react-responsive1/) -->

<br>

```javascript

npm i react

npm i react-dom

npm i react-scripts

npm i node-sass --save

npm i autoprefixer@9.8.0

npm i gh-pages --save-dev


npm i react-router-dom
```

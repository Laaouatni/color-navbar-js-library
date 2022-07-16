# color-navbar-js-library

# navColor.js

![ezgif com-gif-maker (31)](https://user-images.githubusercontent.com/94779582/179071442-6f6f07cd-1c5e-41ab-8d88-9ac2f564941b.gif)

## how to install it

just copy this CDN link to your `<head>` tag!

```html
<script src="https://cdn.jsdelivr.net/gh/The-DevNinja/navColor.js/script.min.js" defer></script>
```

> if you want to put it inside `<head>` add a `defer` attribute to the `<script>` tag <br>
> otherway, you need to put the script before calling the function, for not getting bugs :)

---

- [navColor.js](#navcolorjs)
  - [how to install it](#how-to-install-it)
  - [how to configure](#how-to-configure)
    - [where should I paste the *function()*?](#where-should-i-paste-the-function)
    - [what is the name of the function?](#what-is-the-name-of-the-function)
    - [what is the order of the parameters?](#what-is-the-order-of-the-parameters)
      - [what I need to put inside the object `{...}`?](#what-i-need-to-put-inside-the-object-)
      - [1 `iconName` first parameter](#1-iconname-first-parameter)
      - [2 `color` second parameter](#2-color-second-parameter)
      - [3 `text` third parameter](#3-text-third-parameter)
    - [example code object](#example-code-object)
    - [`options` second parameters](#options-second-parameters)
      - [you can add a `<nav>` with the `ID` or `class` you want?](#you-can-add-a-nav-with-the-id-or-class-you-want)
        - [how to add a ID?](#how-to-add-a-id)
        - [how to add a CLASS?](#how-to-add-a-class)
      - [you can disable my CSS file, to write your own custum CSS](#you-can-disable-my-css-file-to-write-your-own-custum-css)
        - [list of css selector you can use for custumizable UI](#list-of-css-selector-you-can-use-for-custumizable-ui)
        - [list of css variables you can use for custumizable UI](#list-of-css-variables-you-can-use-for-custumizable-ui)

---
## how to configure

### where should I paste the *function()*?

you need to add this function to your `<script>` tag, or in your `.js` javascript file.

### what is the name of the function?

the function is `createNav();`

### what is the order of the parameters?

1. the first parameter is a **array of objects**
2. the second parameter is not necessary, but is only needed for more custum navbar functionality.

the syntax will look like this:

```javascript
createNav([{...}, {...}, {...}], options);
```

#### what I need to put inside the object `{...}`?

the object need **3** parameters:

> the order of parameters **not** affect the functionality)

#### 1 `iconName` first parameter

something like this:

```javascript
{
    iconName: "fa-user",
    // other parameters
}
```

this project under the hood uses **[fontawesome](https://fontawesome.com/icons)** icons library.

so you need to write a *string* containing the **class** of that icon.

![Immagine 2022-07-15 000013](https://user-images.githubusercontent.com/94779582/179095947-0dc6751d-bc7c-4eb4-a44e-73bcc4ecded7.jpg)

#### 2 `color` second parameter

the color need to be a *string* containing one of the following values:

1. `hex`,                   for example: `#00FFFF` (remember to add `#`)
2. or a `rgb()`,            for example: `rgb(0,0, 255)`
3. or normal color value    for example: `cyan`
4. or any other valid css color value (but in string format)

something like this:

```javascript
{
    color: "cyan",
    // other parameters
}
```

#### 3 `text` third parameter

this is the text that will be displayed `onclick` of a icon.

also this need to be a *string*

something like this:

```javascript
{
    text: "hello world!",
    // other parameters
}
```

### example code object

this is a example containing 3 objects in array, without any options.

```javascript
createNav([{    // first 
        "text": "homepage page",
        "iconName": "fa-building",
        "color": "red"
    },          // second 
    {   "text": "see your files",
        "iconName": "fa-file-code",
        "color": "blue"
    },          // third
    {   "text": "your profile",
        "iconName": "fa-user",
        "color": "yellow"
    }]
);
```

if you don't like writing directly the array, then do like this:

```javascript
const myArray = [
    {
        "text": "homepage page",
        "iconName": "fa-building",
        "color": "red"
    },
    {
        "text": "see your files",
        "iconName": "fa-file-code",
        "color": "blue"
    }, 
    {
        "text": "your profile",
        "iconName": "fa-user",
        "color": "yellow"
    }
];

createNav(myArray); // this is also working fine!
```

### `options` second parameters

the options aren't important to add, use them only when you need more custum behaviurs.

> if you have any ideas of a new feature to add, <br> you add a suggestion in the "issue" tab in this github repo. thank a lot.

#### you can add a `<nav>` with the `ID` or `class` you want?

##### how to add a ID?

you need to write this, with a *string* containing your choosed class, <br> make sure that there is `#` before the name of the id

```javascript
{
    navElement: "#myId",
    // other parameters
}

// output: <nav id="myId">...</nav>
```

> I suggest this solution than the class solution, because a ID can be added only one time, so is unique.

##### how to add a CLASS?

you need to write this, with a *string* containing your choosed class, <br> make sure that there is `.` before the name of the class

```javascript
{
    navElement: ".myClass",
    // other parameters
}

// output: <nav class="myClass">...</nav>
```

#### you can disable my CSS file, to write your own custum CSS

this need a `boolean` value like `false` or `true`

by default is setted to `false`.

```javascript
{
    isHtmlOnly: true,
    // other parameters
}
```

this make you **only** install the **script** for creating `html` tags,
<br>and the CSS variables, **will continue** to working!
<br>and my CSS **won't be installed**.

> instead if you want most parts of my CSS, but not all,
<br> you can modify only the parts you want with your css file and adding `!important` if it didn't work (make sure to use also devtools).

##### list of css selector you can use for custumizable UI

| name of class | description |
|---|---|
| `.icon-div` | the parent-div that will contain <br> the `<i>` tag of the icon fontawesome |  
| `.icon-div.active`  | you can use this selector for adding some effect after the click of a icon |  
| `.icon`   | is the `<i>` tag itself, which will be the icon itself  |

##### list of css variables you can use for custumizable UI

| name of class | description |
|---|---|
| `--bg` | you can use this css variable in your css code <br> to color correctly and dinamically anything by using `var(--bg);` |
| `[data-text]` | this isn't a css variables but still helpful, <br>you can use this `data-text` html attribute in your pseudo-elements (`::before`, `::after`, etc...) <br> with the `attr(data-text)` css function |

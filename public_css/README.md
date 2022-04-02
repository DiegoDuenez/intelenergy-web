# css-scaffold
Readme for 🎨📂 CSS Scaffold.

## GET STARTED 🚀

### INDEX.CSS

First I recommend using the BEM methodology or other css methodology for class creation in all css of the project.

In this file you run all the resources of your project using the @import url('path/of/css/file.css') rule.
You run helpers, animations, components, layouts and settings.

```css
  @import url('layouts/layout.css');
  @import url('components/component.css');
  @import url('animations/animation.css');
  @import url('helpers/helper.css');
  @import url('settings/setting.css');
```

## SETTINGS FOLDER 🛠

In this folder you create all file with settings (one file per settings) that you will need like fonts, root, normalize, etc...
The root file and the fonts file are required and their use is recommended.

### Fonts

Here you can put all your own font families using the @font-face rule.

```css
  @font-face {
    font-family: 'PoppinsBlack';
    src: url('../../fonts/Poppins-Black.otf') format('woff');
  }
```

### Root

Here you can put all your own values and variables that you can use in your project.
For variables are put inside the :root pseudo-class.

```css
  :root{
    --orange: #f1790d;
    --title-fs-2: 2rem;
  }
```

## COMPONENTS FOLDER 📦

In this folder you create all components (one file per component) that you will need like navs, buttons, etc...
This components don't belong to a specific page, view, container, etc... of your project, are used globally. 

In this example I create a file nav.css inside components/ folder and make all styles only about my nav.

```css
  .nav{
    ...
  }
```

## HELPERS FOLDER ⛑

In this folder you create all helpers (one file per helper) that you will need like margins, paddings, etc...
This helpers don't belong to a specific page, view, container, etc... of your project, are used globally. 

In this example I create a file margin.css inside helpers/ folder and make classes only for margins: top, bottom, left and right.

```css
  .mt-5{
    margin-top: 5rem;
  }
```

## LAYOUTS FOLDER 🏗

In this folder you create all layouts (one file per layout) that you will use for your pages like containers, boxes, sections, etc...

In this example I create a file aboutus.css inside layouts/ folder and make classes only for that layout.
Each layout file can be very similar or use similar elements, but in some cases there are minor changes to these, this makes each of the designs unique.
This is why we separate each layout as a section of your web.

```css
  .aboutus{
    ...
  }
  
  .aboutus__title{
    ...
  }
```

## ANIMATIONS FOLDER 🏃‍♂️

This folder contains only one file for animations that you need create. But if you want create more files you can.

### Animations
In this file you create all animations that you will need in your project.

The animations file has some default animations for you to use.

```css
  .impulse:hover{
    ...
  }
```

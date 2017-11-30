# Uslider
It's a simple, responsive and reliable slider that only takes 3 kb!
**In work he uses jQuery.**

## It has flexible settings for adaptability and interactivity:

```javascript
var settings = { 
  step_pause: 300, 
  fadeOutElement: 300, 
  fadeInElement: 700, 
  widthLg: '1440px', 
  countLg: 6, 
  widthMd: '1024px', 
  countMg: 4, 
  widthSm: '768px', 
  countSm: 3, 
  widthXs: '667px', 
  countXs: 2, 
  countMobile: 1, 
  haveImage: true 
};
```

PLS! Not touch code after this:

```javascript
// !!!!!!!!!!!!!!!!!!! dont touch if you dont now JS !!!!!!!!!!!!!!!!!!!!!! //
function maxHeightElement( element ) { // function which find max height in element
   var heightElement = 0;
   $(element).each(function() {
   ...
```

## Now about each item separately:

> step_pause: 300 - this is a pause between the change of the next slider element.

> fadeOutElement: 300 - time of disappearance of the slider element.

> fadeInElement: 700 - time of show of the slider element.

> widthLg - means that if the width is greater than 1440px ( or custom width ), the screen will show **countLg** elements of the slider.

> countLg - number of elements with screen width more than **widthLg**.

## Other similar settings work the same way

> countMobile - number of elements with screen width less than **widthXs**.

> haveImage - need if the slider contains pictures

**WARNING! Do not put the number of slider elements more than half of all!**

## How to use

1. Create the same code structure:

```html
<div class="Uslider">
        <h2 class="Uslider-title">Uslider</h2>
        <div class="Uslider-main">
            <div class="Uslider_arrow">
                <i class="demo-icon icon-left-open-big" id="Uslider-left"></i> <!-- you can use any button, he must have id "Uslider-left" -->
                <i class="demo-icon icon-right-open-big" id="Uslider-right"></i> <!-- you can use any button, he must have id "Uslider-right" -->
            </div>
            <div class="container">
                <div class="Uslider_main" id="slider_Uslider">
                    <div class="Uslider-element">
                        <div class="number">
                            <p>1</p>
                        </div>
                    </div>
                    
                    ...
                    
                    <div class="Uslider-element">
                        <div class="number">
                            <p>10</p>
                        </div>
                    </div>
                    
                    ...
                    
                </div>
            </div>
        </div>
    </div>
```

2. Then add the required amount **Uslider-element**.
3. Add content.
4. Set up **settings** in file ( **b** is minify file ).
5. Testing and using))

## Screenshots

> For large display:

![1440](https://github.com/DLMykolaIvanov/Uslider-0.0.1-Alpha/blob/master/imgREADME/1440.png)

> For middle display:

![1024](https://github.com/DLMykolaIvanov/Uslider-0.0.1-Alpha/blob/master/imgREADME/1024.png)

> For small display:

![768](https://github.com/DLMykolaIvanov/Uslider-0.0.1-Alpha/blob/master/imgREADME/768.png)

> For extra small display:

![667](https://github.com/DLMykolaIvanov/Uslider-0.0.1-Alpha/blob/master/imgREADME/667.png)

> For mobile display:

![480](https://github.com/DLMykolaIvanov/Uslider-0.0.1-Alpha/blob/master/imgREADME/480.png)

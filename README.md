# Uslider
It's a simple, responsive and reliable slider that only takes 3 kb!
**In work he uses jQuery.**

It has flexible settings for adaptability and interactivity:

>    var settings = {
>        step_pause: 300,
>        fadeOutElement: 300,
>        fadeInElement: 700,
>        widthLg: '1440px',
>        countLg: 6,
>        widthMd: '1024px',
>        countMg: 4,
>        widthSm: '768px',
>        countSm: 3,
>        widthXs: '667px',
>        countXs: 2,
>        countMobile: 1,
>        haveImage: true
>    };

Now about each item separately:

> step_pause: 300 - this is a pause between the change of the next slider element.

> fadeOutElement: 300 - time of disappearance of the slider element.

> fadeInElement: 700 - time of show of the slider element.

> widthLg - means that if the width is greater than 1440px ( or custom width ), the screen will show **countLg** elements of the slider.

> countLg - number of elements with screen width more than **widthLg**.

**Other similar settings work the same way**

> countMobile - number of elements with screen width less than **widthXs**.

> haveImage - need if the slider contains pictures

**WARNING! Do not put the number of slider elements more than half of all!**

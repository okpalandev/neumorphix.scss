neumorphix
==========
## A standalone neumorphism CSS/SCSS framework.
## How to use it
1. Include the `neumorphix.css` file in your HTML file.
2. Add the `neumorphix` class to the element you want to apply the neumorphism effect to.

```scss
@import "neumorphix";

.neu-element {
    @include neu;
    &:hover {
        @include apply-scale-transform(1.1);
    }
    @include apply-scale-transform(1);
    transition: box-shadow 0.5s, transform 0.5s;
}
```

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="neumorphix.css">
</head>
<body>
    <div class="neu-element">
        <h1>Hello, world!</h1>
    </div>
</body>
</html>
```





# Angular Gauge Chart

[see sample at plunker](https://plnkr.co/edit/xoA3KLfxzU081Cl9WztV?p=preview)

# usage
```
// HTML
<gauge ng-model="gauge"></gauge>

// SCSS
.red { fill: $red; background-color: $red; }
.blue { fill: $blue; background-color: $blue; }
.yellow { fill: $yellow; background-color: $yellow; }
.white-dark { fill: $white-dark; background-color: $white-dark; }

// JS
$scope.gauge = [
	{ value: 30, cls: 'blue' },
	{ value: 30, cls: 'yellow' },
	{ value: 10, cls: 'red' },
	{ value: 30, cls: 'white-dark' }
];
```
you have to import`style.scss` and `gauge.js` and angular module `hakoiko.gauge`

the model should be an Array. and have keys : `value`, `cls`. `cls` means a CSS class(gauge color and more). 

# License
MIT License.

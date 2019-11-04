// face.js
var img = document.querySelector('.dot-tone-portrait img');

new BreathingHalftone( img, {
  dotSize: 1/200,
  dotSizeThreshold: 0.01,
  initVelocity: 0.9,
  oscPeriod: 2,
  channels: [ 'lum' ],
  friction: 0.25,
  hoverDiameter: 0.8,
  hoverForce: 0.004,
  activeDiameter: -0.4,
  activeForce: 0.004
});


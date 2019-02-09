var dotWidth = 35;
class Dot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.id = Math.random();
    $("body").append(`
      <span class="w3-box w3-pink" id=${this.id}
      style="position: absolute; left:${this.x}px; top:${this.y}px; font-size: ${dotWidth*2}px;">&nbsp;
      </span>
    `);
    document.getElementById(this.id).addEventListener('mouseover', () => {
      document.getElementById(this.id).remove()
    });
  }
}
for(var i = 0; i < window.innerWidth/dotWidth; i++){
  for(var j = 0; j < window.innerHeight/dotWidth; j++){
    new Dot(i*dotWidth/2, j*dotWidth/2)
  }
}

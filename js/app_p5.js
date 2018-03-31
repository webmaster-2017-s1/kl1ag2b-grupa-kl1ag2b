var idList = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
var rows = 4;
var cols = 4;
var index = 0;
var blockSize = 48;
var spacing = 25;
var blocks = [];
var clickCounter = 0;
var matchCounter = 0;
var firstBlock;
var secondBlock;
// zmienne zapisujące kod naciskanych kwadratów
var firstX;
var secondX;
var firstY;
var secondY;

function setup() {
  createCanvas(320, 320);
  colorMode(HSB);
  shuffle(idList, true);

  for (var x = 0; x < cols; x++) {
    for (var y = 0; y < rows; y++) {
      var blockX = ((spacing + blockSize) * x) + spacing;
      var blockY = ((spacing + blockSize) * y) + spacing;
      blocks.push(new Block(blockX, blockY, blockSize, idList[index], true));
      index++;
      console.log(index);
    }
  }
}

function draw() {
  background(80);
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].display();
  }
}

function mouseClicked() {
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].clicked();
  }
  print(clickCounter);
  if (clickCounter == 3) {
    if (firstBlock == secondBlock && (firstX != secondX || firstY != secondY)) {
      console.log("para");
      matchCounter++;
      for (var i = 0; i < blocks.length; i++) {
        if (blocks[i].id == firstBlock) {
          blocks[i].alive = false;
        }
      }
      console.log(matchCounter);
    } else {
      console.log("pudło");
      for (var i = 0; i < blocks.length; i++) {
        if (blocks[i].id == firstBlock || blocks[i].id == secondBlock) {
          blocks[i].colorState = blocks[i].back;
        }
      }

    }
    clickCounter = 0;
  }


}

function Block(x, y, w, id, alive) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.id = id;
  this.alive = alive;
  this.front = color(id * 22, 70, 70);
  this.back = 255;
  this.colorState = this.back;

  this.display = function() {
    if (this.alive) {
      fill(this.colorState);
      rect(this.x, this.y, this.w, this.w);
    }
  };

  this.clicked = function() {
    if (this.alive) {
      if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.w) {
        if (clickCounter == 0 || clickCounter == 1) this.colorState = this.front;
        if (clickCounter == 0) {
          firstBlock = this.id;
          firstX = this.x;
          firstY = this.y;
        } else if (clickCounter == 1) {
          secondBlock = this.id;
          secondX = this.x;
          secondY = this.y;
        }
        clickCounter++;

        console.log(this.alive);
      }
    }
  };


}

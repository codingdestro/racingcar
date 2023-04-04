class Car {
  constructor() {
    this.toke = random(0,4)
    this.w = viechle[this.toke][1];
    this.h = viechle[this.toke][2];

    this.ss = 50;
    this.size = {
      w: this.w - this.w * (this.ss / 100),
      h: this.h - this.h * (this.ss / 100),
    };
    this.yoffset = this.size.h;
    this.xoffset = this.size.w;

    this.xx = Math.abs(random(0, W - this.xoffset));
    if (Math.abs(lastRand - this.xx) > 80) {
      lastRand = this.xx;
    }
    this.x = this.xx;
    this.y = -this.h;
    this.speed = 5;
    this.img = new Image();
    this.img.src =viechle[this.toke][0]
    this.area = [
      [this.x, this.x + this.xoffset],
      [this.y, this.y + this.yoffset],
    ];
  }
  draw() {
    ctx.drawImage(
      this.img,
      0,
      0,
      this.w,
      this.h,
      this.x,
      this.y,
      this.size.w,
      this.size.h
    );
    this.move();
  }
  move() {
    this.y += this.speed;
    this.area = [
      [this.x, this.x + this.xoffset],
      [this.y, this.y + this.yoffset],
    ];
  }
}

let cars = [];
cars.push(new Car());
console.log(cars);

class MyCar {
  constructor() {
    this.x = 0;
    this.y = 350;
    this.speed = 0;
    this.xspeed = 10
    this.img = new Image();
    this.img.src = "./cars/black_viper.png";
    this.corners = [
      [this.x, this.y],
      [this.x + this.xoffset, this.y],

      [this.x, this.y + this.yoffset],
      [this.x + this.xoffset, this.y + this.yoffset],
    ];
    this.w = 100;
    this.h = 214;
    this.ss = 50;
    this.size = {
      w: this.w - this.w * (this.ss / 100),
      h: this.h - this.h * (this.ss / 100),
    };
    this.yoffset = this.size.h;
    this.xoffset = this.size.w;
  }

  draw() {
    ctx.drawImage(
      this.img,
      0,
      0,
      this.w,
      this.h,
      this.x,
      this.y,
      this.size.w,
      this.size.h
    );
    this.move();
  }
  move(key) {
    if (key == "d" && this.x < W - this.xoffset) {
      this.x += this.xspeed;
    }
    if (key == "a" && this.x > 0) {
      this.x -= this.xspeed;
    }
    if (key == "Enter") {
      bgSpeed = 20;
      xspeed = 12;
    }

    this.corners = [
      [this.x, this.y],
      [this.x + this.xoffset, this.y],

      [this.x, this.y + this.yoffset],
      [this.x + this.xoffset, this.y + this.yoffset],
    ];
    this.collion();
  }

  collion() {
    this.corners.forEach((ele, idx) => {
      for (let i = 0; i < (cars.length > 1 ? 2 : 1); i++) {
        if (
          ele[0] >= cars[i].area[0][0] &&
          ele[0] <= cars[i].area[0][1] &&
          ele[1] >= cars[i].area[1][0] &&
          ele[1] <= cars[i].area[1][1]
        ) {
          gameOver = true
          return;
        }
      }
    });
  }
}

let myCar = new MyCar();

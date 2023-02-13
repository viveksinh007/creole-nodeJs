class animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  getName() {
    return this.name;
  }

  getWeight() {
    return this.weight;
  }
}

const a1 = new animal("abc", 10);

console.log(a1.getName());

// big example

class Character {
  constructor(speed) {
    this.speed = speed;
  }

  move() {
    console.log(`I'm moving at the speed of ${this.speed}!`);
  }
}

class Enemy extends Character {
  constructor(name, phrase, power, speed) {
    super(speed);
    this.name = name;
    this.phrase = phrase;
    this.power = power;
  }
  sayPhrase = () => console.log(this.phrase);
  attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
}

class Alien extends Enemy {
  constructor(name, phrase, power, speed) {
    super(name, phrase, power, speed);
    this.species = "alien";
  }
  fly = () => console.log("👽👾 Zzzzzziiiiiinnnnnggggg!!");
}

const alien = new Alien("Ali", "I'm Ali the alien!", 10, 50);
alien.move();

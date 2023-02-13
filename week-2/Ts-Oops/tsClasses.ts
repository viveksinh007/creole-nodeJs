// class  Syntax

import { type } from "os";

// class myClass {}

interface nm {
  myId: number;
  ping(): void;
}

class Point implements nm {
  //x is readonly so only constructor can change this property value
  readonly x: number;
  y: number;
  myId = 10;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get y1(): number {
    return this.y;
  }

  set y2(yval: number) {
    this.y = yval;
  }

  ping() {
    console.log("ping!", this.myId);
    // this.x += 1  ❌ Cannot assign to 'x' because it is a read-only property.
  }
}

const pt = new Point(100, 100);

console.log(pt.x, pt.y);

pt.ping();

console.log("Before Using Getter y1 , Value of y from class Point", pt.y1);
pt.y2 = 10;
console.log("After Using Setter y2 ,  Value of y from class Point", pt.y1);

// **  Type-only Field Declarations -> doubtful

// memebers Visibility

class c1 {
  private a: number;
  public b: string;
  protected c1c: {
    id: number;
    uname: string;
  };

  constructor() {
    this.a = 10;
    this.b = "c1 : Hello World";
    this.c1c = {
      id: 1,
      uname: "c1 : vivek",
    };
  }

  public sayHello = () => {
    this.a = 10 + this.a; // changed the private member variables in current class
    console.log("c1 : Hello ");
    this.sayHelloInSecret();
  };

  private sayHelloInSecret = () => {
    console.log("c1 : 🤫 i am private method ");
  };
}

class c2 extends c1 {
  private ab: number;
  public b: string;

  protected c2c: {
    id: number;
    uname: string;
  };

  constructor() {
    super();
    this.ab = 100;
    this.b = "c2 : Hello World";
    this.c2c = {
      id: 1,
      uname: "c2 : vivek",
    };
  }

  public sayHello = () => {
    this.ab = 10 + this.ab; // changed the private member variables in current class
    console.log("c2 : Hello ");
    this.sayHelloInSecret1();
  };

  private sayHelloInSecret1 = () => {
    console.log("c2 : 🤫 i am private method ");
    console.log("c1 : c1c => ", this.c1c);
    console.log("c2 : c2c => ", this.c2c);
  };
}

const o1 = new c2();

console.log("b : ", o1.b);
o1.sayHello();

// simple Example

class A {
  private x: number;
  protected y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }
}

class B extends A {
  multiply() {
    // return this.x * this.y;
    // ❌ Property 'x' is private and only accessible within class 'A'
    // ✔  See this.y is protected and only accessible within extended classes
  }
}

// static member , block

class myClass1 {
  static howManyObj: number = 0;

  static gogogo = () => {
    console.log("gogogo");
  };

  constructor() {
    myClass1.howManyObj += 1;
  }

  static {
    myClass1.howManyObj += 1;
  }
}

class myc2 extends myClass1 {
  constructor() {
    super();
    console.log("in myc2 constructor : ");
    console.log("How many objects : " + myClass1.howManyObj);
    myClass1.gogogo();
  }
}

console.log(myClass1.howManyObj);

const co1 = new myc2();
console.log("How many objects : " + myClass1.howManyObj);
myClass1.gogogo();

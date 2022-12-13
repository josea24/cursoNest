const myName = 'Jose';
const myAge = 25;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 12);

class persona {
  constructor(private name: string, private age: number) {}

  getsummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

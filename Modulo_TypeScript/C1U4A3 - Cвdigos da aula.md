## Código 1

```typescript
class Dog {
  name: string = ""

  constructor() {}

  bark(): void {}
  hear(noise: string): void {}
}
```

## Código 2

```typescript
class Dog {
  name: string = ""
  private energy: number = 100

  constructor() {}

  bark(): void {}

  hear(noise: string): void {}
}
```

## Código 3

```typescript
pop.energy
balu.energy = 90
```

## Código 4

```typescript
class Dog {
  name: string = ""
  private energy: number = 100

  constructor() {}

  bark(): void {
    if (this.energy >= 30) {
      console.log("Au-au")
      this.energy -= 10
    }
  }

  hear(noise: string): void {}
}
```

## Código 5

```typescript
class Food {
  name: string = ""
  energy: number = 0

  constructor(name: string, energy: number) {
    this.name = name
    this.energy = energy
  }
}
```

## Código 6

```typescript
const carrot = new Food("Cenoura", 10)
const bone = new Food("Osso", 5)
```

## Código 7

```typescript
class Dog {
  name: string = ""
  private energy: number = 100

  constructor() {}

  bark(): void {
    if (this.energy >= 30) {
      console.log("Au-au")
      this.energy -= 10
    }
  }

  eat(food: Food): void {
    if (this.energy < 100) {
      this.energy += food.energy
    }
  }

  hear(noise: string): void {}
}
```

## Código 8

```typescript
const carrot = new Food("Cenoura", 10)
const bone = new Food("Osso", 5)

const pop: Dog = new Dog("Pop") // energy: 100
const balu: Dog = new Dog("Balu") // energy: 100

pop.bark() // energy: 90
pop.bark() // energy: 80
balu.bark() // energy: 90

pop.eat(carrot) // energy: 90
balu.eat(bone) // energy: 95
```

## Código 9

```typescript
class Dog {
  private energy: number = 100

  constructor() {}

  private isLowEneregy(): boolean {
    return this.energy >= 30
  }

  private isFull(): boolean {
    return this.energy >= 100
  }

  bark(): void {
    if (this.isLowEneregy()) {
      console.log("Au-au")
      this.energy -= 10
    }
  }

  eat(food: Food): void {
    if (!this.isFull()) {
      this.energy += food.energy
    }
  }

  hear(noise: string): void {}
}
```

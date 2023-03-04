## Código 1

```typescript
class Dog {
  name: string = ""
  weight: number = 0
  color: string = ""
  breed: string = ""
  size: number = 0

  constructor(
    name: string,
    weight: number,
    color: string,
    breed: string,
    size: number
  ) {
    this.name = name
    this.weight = weight
    this.color = color
    this.breed = breed
    this.size = size
  }
}
```

## Código 2

```typescript
class Dog {
  name: string = ""
  weight: number = 0
  color: string = ""
  breed: string = ""
  size: number = 0

  constructor(
    name: string,
    weight: number,
    color: string,
    breed: string,
    size: number
  ) {
    this.name = name
    this.weight = weight
    this.color = color
    this.breed = breed
    this.size = size
  }

  bark(): void {
    console.log("Au-au")
  }
}
```

## Código 3

```typescript
pop.bark()
balu.bark()
```

## Código 4

```typescript
class Dog {
  name: string = ""
  weight: number = 0
  color: string = ""
  breed: string = ""
  size: number = 0

  constructor(
    name: string,
    weight: number,
    color: string,
    breed: string,
    size: number
  ) {
    this.name = name
    this.weight = weight
    this.color = color
    this.breed = breed
    this.size = size
  }

  bark(): void {
    console.log("Au-au")
  }

  hear(noise: string): void {
    if (noise === this.name) {
      this.bark()
    }
  }
}
```

## Código 5

```typescript
pop.hear("Pop")
balu.hear("Balu")
```

## Código 6

```typescript
class Dog {
  name: string = ""
  weight: number = 0
  color: string = ""
  breed: string = ""
  size: number = 0

  constructor(
    name: string,
    weight: number,
    color: string,
    breed: string,
    size: number
  ) {
    this.name = name
    this.weight = weight
    this.color = color
    this.breed = breed
    this.size = size
  }

  calculateHairCut(): number {
    return (this.size * this.weight) / 100
  }
}
```

## Código 1

```typescript
class Dog {
  name: string = ""
  weight: number = 0
  color: string = ""
  breed: string = ""
  size: number = 0
}
```

## Código 2

```typescript
const dog: Dog = new Dog()
```

## Código 3

```typescript
dog.name
dog.weight
dog.color
dog.breed
dog.size
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
}
```

## Código 5

```typescript
const pop: Dog = new Dog("Pop", 15, "preto", "vira lata", 20)
const balu: Dog = new Dog("Balu", 25, "caramelo", "vira lata", 30)
```

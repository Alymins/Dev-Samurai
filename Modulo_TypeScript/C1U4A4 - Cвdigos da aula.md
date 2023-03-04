## Código 1

```typescript
interface Car {
  parts: Array<string>
  assembly()
}
```

## Código 2

```typescript
class CarModelA implements Car {
  parts: string[] = ["engine1.0", "manual_transmission"]

  assembly() {
    const car = this.parts.join(".")
  }
}
```

## Código 3

```typescript
class CarModelB implements Car {
  parts: string[] = ["engine2.0", "automatic_transmission"]

  assembly() {
    const car = this.parts.join(",")
  }
}
```

## Código 4

```typescript
const modelA = new CarModelA()
const modelB = new CarModelB()

function assemblyCars(cars: Array<Car>) {
  cars.forEach((car) => car.assembly())
}

assemblyCars([modelA, modelB])
```

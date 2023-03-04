## Código 1

```typescript
class ModelA {
  totalSpeedy: number = 150
  speedy: number = 0
  private gears: number = 5

  accelerate(): void {
    if (this.speedy >= this.totalSpeedy) {
      this.speedy += this.totalSpeedy / this.gears
    }
  }
}
```

## Código 2

```typescript
class ModelB {
  totalSpeedy: number = 150
  speedy: number = 0
  private gears: number = 5
  private sportMode: boolean = false

  accelerate(): void {
    if (this.speedy >= this.totalSpeedy) {
      this.speedy += this.totalSpeedy / this.gears
    }
  }

  toggleSportMode() {
    this.sportMode = !this.sportMode
    this.totalSpeedy += this.sportMode ? 50 : -50
  }
}
```

## Código 3

```typescript
class Car {
  totalSpeedy: number
  speedy: number
  private gears: number

  constructor(totalSpeedy: number, speedy: number, gears: number) {
    this.totalSpeedy = totalSpeedy
    this.speedy = speedy
    this.gears = gears
  }

  accelerate(): void {
    if (this.speedy >= this.totalSpeedy) {
      this.speedy += this.totalSpeedy / this.gears
    }
  }
}
```

## Código 4

```typescript
class ModelA extends Car {
  constructor() {
    super(150, 6)
  }
}

class ModelB extends Car {
  private sportMode: boolean = false

  constructor() {
    super(150, 6)
  }

  toggleSportMode() {
    this.sportMode = !this.sportMode
    this.totalSpeedy += this.sportMode ? 50 : -50
  }
}
```

## Código 5

```typescript
const modelA: ModelA = new ModelA()
const modelB: ModelB = new ModelB()

const cars: Array<Car> = [modelA, modelB]
```

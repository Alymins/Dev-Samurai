## Código 1

```typescript
const name = "Felipe"
const age = 25
```

## Código 2.1

```typescript
const fullName = (user) => {
  return `${user.firstName} ${user.lastName}`
}
```

## Código 2.2

```typescript
type User = {
  firstName: string
  lastName: string
}

const fullName = (user: User): string => {
  return `${user.firstName} ${user.lastName}`
}
```

# Código 3

```typescript
const sum = (number1: number, number2: number): number => {
  return number1 + number2
}
```

## Código 4

```json
{
  "compilerOptions": {
    "target": "ES2016"
    // outros valores possiveis de target: `ES3` (default), `ES5`, `ES6`/`ES2015` (synonymous), `ES7`/`ES2016`, `ES2017`, `ES2018`, `ES2019`, `ES2020`, or `ESNext`)
  }
}
```

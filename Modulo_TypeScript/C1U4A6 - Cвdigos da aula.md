## Código 1

```typescript
const names: Array<string> = ["Maria", "Claudio"]
```

## Código 2

```typescript
type User = {
  name: string
  age: number
}
```

## Código 3

```typescript
const users: Array<User> = [
  { name: "Maria", age: 25 },
  { name: "Claudio", age: 25 },
]
```

## Código 4

```typescript
type UserPage = {
  list: Array<User>
  totalPages: number
  currentPages: number
  itemsPerPage: number
  totalItems: number
}
```

## Código 5

```typescript
type CarPage = {
  list: Array<Car>
  totalPages: number
  currentPages: number
  itemsPerPage: number
  totalItems: number
}
```

## Código 6

```typescript
type Page<T> = {
  list: Array<T>
  totalPages: number
  currentPages: number
  itemsPerPage: number
  totalItems: number
}
```

## Código 7

```typescript
let users: Page<User> = getUsers({ page: 1 })
let cars: Page<Car> = getCars({ page: 2 })
```

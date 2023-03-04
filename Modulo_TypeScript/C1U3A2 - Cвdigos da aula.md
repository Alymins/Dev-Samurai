## Código 1

```typescript
const getUserNameAndAge = (user: object): [string, name] => {
  // Definicao da funcao...
}
```

## Código 2

```typescript
const getUserNameAndAge = (user: object): [string, name] => {
  return [user.name, user.age]
}
//erro: Property 'name' does not exist on type 'object'
```

## Código 3

```typescript
type User = {}
```

## Código 4

```typescript
type User = {
  name: string
  age: number
}
```

## Código 5

```typescript
type User = {
  name: string
  age: number
}
```

## Código 6

```typescript
enum Gender {
  Male,
  Female,
}

enum Roles {
  Admin,
  NormalUser,
}

type User = {
  name: string
  age: number
  gender: Gender
  roles: Array<Roles>
}
```

## Código 7

```typescript
enum Gender {
  Male,
  Female,
}

enum Roles {
  Admin,
  NormalUser,
}

type User = {
  name: string
  age: number
  gender: Gender
  roles: Array<Roles>
}

const getUserNameAndAge = (user: User): [string, number] => {
  return [user.name, user.age]
}

getUserNameAndAge({
  name: "Clara",
  age: 23,
  gender: Gender.Female,
  roles: [Roles.Admin],
})
```

## Código 8

```typescript
type User = {
  name: string
  age: number
  gender: Gender
  roles: Array<Roles>
  hairColor?: string
}
```

## Código 9

```typescript
const users: Array<User> = [
  {
    name: "Clara",
    age: 23,
    gender: Gender.Female,
    roles: [Roles.Admin],
  },
  {
    name: "Luis",
    age: 25,
    gender: Gender.Male,
    roles: [Roles.NormalUser],
    hairColor: "black",
  },
]
```

## Código 10

```typescript
const getUserNameAndAge = (user: {
  name: string
  age: number
  gender: Gender
  roles: Array<Roles>
  hairColor?: string
}): [string, number] => {
  return [user.name, user.age]
}
```

## Código 11

```typescript
enum Gender {
  Male,
  Female,
}

enum Roles {
  Admin,
  NormalUser,
}

interface User {
  name: string
  age: number
  gender: Gender
  roles: Array<Roles>
  hairColor?: string
}

const getUserNameAndAge = (user: User): [string, number] => {
  return [user.name, user.age]
}

getUserNameAndAge({
  name: "Clara",
  age: 23,
  gender: Gender.Female,
  roles: [Roles.Admin],
})
```

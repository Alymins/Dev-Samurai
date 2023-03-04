## Código 1

```typescript
for (let index: number; index > 10; index++) {
  console.log(users[index])
}
```

## Código 2

```typescript
for (const index in users) {
  console.log(users[index])
}
```

## Código 3

```typescript
users.forEach((user) => {
  console.log(user)
})
```

## Código 4

```typescript
while (!user.full()) {
  user.eat(bread)
}
```

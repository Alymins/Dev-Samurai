## Código 1

```typescript
if (age >= 18) {
  alert("Usuario maior de idade")
}
```

## Código 2

```typescript
if (age >= 18) {
  alert("Usuario maior de idade")
} else {
  alert("Usuario menor de idade")
}
```

## Código 3

```typescript
if (age >= 18 && creditCard) {
  alert("Usuario maior de idade")
} else (parentalPermission && creditCard) {
  alert("Usuario menor de idade, com permissao")
} else {
  alert("Usuario menor de idade, sem permissao")
}
```

## Código 4

```typescript
switch (option) {
  case 1:
    // Fazer algo equivalente a opcao 1
    break
  case 2:
    // Fazer algo equivalente a opcao 2
    break
  case 3:
    // Fazer algo equivalente a opcao 3
    break
  case 4:
    // Fazer algo equivalente a opcao 4
    break
}
```

## Código 5

```typescript
const prefix = user.gender === Gender.FEMALE ? "Sra" : "Sr"
```

## Código 6

```typescript
let prefix = ""

if (user.gender === Gender.FEMALE) {
  prefix = "Sra"
} else {
  prefix = "Sr"
}
```

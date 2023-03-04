## Código 1

```typescript
function nomeDaFuncao(parametros) {
  return saida
}
```

## Código 2

```typescript
function sum(value1, value2) {
  return value1 + value2
}
```

## Código 3

```typescript
function sum(value1, value2) {
  return value1 + value2
}

const result = sum(2, 3)
```

## Código 4

```typescript
const sum = (value1, value2) => {
  return value1 + value2
}

const result = sum(2, 3)
```

## Código 5

```typescript
if (age >= 18 && creditCard) {
  alert("Usuario maior de idade")
} else if (parentalPermission && creditCard) {
  alert("Usuario menor de idade, com permissao")
} else {
  alert("Usuario menor de idade, sem permissao")
}
```

## Código 6

```typescript
const creditCard = user.getCreditCard()
const response = paymentService.pay({ amount: 100, creditCard })
if (response.error) {
  alert("Falha no pagamento")
} else {
  alert("Compra efetuada com sucesso")
}
```

## Código 7

```typescript
const creditCard = user.getCreditCard()

function pay(amount, creditCard) {
  const response = paymentService.pay({ amount, creditCard })
  if (response.error) {
    return "Falha no pagamento"
  } else {
    return "Compra efetuada com sucesso"
  }
}

if (age >= 18 && creditCard) {
  alert(pay(100, creditCard))
} else if (parentalPermission && creditCard) {
  alert(pay(100, creditCard))
} else {
  alert("Usuario menor de idade, sem permissao")
}
```

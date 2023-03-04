## Código 1

```typescript
const name = value
let name = value
```

## Código 2

```typescript
const name = "Felipe"
```

## Código 3

```typescript
const name: string = "Felipe"
```

## Código 4

```typescript
const name: string = 25
// erro: Type 'number' is not assignable to type 'string'.
```

## Código 5

```typescript
const value: string = "um texto qualquer"
```

## Código 6

```typescript
const value: number = 25
const value: number = 1.5
```

## Código 7

```typescript
const value: boolean = true
const value: boolean = false
```

## Código 8

```typescript
const value: Array<string> = ["Felipe", "Bruno", "Fernando"]
```

## Código 9

```typescript
function nomeDaFuncao(parametro1: tipo, parametro2: tipo): tipo {
  // definicao da funcao
}

const nomeDaFuncao = (parametro1: tipo, parametro2: tipo): tipo => {
  // definicao da funcao
}
```

## Código 10

```typescript
const sum = (value1: number, value2: number): number => {
  return value1 + value2
}
```

## Código 11

```typescript
enum PaymentMethods {
  CreditCard = "credit_card",
  DebitCard = "debit_card",
  BankTransfer = "bank_transfer",
}

const paymentMethod: PaymentMethods = "Boleto"
```

## Código 12

```typescript
enum PaymentMethods {
  CreditCard,
  DebitCard,
  Transfer,
}
```

## Código 13

```typescript
const value: [string, number] = ["Felipe", 25]
```

## Código 14

```typescript
const getUserNameAndAge = (user: object): [string, name] => {
  // Definicao da funcao...
}
```

## Código 15

```typescript
const name: unknown = 25
const age: unknown = "Felipe"
```

## Código 16

```typescript
const value: any = metodoDeUmaBibliotecaSemTS()
```

## Código 17

```typescript
const setUserAge = (age: number): void => {
  // Definicao da funcao...
}
```

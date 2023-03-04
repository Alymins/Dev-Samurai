## Código 1

```typescript
const myElement: HTMLElement = document.getElementById("elementId")
```

## Código 2

```typescript
document.getElementById(elementId: string): HTMLElement
```

## Código 3

```typescript
const myElement: HTMLDivElement = document.getElementById(
  "asd"
) as HTMLDivElement
```

## Código 4

```typescript
const elements: HTMLLIElement | null = document.querySelector("li")
const a: HTMLParagraphElement = document.createElement("p")
```

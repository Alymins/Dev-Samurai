## Código 1

```console
npm install react --save
```

## Código 2

```console
npm install @types/react --save-dev
```

## Código 3

```json
{
  "compilerOptions": {
    ...
  },
  "include": ["./custom.d.ts"],
}
```

## Código 4

```typescript
export declare enum Type {
  VALUE1,
  VALUE2,
}

export declare function myFunction(param: Array<string>): Type
```

# Referential Transparency and TypeScript

This repo contains code samples from a talk I gave at [TSNYC 3.1.1][meetup].

To view the samples yourself in vscode, run:

    git clone https://github.com/danvk/ts-reftrans.git
    cd ts-reftrans
    yarn
    code .

For more of a writeup, see [this issue][issue] on the TypeScript repo.

The improvement on `Partial` that I presented is a variant on some code from
[this question][trick] on Stack Overflow. It's like `Pick` but infers the keys
that you want to pick:

```ts
const inferringPick = <V>() => <K extends keyof V>(x: Pick<V, K>): Pick<V, K> => x;

// v's type is inferred as Pick<RequestInit, 'method' | 'cache' | 'body'>
const v = inferPick<RequestInit>()({
  method: 'GET',
  cache: 'no-cache',
  body: 'hello world'
});
```

[meetup]: https://www.meetup.com/TypeScriptNYC/events/255170060/
[issue]: https://github.com/Microsoft/TypeScript/issues/27502
[trick]: https://stackoverflow.com/a/46101222/388951

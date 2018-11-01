// See https://stackoverflow.com/a/46101222/388951

export const inferKeys = <V>() => <K extends string>(x: Record<K,V>): Record<K,V> => x;

export const inferPick = <V>() => <K extends keyof V>(x: Pick<V, K>): Pick<V, K> => x;

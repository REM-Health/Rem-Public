export type Constructor<A extends unknown[] = unknown[], B = unknown> = new (
	..._: A
) => B

export type ConstructorReturnType<A extends Constructor> =
	A extends Constructor<unknown[], infer B> ? B : never

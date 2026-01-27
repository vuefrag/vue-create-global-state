type AnyFn = (...args: any[]) => any;
type CreateGlobalStateReturn<Fn extends AnyFn = AnyFn> = Fn;
/**
 * Keep states in the global scope to be reusable across Vue instances.
 *
 * @see https://vueuse.org/createGlobalState
 * @param stateFactory A factory function to create the state
 *
 * @__NO_SIDE_EFFECTS__
 */
declare function createGlobalState<Fn extends AnyFn>(stateFactory: Fn): CreateGlobalStateReturn<Fn>;

export { createGlobalState };
export type { CreateGlobalStateReturn };

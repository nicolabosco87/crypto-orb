declare module "valtio" {
  function useSnapshot<T extends object>(p: T): T;
  function proxy<T extends object>(initialObject?: T): T;
}

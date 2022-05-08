import { proxy } from "valtio";

export type TOrbStatus = "in" | "out" | "idle";
export type TCurrentPage = "ponder" | "about";
export interface IStore {
  status: TOrbStatus;
  result?: string;
  currentPage: TCurrentPage;
}

/**
 * Init simple state with Valtio
 */
export const store = proxy<IStore>({
  status: "idle",
  currentPage: "ponder",
});

import { proxy } from "valtio";

interface IStore {
  projectName: string;
}

export const store = proxy<IStore>({
  projectName: "",
});

export interface INestedCheckboxData {
  id: string;
  title: string;
  children?: Array<INestedCheckboxData>;
}

export interface IMappedNestedCheckboxData extends INestedCheckboxData {
  parent: MaybeNull<IMappedNestedCheckboxData>;
}

export type ICheckboxObj = Record<string, boolean>; // id => true/false

export type IEmptyFunction<T> = (val: T) => void;

export type ISetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type MaybeNull<T> = T | null;

export type MaybeUndefined<T> = T | undefined;

export type IChildToParentKeyMap = Record<string, MaybeUndefined<string>>;

export type IParentToChildMap = Record<string, Array<string>>;

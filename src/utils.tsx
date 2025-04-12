import {
  IChildToParentKeyMap,
  INestedCheckboxData,
  IParentToChildMap,
  MaybeNull,
  MaybeUndefined,
} from "./interface/common";
import { isNullOrUndefined } from "./utils/common";

export const getChildToParentKeyMap = (
  parent: MaybeNull<INestedCheckboxData>,
  nestedData: Array<INestedCheckboxData>,
  map: MaybeUndefined<IChildToParentKeyMap> = {}
) => {
  nestedData.forEach((data) => {
    if (!isNullOrUndefined(data.children)) {
      getChildToParentKeyMap(data, data.children, map);
    }
    map[data.id] = parent?.id;
  });

  return map;
};

export const getParentToChildKeyMap = (
  parent: MaybeNull<INestedCheckboxData>,
  nestedData: Array<INestedCheckboxData>,
  map: MaybeUndefined<IParentToChildMap> = {}
) => {
  nestedData.forEach((data) => {
    if (!isNullOrUndefined(data.children)) {
      getParentToChildKeyMap(data, data.children, map);
    }

    if (isNullOrUndefined(parent)) {
      return;
    }

    if (map[parent.id]?.length) {
      map[parent.id].push(data.id);
    } else {
      map[parent.id] = [data.id];
    }
  });

  return map;
};

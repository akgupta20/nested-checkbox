import { ChangeEvent } from "react";

import { getChildToParentKeyMap, getParentToChildKeyMap } from "./utils";
import { isNullOrUndefined } from "./utils/common";
import { NESTED_CHECKBOX_DATA } from "./utils/constant";

import NestedCheckbox from "./NestedCheckbox";

import type {
  ICheckboxObj,
  IEmptyFunction,
  INestedCheckboxData,
} from "./interface/common";

interface ICheckboxNodeProps {
  checkboxData: INestedCheckboxData;
  checkboxObj: ICheckboxObj;
  setCheckboxObj: IEmptyFunction<ICheckboxObj>;
}

const parentToChildKeyMap = getParentToChildKeyMap(null, NESTED_CHECKBOX_DATA);
const childToParentKeyMap = getChildToParentKeyMap(null, NESTED_CHECKBOX_DATA);

const CheckboxNode = (props: ICheckboxNodeProps) => {
  const { checkboxData, checkboxObj, setCheckboxObj } = props;

  const { id, title, children } = checkboxData;

  const markAllChildrenChecked = (children?: Array<INestedCheckboxData>) => {
    // Now, mark all the children as checked
    if (isNullOrUndefined(children)) {
      return;
    }

    children.forEach((child) => {
      setCheckboxObj({ [child.id]: true });
      markAllChildrenChecked(child.children);
    });
  };

  const markParent = (
    nodeId: string,
    value: boolean,
    checkIsNodeVerify?: (id: string) => boolean
  ) => {
    const parentId = childToParentKeyMap[nodeId];

    if (isNullOrUndefined(parentId)) {
      return;
    }

    if (checkIsNodeVerify) {
      console.log("checkIsNodeVerify(nodeId)", checkIsNodeVerify(nodeId));
    }

    if (!isNullOrUndefined(checkIsNodeVerify) && !checkIsNodeVerify(nodeId)) {
      return;
    }

    setCheckboxObj({ [parentId]: value });

    markParent(parentId, value, checkIsNodeVerify);
  };

  // will take the child node id
  const verifySiblingAndUpdateParent = (nodeId: string) => {
    const parentId = childToParentKeyMap[nodeId];

    if (isNullOrUndefined(parentId)) {
      return false;
    }

    // verify it's sibling nodes and mark the parent accordingly

    const siblings = parentToChildKeyMap[parentId];

    const isAllSiblingChecked = siblings
      .filter((siblingID) => siblingID !== nodeId)
      .every((sibling) => checkboxObj[sibling]);

    return isAllSiblingChecked;
  };

  const handleCheckbox = (evt: ChangeEvent<HTMLInputElement>) => {
    const isChecked = evt.target.checked;

    if (isChecked) {
      markAllChildrenChecked(children);
      markParent(id, true, verifySiblingAndUpdateParent);
    }
    // The parent is unchecked, if not
    else {
      markParent(id, false);
    }

    setCheckboxObj({ [id]: isChecked });
  };

  return (
    <div>
      <p>
        <input
          type="checkbox"
          onChange={handleCheckbox}
          checked={checkboxObj[id]}
        />
        <span>{title}</span>
      </p>
      <NestedCheckbox
        key={id}
        data={children}
        checkboxObj={checkboxObj}
        setCheckboxObj={setCheckboxObj}
      />
    </div>
  );
};

export default CheckboxNode;

import CheckboxNode from "./CheckboxNode";
import {
  ICheckboxObj,
  IEmptyFunction,
  INestedCheckboxData,
} from "./interface/common";
import { isNullOrUndefined } from "./utils/common";

interface INestedCheckboxProps {
  data?: Array<INestedCheckboxData>;
  checkboxObj: ICheckboxObj;
  setCheckboxObj: IEmptyFunction<ICheckboxObj>;
}

const NestedCheckbox = (props: INestedCheckboxProps) => {
  const { data, checkboxObj, setCheckboxObj } = props;

  if (isNullOrUndefined(data)) {
    return null;
  }

  return (
    <div className="marginLeft">
      {data.map((node) => (
        <CheckboxNode
          key={node.id}
          checkboxData={node}
          checkboxObj={checkboxObj}
          setCheckboxObj={setCheckboxObj}
        />
      ))}
    </div>
  );
};

export default NestedCheckbox;

import { ReactElement } from "react";

import { getModuleNameFromCode } from "utils/moduleCodeUtils";

import "./ModuleCode.scss";

interface ModuleCodeProps {
  moduleCode: string;
  moduleName?: string;
}

const ModuleCode = (
  props: ModuleCodeProps
): ReactElement<ModuleCodeProps, "div"> => {
  const { moduleCode } = props;

  const moduleName = getModuleNameFromCode(moduleCode);

  return (
    <div className="module-code">
      <div className="module-code__code">{moduleCode}</div>
      <div className="module-code__name is-grey">{moduleName}</div>
    </div>
  );
};

export default ModuleCode;

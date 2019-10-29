/* istanbul ignore file */
import React, { ReactElement } from "react";

import classNames from "classnames";

import { IconMap, IconType } from "./IconTypes";
type IconProps = {
  name?: IconType;
  alt?: string;
  multiColor?: boolean;
};

const Icon = ({ name, alt, multiColor }: IconProps): ReactElement => {
  const val = name ? IconMap.get(name) : "";
  if (multiColor) {
    return (
      <div className={classNames("icon", `${val}`)} title={alt}>
        <span className={classNames("path1")} />
        <span className={classNames("path2")} />
        <span className={classNames("path3")} />
      </div>
    );
  }
  return <i className={classNames("icon", `${val}`)} title={alt} />;
};

Icon.displayName = "Icon";

export default Icon;

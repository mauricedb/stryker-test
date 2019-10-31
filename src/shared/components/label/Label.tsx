import React, { ReactElement, ReactChild } from "react";

type LabelProps = {
  caption: ReactChild;
  name?: string;
};

const Label = ({ caption, name }: LabelProps): ReactElement => {
  return <label htmlFor={name}>{caption}</label>;
};

Label.displayName = "Label";

export default Label;

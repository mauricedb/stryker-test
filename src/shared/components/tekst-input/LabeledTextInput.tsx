import React, { InputHTMLAttributes, ReactElement } from "react";
import Label, { LabelProps } from "../label/Label";
import TextInput, { TextInputProps } from "./TextInput";
import classNames from "classnames";

type LabledTextInputProps = TextInputProps & LabelProps;

const LabeledTextInput = ({
  caption,
  name,
  appendChildren,
  className,
  tooltip,
  verplicht = false,
  visible,
  labelColSize = 6,
  ...props
}: LabledTextInputProps & InputHTMLAttributes<HTMLInputElement>): ReactElement => {
  const inputColSize = labelColSize < 12 ? 12 - labelColSize : 12;
  return (
    <div
      className={classNames(className, "form-group form-row", {
        invisible: visible === false
      })}
    >
      <div className={`col-${labelColSize}`}>
        <Label caption={caption} name={name} tooltip={tooltip} />
        {verplicht && <sup>(verplicht)</sup>}
      </div>
      <div className={`col-${inputColSize}`}>
        <TextInput name={name} appendChildren={appendChildren} {...props} />
      </div>
    </div>
  );
};

export default LabeledTextInput;

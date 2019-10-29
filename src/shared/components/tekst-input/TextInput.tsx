import React, {
  InputHTMLAttributes,
  ReactNode,
  ReactElement,
  FocusEvent,
  useContext
} from "react";
import {
  Field,
  connect,
  getIn,
  FormikContext,
  FormikContextType
} from "formik";
import classnames from "classnames";
import classes from "./TextInput.module.scss";
import { getFieldSizeClass, verwijderApiFoutVoor } from "../../utils/helpers";
import ErrorBoundaryContext from "../error-handling/ErrorBoundaryContext";
import classNames from "classnames";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { Icon } from "..";

export type TextInputProps = {
  name: string;
  readonly?: boolean;
  appendChildren?: ReactNode;
  fieldSize?: "xl" | "l" | "m" | "s" | "grid-cell";
  fullWidth?: boolean;
  extraClasses?: string;
  readonlyTextAlignment?: "left" | "right";
  visible?: boolean;
  dataGrid?: boolean;
  placeholder?: string;
  tooltip?: string;
};

const TextInput = ({
  name,
  readonly = false,
  formik,
  appendChildren,
  fieldSize = "xl",
  fullWidth = false,
  readonlyTextAlignment = "left",
  extraClasses = "col-form-label",
  visible,
  placeholder,
  dataGrid = false,
  tooltip,
  className,
  ...props
}: { formik: any } & TextInputProps &
  InputHTMLAttributes<HTMLInputElement>): ReactElement => {
  const errorMessage = getIn(formik.errors, name);
  const touched = getIn(formik.touched, name);
  const appHasError = useContext(ErrorBoundaryContext).error ? true : false;
  const currentValue = getIn(formik.values, name);

  const onBlur = (e: FocusEvent<HTMLInputElement>): void => {
    e.preventDefault();
    formik.setFieldTouched(name);

    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  const onInput = (): void => {
    if (touched) {
      formik.setFieldTouched(name, false);
      verwijderApiFoutVoor(formik, name);
    }
  };

  return (
    <>
      {readonly ? (
        <div
          className={classNames("input-group", className, {
            invisible: visible === false
          })}
        >
          <div className={classnames(getFieldSizeClass(fieldSize))}>
            <div
              id={name}
              className={classnames(
                "d-inline-flex",
                extraClasses,
                readonlyTextAlignment === "right" ? "totaal-container" : ""
              )}
            >
              {getIn(formik.values, name) || placeholder}
            </div>
          </div>
          {appendChildren}
        </div>
      ) : (
        <>
          <div
            className={classNames(
              "input-group",
              className,
              {
                invisible: visible === false
              },
              {
                "w-100": fullWidth
              },
              {
                "d-flex flex-nowrap": dataGrid && errorMessage && touched
              }
            )}
          >
            <Field
              tooltip={tooltip}
              placeholder={placeholder}
              type="text"
              disabled={appHasError}
              id={name}
              data-testid={name}
              name={name}
              className={classnames(
                classes.input_control,
                fullWidth ? "w-100" : getFieldSizeClass(fieldSize),
                {
                  "is-invalid": errorMessage && touched
                }
              )}
              role="textbox"
              {...props}
              onBlur={onBlur}
              onInput={onInput}
              value={currentValue === null ? "" : currentValue}
              data-lpignore
            />
            {dataGrid && errorMessage && touched && (
              <div>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  key={`${name}-tooltip`}
                  rootClose={true}
                  overlay={
                    <Tooltip
                      className="tooltip_correction"
                      placement="bottom"
                      id={`${name}-tooltip`}
                    >
                      {errorMessage}
                    </Tooltip>
                  }
                >
                  <div className="ml-2" id={`${name}-icon-tooltip`}>
                    <Icon
                      name="waarschuwing"
                      alt="waarschuwing"
                      multiColor={true}
                    />
                  </div>
                </OverlayTrigger>
              </div>
            )}
            {tooltip && (
              <OverlayTrigger
                trigger="click"
                key={name}
                rootClose={true}
                placement="bottom"
                overlay={<Tooltip id={`${name}-tooltip`}>{tooltip}</Tooltip>}
              >
                <Button className="question-tip" id={`${name}-tooltip`} />
              </OverlayTrigger>
            )}
            {appendChildren && (
              <div className="input-group-append small-input-padding align-items-center">
                {appendChildren}
              </div>
            )}
          </div>
          {errorMessage && !dataGrid && touched && (
            <div className="foutmelding">{errorMessage}</div>
          )}
        </>
      )}
    </>
  );
};

TextInput.displayName = "TextInput";

export default connect<TextInputProps & InputHTMLAttributes<HTMLInputElement>>(
  TextInput
);

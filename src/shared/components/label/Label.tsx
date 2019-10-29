import React, { ReactElement, ReactNode, ReactChild } from "react";
import { Tooltip, OverlayTrigger, Button } from "react-bootstrap";

export type LabelProps = {
  caption: ReactChild;
  name?: string;
  tooltip?: string | ReactElement;
  verplicht?: boolean;
  appendChildren?: ReactNode;
  fontWeight?: "normal" | "bold";
  width?: string;
  labelColSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

const Label = ({
  caption,
  name,
  tooltip,
  verplicht,
  fontWeight = "normal",
  width,
  appendChildren
}: LabelProps): ReactElement => {
  return (
    <>
      <label htmlFor={name} className="col-form-label" style={{ fontWeight: fontWeight, width: width }}>
        {caption}
      </label>
      {verplicht && <sup>(verplicht)</sup>}
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
      {appendChildren}
    </>
  );
};

Label.displayName = "Label";

export default Label;

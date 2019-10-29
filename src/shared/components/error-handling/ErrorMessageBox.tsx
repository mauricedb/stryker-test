/* istanbul ignore file */
import React, { useContext, ReactElement } from "react";
import ErrorBoundaryContext from "./ErrorBoundaryContext";
import classes from "./ErrorMessageBox.module.scss";

export const ErrorMessageBox = (): ReactElement | null => {
  const contextValue = useContext(ErrorBoundaryContext);

  return contextValue.error ? (
    <div className={`px-2 ${classes.error_box_wrapper}`}>
      <div className={`p-2 ${classes.error_box}`}>
        <div>
          <span>
            Er is een fout opgetreden bij het laden van een onderdeel van het scherm. Hierdoor kunt u de gegevens alleen
            inzien.
          </span>
        </div>
        <div className={`mt-4`}>
          <span>Er is automatisch een melding aangemaakt.</span>
        </div>
      </div>
    </div>
  ) : null;
};

ErrorMessageBox.displayName = "ErrorMessageBox";

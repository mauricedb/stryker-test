import ErrorBoundaryContext from "./ErrorBoundaryContext";
import React, { useState, ReactElement } from "react";

const getErrorBoundaryContextError = (
  error: Error | null,
  setter: (error: Error | null) => void
): ErrorBoundaryContext => ({
  setError(error): void {
    setter(error);
  },
  error
});

type ErrorBoundaryContextProvider = {
  children: React.ReactNode;
};

const ErrorBoundaryContextProvider = ({ children }: ErrorBoundaryContextProvider): ReactElement => {
  const [error, setError] = useState(null as Error | null);
  const value = getErrorBoundaryContextError(error, setError);

  return <ErrorBoundaryContext.Provider value={value}>{children}</ErrorBoundaryContext.Provider>;
};

export default ErrorBoundaryContextProvider;

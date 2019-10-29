/* istanbul ignore file */
import { createContext } from "react";

type ErrorBoundaryContext = {
  error: Error | null;
  setError: (error: Error | null) => void;
};

const ErrorBoundaryContext = createContext<ErrorBoundaryContext>({
  error: null,
  setError: (): void => {}
});

export default ErrorBoundaryContext;

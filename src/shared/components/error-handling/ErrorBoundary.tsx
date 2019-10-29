import React, {
  Component,
  ComponentType,
  ErrorInfo,
  ReactElement
} from "react";
// import { logErrorToApplicationInsights } from "../../utils/appInsights";
// import Card from "../card/Card";
// import ErrorIcon from "../../../icons/ErrorIcon";
import classes from "./ErrorBoundary.module.scss";
import ErrorBoundaryContext from "./ErrorBoundaryContext";

type ErrorBoundaryState = {
  error: Error | null;
};

const EmptyComponent = (props: { children: ReactElement }): ReactElement => {
  return props.children;
};

export default function withErrorBoundary<P>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> {
  return class ErrorBoundary extends Component<P, ErrorBoundaryState> {
    public static contextType = ErrorBoundaryContext;
    public context!: React.ContextType<typeof ErrorBoundaryContext>;

    public readonly state: Readonly<ErrorBoundaryState> = {
      error: null
    };

    public static displayName: "ErrorBoundary";

    public static getDerivedStateFromError(error: Error): { error: Error } {
      return { error };
    }

    public componentDidCatch(error: Error, info: ErrorInfo): void {
      this.context.setError(error);

      console.warn("CaughtError =>", error, "ErrorMessage =>", info);
      // logErrorToApplicationInsights(error, {
      //   componentStack: info.componentStack
      // });
    }

    public render(): ReactElement {
      const { error } = this.state;
      if (error) {
        return (
          // <Card>
          <div
            className={`d-flex flex-column align-items-center justify-content-center card-body`}
          >
            <div>{/* <ErrorIcon /> */}</div>
            <div className={`mt-4 ${classes.error}`}>
              <span>Onderdeel kan niet geladen worden</span>
            </div>
          </div>
          // </Card>
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  };
}

export const ErrorBoundary = withErrorBoundary(EmptyComponent);

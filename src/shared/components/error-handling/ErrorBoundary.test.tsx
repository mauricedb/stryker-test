import React, { ReactElement } from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import withErrorBoundary, { ErrorBoundary } from "./ErrorBoundary";
// import { createApplicationInsights } from "../../utils/appInsights";

// jest.mock("@microsoft/applicationinsights-web");

test("dummy", () => {});

// const ErrorComponent = (): ReactElement => {
//   throw new Error("ErrorBoundary error test");
// };

// const EmptyComponent = (props: { children: ReactElement }): ReactElement => {
//   return props.children;
// };

// describe("ErrorBoundary DOM tests", (): void => {
//   // beforeAll((): void =>
//   //   createApplicationInsights({ applicationInsightsKey: "" })
//   // );

//   test("expect ErrorBoundary to render", (): void => {
//     const { getByText } = render(
//       <ErrorBoundary>
//         <div>ErrorBoundary</div>
//       </ErrorBoundary>
//     );

//     expect(getByText("ErrorBoundary")).toBeInTheDocument();
//   });

//   test("expect withErrorBoundary(component) to render", (): void => {
//     const WithErrorBoundaryComponent = withErrorBoundary(EmptyComponent);

//     const { getByText } = render(
//       <WithErrorBoundaryComponent>
//         <div>WithErrorBoundaryComponent</div>
//       </WithErrorBoundaryComponent>
//     );

//     expect(getByText("WithErrorBoundaryComponent")).toBeInTheDocument();
//   });
// });

// describe("ErrorBoundary Functional tests", (): void => {
//   let log: () => void;
//   let warning: () => void;
//   let error: () => void;

//   beforeEach((): void => {
//     log = console.log;
//     warning = console.warn;
//     error = console.error;

//     console.log = jest.fn();
//     console.warn = jest.fn();
//     console.error = jest.fn();
//     // createApplicationInsights({ applicationInsightsKey: "" });
//   });

//   afterEach((): void => {
//     console.log = log;
//     console.warn = warning;
//     console.error = error;
//   });

//   test("expect withErrorBoundary(component) to catch error", (): void => {
//     const WithErrorBoundaryComponent = withErrorBoundary(ErrorComponent);

//     const { getByText } = render(
//       <WithErrorBoundaryComponent>
//         <div>WithErrorBoundaryComponent</div>
//       </WithErrorBoundaryComponent>
//     );

//     expect(getByText("Onderdeel kan niet geladen worden")).toBeInTheDocument();
//   });

//   test("expect ErrorBoundary to catch error", (): void => {
//     const { getByText } = render(
//       <ErrorBoundary>
//         <ErrorComponent />
//       </ErrorBoundary>
//     );

//     expect(getByText("Onderdeel kan niet geladen worden")).toBeInTheDocument();
//   });
// });

import React, { ReactElement } from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { Formik, FormikProps } from "formik";
import LabeledTextInput from "./LabeledTextInput";
import ErrorBoundaryContext from "../error-handling/ErrorBoundaryContext";
import { TextInput } from "..";

test("dummy", () => {});

// const onSubmit = (): void => {};

// const initialValues = {
//   inputTekstProp: "this is some text.",
//   testUpdate: "update deze text",
//   testBlur: "test blur handler",
//   testInvalid: "test invalid",
//   testDisabledOnError: "is disabled on error.",
//   testVerplicht: "verplicht shows label"
// };

// describe("The LabeledRadioInput", (): void => {
//   test("Renders the initial value", (): void => {
//     const { getByLabelText } = render(
//       <Formik initialValues={initialValues} onSubmit={onSubmit}>
//         <LabeledTextInput caption="Geef een waarde op" name="inputTekstProp" />
//       </Formik>
//     );

//     const input = getByLabelText("Geef een waarde op") as HTMLInputElement;
//     expect(input).toBeInstanceOf(HTMLInputElement);
//     expect(input.value).toBe("this is some text.");
//   });

//   test("Can update the value", (): void => {
//     let injected: FormikProps<typeof initialValues> = null as any;
//     const { getByLabelText } = render(
//       <Formik initialValues={initialValues} onSubmit={onSubmit}>
//         {(formikProps): ReactElement =>
//           (injected = formikProps) && <LabeledTextInput caption="Geef een waarde op" name="testUpdate" />
//         }
//       </Formik>
//     );
//     expect(injected).not.toBeNull();
//     expect(injected.touched.testUpdate).toBeUndefined();

//     const input = getByLabelText("Geef een waarde op") as HTMLInputElement;
//     expect(input).toBeInstanceOf(HTMLInputElement);
//     expect(input.value).toBe("update deze text");

//     fireEvent.input(input, { target: { value: "nieuwe text" } });
//     fireEvent.blur(input);

//     expect(input.value).toBe("nieuwe text");
//     expect(injected.touched.testUpdate).toEqual(true);
//   });

//   test("Calls onBlur handler", (): void => {
//     const blurHandler = jest.fn();
//     const { getByLabelText } = render(
//       <Formik initialValues={initialValues} onSubmit={onSubmit}>
//         <LabeledTextInput caption="Geef een waarde op" name="testBlur" onBlur={blurHandler} />
//       </Formik>
//     );
//     const input = getByLabelText("Geef een waarde op") as HTMLInputElement;
//     fireEvent.blur(input);

//     expect(blurHandler).toBeCalled();
//   });

//   test("Errormessage adds is-invalid class", (): void => {
//     let injected: FormikProps<typeof initialValues> = null as any;
//     const { getByLabelText } = render(
//       <Formik initialValues={initialValues} onSubmit={onSubmit}>
//         {(formikProps): ReactElement =>
//           (injected = formikProps) && <LabeledTextInput caption="Geef een waarde op" name="testInvalid" />
//         }
//       </Formik>
//     );
//     expect(injected).not.toBeNull();
//     const input = getByLabelText("Geef een waarde op") as HTMLInputElement;
//     expect(input).toBeInstanceOf(HTMLInputElement);
//     fireEvent.blur(input);
//     injected.setFieldError("testInvalid", "error message");

//     expect(input.className).toContain("is-invalid");
//   });

//   test("Is disabled on ErrorBoundary error", (): void => {
//     const { getByLabelText } = render(
//       <Formik initialValues={initialValues} onSubmit={onSubmit}>
//         <ErrorBoundaryContext.Provider value={{ error: new Error("some error"), setError: (): null => null }}>
//           <LabeledTextInput caption="Geef een waarde op" name="testDisabledOnError" />
//         </ErrorBoundaryContext.Provider>
//       </Formik>
//     );
//     const input = getByLabelText("Geef een waarde op") as HTMLInputElement;
//     expect(input).toBeInstanceOf(HTMLInputElement);
//     expect(input.disabled).toBe(true);
//   });

//   test("Is not disabled if no ErrorBoundary error", (): void => {
//     const { getByLabelText } = render(
//       <Formik initialValues={initialValues} onSubmit={onSubmit}>
//         <ErrorBoundaryContext.Provider value={{ error: null, setError: (): null => null }}>
//           <LabeledTextInput caption="Geef een waarde op" name="testDisabledOnError" />
//         </ErrorBoundaryContext.Provider>
//       </Formik>
//     );
//     const input = getByLabelText("Geef een waarde op") as HTMLInputElement;
//     expect(input).toBeInstanceOf(HTMLInputElement);
//     expect(input.disabled).toBe(false);
//   });

//   test("Renders the initial value", (): void => {
//     const { getByText } = render(
//       <Formik initialValues={initialValues} onSubmit={onSubmit}>
//         <LabeledTextInput caption="Geef een waarde op" name="inputTekstProp" verplicht={true} />
//       </Formik>
//     );

//     expect(getByText("(verplicht)")).toBeInTheDocument();
//   });

//   test("Test column size", (): void => {
//     const { container } = render(
//       <Formik initialValues={initialValues} onSubmit={onSubmit}>
//         <LabeledTextInput caption="The caption:" name="prop1" labelColSize={12} />
//       </Formik>
//     );

//     expect(container.querySelectorAll("div.form-group.form-row > div.col-12")).toHaveLength(2);
//   });

//   test("Test className", (): void => {
//     const { container } = render(
//       <Formik initialValues={initialValues} onSubmit={onSubmit}>
//         <TextInput name="prop1" className="test" />
//       </Formik>
//     );

//     expect(container.firstChild).toHaveClass("test");
//   });
// });

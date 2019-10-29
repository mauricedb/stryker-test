// import { UiError } from "../types";
import { getIn, setIn, FormikErrors } from "formik";
// import { KlantnaamType } from "../../shared/generic-parts/klantnaam";

// export function capitalizeFirstLetter(input: string): string {
//   return input.charAt(0).toUpperCase() + input.slice(1);
// }

// export function sleep(ms = 10): Promise<void> {
//   return new Promise((resolve): void => {
//     setTimeout((): void => resolve(), ms);
//   });
// }

export function assertNever(value: never): never {
  throw new Error("Unexpected value: " + value);
}

export function getFieldSizeClass(
  size: "xl" | "l" | "m" | "sm" | "s" | "grid-cell" | "no-size"
): string {
  switch (size) {
    case "xl":
      return "extra-large";
    case "l":
      return "large";
    case "m":
      return "medium";
    case "sm":
      return "smedium";
    case "s":
      return "small";
    case "grid-cell":
      return "grid-cell";
    case "no-size":
      return "no-size";
    default:
      return assertNever(size);
  }
}

// export function prefixWithZero(value: number | null | undefined, size = 2): string | null {
//   if (typeof value === "number") {
//     return value.toString().padStart(size, "0");
//   }

//   return null;
// }

// export const limitCurrent = (current: number | null): number => {
//   return !current || isNaN(current) ? (current = 0) : current > 100 ? 100 : current < 0 ? 0 : current;
// };

// export const getSum = (input: (number | null | undefined)[]): number => {
//   return input.reduce((x, y): number => (x || 0) + (y || 0), 0) || 0;
// };

// export const convertDate = (date: Date): string => {
//   return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
// };

// export const getNaam = (persoonsgegevensState: KlantnaamType | null, fallbackNaam: string): string => {
//   if (!persoonsgegevensState) {
//     return fallbackNaam;
//   }
//   const achternaam = `${persoonsgegevensState.achternaam}`;
//   const voorAchternaam = `${persoonsgegevensState.voorletters} ${persoonsgegevensState.achternaam}`;
//   const voorTussenAchternaam = `${persoonsgegevensState.voorletters} ${persoonsgegevensState.voorvoegsel} ${persoonsgegevensState.achternaam}`;
//   const defaultNaam = `${fallbackNaam}`;

//   if (persoonsgegevensState.achternaam && persoonsgegevensState.voorletters && persoonsgegevensState.voorvoegsel) {
//     return voorTussenAchternaam;
//   }
//   if (persoonsgegevensState.achternaam && persoonsgegevensState.voorletters && !persoonsgegevensState.voorvoegsel) {
//     return voorAchternaam;
//   }
//   if (persoonsgegevensState.achternaam && !persoonsgegevensState.voorletters && !persoonsgegevensState.voorvoegsel) {
//     return achternaam;
//   }

//   return defaultNaam;
// };

// export const keysToLowerCaseFirst = (obj: any): any => {
//   Object.keys(obj).forEach(function(key): any {
//     // only first char gets lowercased :-)
//     const k = key.charAt(0).toLowerCase() + key.slice(1);

//     if (k !== key) {
//       obj[k] = obj[key];
//       delete obj[key];
//     }
//   });
//   return obj;
// };

// export function voegApiFoutToe<Values>(formikErrors: {}, plaformApiFouten: UiError[] | null): FormikErrors<Values> {
//   if (plaformApiFouten) {
//     plaformApiFouten.forEach((element): void => {
//       if (element.field) {
//         formikErrors = setIn(formikErrors, element.field, element.error);
//       }
//     });
//   }

//   return formikErrors;
// }

type UiError = any;

export function verwijderApiFoutVoor(
  formik: {
    values: {};
    setFieldValue: (field: string, value: any) => void;
  },
  name: string
): void {
  const currentPlaformApiFouten: UiError[] | null = getIn(
    formik.values,
    "plaformApiFouten"
  );

  if (Array.isArray(currentPlaformApiFouten)) {
    const newPlaformApiFouten = currentPlaformApiFouten.filter(
      (e): boolean => e.field !== name
    );
    if (currentPlaformApiFouten.length !== newPlaformApiFouten.length) {
      formik.setFieldValue("plaformApiFouten", newPlaformApiFouten);
    }
  }
}

// export function hasValue<T>(value: T): value is Exclude<T, undefined | null> {
//   return typeof value !== "undefined" && value !== null;
// }

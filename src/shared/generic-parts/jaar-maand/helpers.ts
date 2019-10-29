import { JaarMaandInputType } from ".";

export const jaarMaandInputNaarJaarMaand = (
  input: JaarMaandInputType | null
): string => {
  if (input) {
    const jaren = input.jaren;
    const maanden = input.maanden;

    if (jaren && maanden) {
      return `${jaren} jaar en ${maanden} maanden`;
    }
    if (jaren) {
      return `${jaren} jaar`;
    }
  }
  return "";
};

export const maandenNaarJaarMaand = (inputMaanden: number): string => {
  const jaren = Math.floor(inputMaanden / 12);
  const maanden = inputMaanden % 12;

  if (jaren && maanden) {
    return `${jaren} jaar en ${maanden} maanden`;
  }
  if (jaren) {
    return `${jaren} jaar`;
  }
  return "";
};

export function jaarMaandNaarMaanden(
  periode: JaarMaandInputType | null
): string {
  // const maanden = jaarMaandInMaanden(periode);
  // if (maanden) {
  //   return `${maanden} mnd`;
  // }

  return "";
}

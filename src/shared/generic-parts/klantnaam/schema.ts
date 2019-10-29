import * as Yup from "yup";

export const klantnaamSchema = Yup.object().shape({
  klantId: Yup.string().default(""),
  achternaam: Yup.string().default(""),
  voorvoegsel: Yup.string().default(""),
  voorletters: Yup.string().default("")
});

export type KlantnaamType = Yup.InferType<typeof klantnaamSchema>;

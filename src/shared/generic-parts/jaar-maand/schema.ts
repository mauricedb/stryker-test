import * as Yup from "yup";
// import { getGeneralTextResources } from "../../utils";

export const jaarMaandInputSchema = Yup.object({
  jaren: Yup.number()
    .nullable()
    .default(null)
    .max(99)
    .min(0),
  maanden: Yup.number()
    .nullable()
    .default(null)
    .max(11)
    .min(0)
});

export type JaarMaandInputType = Yup.InferType<typeof jaarMaandInputSchema>;

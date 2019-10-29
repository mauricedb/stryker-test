// De beschikbare iconen in de applicatie.
export type IconType =
  | "aanvraag"
  | "adviesbox"
  | "analyse"
  | "app-drawer"
  | "chevron"
  | "copy"
  | "close"
  | "externallink"
  | "filter"
  | "hamburger"
  | "inventarisatie"
  | "kruis"
  | "min"
  | "pencil"
  | "pijlomhoog"
  | "pijlomlaag"
  | "plus"
  | "prullenbak"
  | "refresh"
  | "rekenmachine"
  | "resettodefault"
  | "search"
  | "scenario"
  | "specificatie"
  | "uitroepteken"
  | "viewmodal"
  | "vink"
  | "voorstel"
  | "waarschuwing";

// Mapped van: 'naam voor gebruik in code' -> naar css 'classname'.
export const IconMap = new Map<IconType, string>([
  ["aanvraag", "aanvraag_menu"],
  ["adviesbox", "adviesbox_menu"],
  ["analyse", "analyse_menu"],
  ["app-drawer", "app-drawer_app-bar"],
  ["chevron", "chevron"],
  ["copy", "copy"],
  ["close", "close"],
  ["externallink", "externallink"],
  ["filter", "filter"],
  ["hamburger", "hamburger_menu"],
  ["inventarisatie", "inventarisatie_menu"],
  ["kruis", "kruis"],
  ["min", "min_menu"],
  ["pencil", "edit"],
  ["pijlomhoog", "pijlomhoog"],
  ["pijlomlaag", "pijlomlaag"],
  ["plus", "plus_menu "],
  ["prullenbak", "trash"],
  ["refresh", "refresh"],
  ["rekenmachine", "calculator"],
  ["resettodefault", "resettodefault"],
  ["search", "search"],
  ["scenario", "scenario"],
  ["specificatie", "specification"],
  ["uitroepteken", "uitroepteken"],
  ["viewmodal", "viewmodal"],
  ["vink", "vink"],
  ["voorstel", "voorstel_menu"],
  ["waarschuwing", "waarschuwing"]
]);

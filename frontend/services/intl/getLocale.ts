import { buildMessages, FlattenedDictionary } from "./buildMessages";
import { fr } from "./fr";

export type Locale = {
  code: string;
  messages: FlattenedDictionary;
};

export const getLocale = (): Locale => {
  return {
    code: "fr",
    messages: buildMessages(fr),
  };
};

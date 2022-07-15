import keys from "lodash/keys";

type Message = string | NestedDictionary;
interface NestedDictionary {
  [x: string]: Message;
}

export interface FlattenedDictionary {
  [x: string]: string;
}

export const buildMessages = (
  nestedMessages: NestedDictionary,
  prefix = ""
): FlattenedDictionary =>
  keys(nestedMessages).reduce((messages: FlattenedDictionary, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      messages[prefixedKey] = value;
    } else if (value !== undefined) {
      Object.assign(messages, buildMessages(value, prefixedKey));
    }

    return messages;
  }, {});

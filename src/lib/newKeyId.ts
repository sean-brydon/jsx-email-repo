import { customAlphabet } from "nanoid";

export const nanoid = customAlphabet(
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
);

const prefixes = {
  apiProduction: "cal_live",
  secret: "cal_sk",
  apiTest: "cal_test",
  test: "test", // <-- for tests only
} as const;

export function newKeyId(prefix: keyof typeof prefixes, length = 24): string {
  return [prefixes[prefix], nanoid(length)].join("_");
}

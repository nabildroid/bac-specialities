import { Option } from "./models";

export function calcDistance(a: number[], b: number[]) {
  if (a.length != b.length)
    throw new Error("the demensions are not the same between A, B");

  const sum = a.reduce((acc, _, i) => acc + Math.pow(a[i] - b[i], 2), 0);

  const distance = Math.sqrt(sum);

  return distance;
}

export function OptionName(option: Option) {
  return option.path.split("/")[1];
}

export function OptionType(option: Option) {
  return option.path.split("/")[0];
}

export function cn(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

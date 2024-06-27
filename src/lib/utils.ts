import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getAllBillionaires() {
  const response = await fetch("https://billions-api.nomadcoders.workers.dev/");
  const data = await response.json();
  return data;
}

export async function getBillionaireById(id: string) {
  const response = await fetch(
    `https://billions-api.nomadcoders.workers.dev/person/${id}`
  );

  const data = await response.json();
  return data;
}

export const convertMillionToBillion = (millionValue: number): number => {
  const billionValue = millionValue / 1000;
  return Math.round((billionValue * 10) / 10);
};

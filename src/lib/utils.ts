import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getAllBillionaires() {
  const response = await fetch("https://billions-api.nomadcoders.workers.dev/");
  const data = await response.json();
  return data;
}

export async function getBillionaireById(id: string) {
  try {
    const response = await axios.get(
      `https://billions-api.nomadcoders.workers.dev/person/${id}`
    );

    // 응답 데이터 확인
    // console.log("Response data:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
}

export const convertMillionToBillion = (millionValue: number): number => {
  const billionValue = millionValue / 1000;
  return Math.round((billionValue * 10) / 10);
};

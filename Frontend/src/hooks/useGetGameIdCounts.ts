import { useCall } from "@usedapp/core";
import { useTreasuryHuntContract } from "./useContract";

export const useGetGameIdCounts = () => {
  const contract = useTreasuryHuntContract();
  const { value, error } =
    useCall({
      contract, // instance of called contract
      method: "gameIdCounter", // Method to be called
      args: [], // Method arguments - address to be checked for balance
    }) ?? {};
  if (error) {
    console.error(error.message);
    return 0;
  }

  return value?.[0]?.toString() ? Number(value?.[0]?.toString()) - 1 : 0;
};

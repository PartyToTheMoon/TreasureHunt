import React, { useMemo } from "react";
import { useCall, useEthers, ThunderCoreTestnet } from "@usedapp/core";
import TreasuryHuntABI from "@/abis/TreasuryHunt.json";
import { utils } from "ethers";
import { Contract, ContractInterface } from "@ethersproject/contracts";
import ADDRESSES from "@/constants/addresses";
import { TypedContract } from "@usedapp/core/dist/esm/src/model";
import { TreasuryHunt } from "@/abis/types/TreasuryHunt";

export function useContract<T extends Contract>(
  address: string,
  ABI: ContractInterface
): T {
  return useMemo(() => {
    return new Contract(address, ABI);
  }, [address, ABI]) as T;
}

export const useTreasuryHuntContract = () => {
  const { chainId } = useEthers();
  const address = ADDRESSES[chainId ?? ThunderCoreTestnet.chainId];
  return useContract<TreasuryHunt>(
    address.TREASURY_HUNT,
    new utils.Interface(TreasuryHuntABI.abi)
  );
};
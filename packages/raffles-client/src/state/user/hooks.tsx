import { ConnectionType } from 'config/web3';
import { useAppSelector } from 'state/hooks';

export function useSelectedWallet(): ConnectionType | undefined {
  return useAppSelector((state) => state.user.selectedWallet);
}

import { Chain } from 'wagmi';

const bscExplorer = { name: 'BscScan', url: 'https://bscscan.com' };

export const bsc: Chain = {
  id: 56,
  name: 'BNB Smart Chain',
  network: 'bsc',
  rpcUrls: {
    public: 'https://bsc-dataseed1.binance.org',
    default: 'https://bsc-dataseed1.binance.org',
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  nativeCurrency: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
};

export enum SupportedChainId {
  POLYGON = 137,
  MUMBAI = 80001,
  ETHEREUM = 1,
  GOERLI = 5,
  BINANCE = 56,
}

export const DEFAULT_CHAIN_ID =
  process.env.REACT_APP_ENV === 'production'
    ? SupportedChainId.POLYGON
    : SupportedChainId.MUMBAI;

export const CHAIN_IDS_TO_NAMES = {
  [SupportedChainId.POLYGON]: 'polygon',
  [SupportedChainId.MUMBAI]: 'polygon_mumbai',
  [SupportedChainId.ETHEREUM]: 'mainnet',
  [SupportedChainId.GOERLI]: 'goerli',
  [SupportedChainId.BINANCE]: 'binance',
};

export function isSupportedChain(
  chainId: number | null | undefined,
): chainId is SupportedChainId {
  return !!chainId && !!SupportedChainId[chainId];
}

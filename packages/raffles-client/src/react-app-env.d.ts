/// <reference types="react-scripts" />

import ThemeZig from '@zignaly-open/ui/lib/theme/theme';
import { MetaMaskInpageProvider } from '@metamask/providers';

declare module '*.svg' {
  /**
   * Use `any` to avoid conflicts with
   * `@svgr/webpack` plugin or
   * `babel-plugin-inline-react-svg` plugin.
   */
  const content: any;

  export default content;
}

import type { PaletteOptions, Palette } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomPalette {
    prettyPink: PaletteColorOptions;
    greedyGreen: PaletteColorOptions;
  }
  interface Palette extends CustomPalette { }
  interface PaletteOptions extends CustomPalette { }
}

declare module '@mui/material/styles/createTheme' {
  interface Theme extends ThemeZig { }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    prettyPink: true;
    greedyGreen: true;
  }
}

declare global {
  interface EthereumProvider {
    isCoinbaseWallet?: true;
    isMetaMask?: true;
    providers?: any[];
    request?: (...args: any[]) => Promise<void>;
    on?: (...args: any[]) => void;
    removeListener?: (...args: any[]) => void;
    autoRefreshOnNetworkChange?: boolean;
  }

  interface Window {
    ethereum?: EthereumProvider;
    subscribersSiteId: string;
  }
}

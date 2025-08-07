declare global {
  interface Window {
    freighterApi?: {
      isAllowed(): Promise<boolean>;
      requestAccess(): Promise<string>;
      signTransaction(xdr: string, opts?: any): Promise<string>;
      signBlob(blob: string, opts?: any): Promise<string>;
      getNetwork(): Promise<string>;
      getNetworkDetails(): Promise<any>;
      isConnected(): Promise<boolean>;
    };
  }
}

export {}; 
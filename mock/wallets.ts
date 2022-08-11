interface Wallet {
  name: string;
  img: string;
  disabled: boolean;
  action: string;
}

export const wallets: Wallet[] = [
  {
    name: "Metamask",
    img: "/svg/wallet-metamask.svg",
    disabled: false,
    action: "injected",
  },
  {
    name: "Wallet Connect",
    img: "/svg/wallet-connect.svg",
    disabled: false,
    action: "walletconnect",
  },
  {
    name: "Fortmatic",
    img: "/svg/wallet-formatic.svg",
    disabled: false,
    action: "fortmatic",
  },
  {
    name: "Portis",
    img: "/svg/wallet-portis.svg",
    disabled: false,
    action: "portis",
  },
  {
    name: "Torus",
    img: "/svg/wallet-torus.svg",
    disabled: false,
    action: "torus",
  },
  {
    name: "MEW",
    img: "/svg/wallet-mew.svg",
    disabled: false,
    action: "mewconnect",
  },
  {
    name: "BSC wallet",
    img: "/svg/wallet-bsc.svg",
    disabled: true,
    action: "bscwallet",
  },

  {
    name: "Trezor",
    img: "/svg/wallet-trezor.svg",
    disabled: true,
    action: "trezor",
  },
  {
    name: "Ledger",
    img: "/svg/wallet-ledger.svg",
    disabled: true,
    action: "ledger",
  },
];

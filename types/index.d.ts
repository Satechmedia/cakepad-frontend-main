// modules
declare module "react-dropd";

interface Project {
  id: number;
  userId: string;
  projectName: string;
  description: string;
  slug: string;
  logo: string;
  tokenAddress: string;
  buyingToken: string;
  rewardToken: string;
  distChain: number;
  purchaseChain: number;
  sellingPrice: number;
  listingPrice: number;
  hardCap: number;
  poolAllocation: number;
  projectPhase: "staking";
  schedule: string;
  tokenomics: string;
  twitter: string;
  discord: string;
  github: string;
  website: string;
  telegram: string;
  projectStatus: string;
  createdAt: string;
  updatedAt: string;
  // -- tokenaddresss
  // -- schedule time design
  // -- total supply
  // -- pool supply
  // -- discord
}

interface Projectpayload {
  projectName?: string | null;
  description?: string | null;
  buyingToken?: string | null;
  rewardToken?: string | null;
  distChain?: number | null;
  purchaseChain?: number | null;
  sellingPrice?: number | null;
  listingPrice?: number | null;
  hardCap?: number;
  poolAllocation?: number | null;
  projectPhase?: string | null;
  projectStatus?: string | null;
  twitter?: string | null;
  discord?: string | null;
  github?: string | null;
  website?: string | null;
  telegram?: string | null;
  tokenomics?: string | null;
  schedule?: string | null;
}

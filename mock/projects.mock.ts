export interface Projectt {
  id: string;
  title: string;
  description: string;
  icon: string;
  socials: {
    facebook: string;
    linkedin: string;
    twitter: string;
  };
  network: string;
  cap: number;
  swapRate: string;
  access: string;
  isGold: boolean;
  participants: number;
  progress: number;
}

export const projects: Projectt[] = [
  {
    id: "1",
    title: "PulsePad",
    description: "PulsePad - The first IDO platform for pulse Chain",
    icon: "/svg/ido-two.svg",
    socials: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
    network: "BUSD",
    cap: 125000,
    swapRate: "1 BUSD = 1000 PLSPAD",
    access: "Private",
    isGold: false,
    participants: 1732,
    progress: 98.6,
  },

  {
    id: "1",
    title: "PulsePad",
    description: "PulsePad - The first IDO platform for pulse Chain",
    icon: "/svg/ido-one.svg",
    socials: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
    network: "BUSD",
    cap: 125000,
    swapRate: "1 BUSD = 1000 PLSPAD",
    access: "Private",
    isGold: true,
    participants: 1732,
    progress: 98.6,
  },

  {
    id: "1",
    title: "PulsePad",
    description: "PulsePad - The first IDO platform for pulse Chain",
    icon: "/svg/ido-one.svg",
    socials: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
    network: "BUSD",
    cap: 125000,
    swapRate: "1 BUSD = 1000 PLSPAD",
    access: "Private",
    isGold: false,
    participants: 1732,
    progress: 98.6,
  },

  {
    id: "1",
    title: "PulsePad",
    description: "PulsePad - The first IDO platform for pulse Chain",
    icon: "/svg/ido-two.svg",
    socials: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
    network: "BUSD",
    cap: 125000,
    swapRate: "1 BUSD = 1000 PLSPAD",
    access: "Private",
    isGold: true,
    participants: 1732,
    progress: 98.6,
  },
];

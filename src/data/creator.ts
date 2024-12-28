export interface Creator {
  creatorName: string;
  fullName: string;
  designation: string;
  avatarURL: string;
  socialsURL: {
    github: string;
    linkedIn: string;
  };
}

export const creators: Creator[] = [
  {
    creatorName: "kunal",
    fullName: "Kunal P V",
    designation: "Software Developer",
    avatarURL: "https://github.com/KunalPV.png",
    socialsURL: {
      github: "https://github.com/KunalPV",
      linkedIn: "https://www.linkedin.com/in/kunal-pv/",
    }
  },
  {
    creatorName: "nishchint",
    fullName: "Nishchint Makode",
    designation: "Software Developer",
    avatarURL: "https://github.com/nishchintmakode.png",
    socialsURL: {
      github: "https://github.com/nishchintmakode",
      linkedIn: "https://www.linkedin.com/in/nishchintmakode/",
    }
  },
];
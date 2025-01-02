export interface SocialsURL {
  github: string;
  linkedIn: string;
}

export interface Creator {
  creatorName: string;
  fullName: string;
  designation: string;
  avatarURL: string;
  socialsURL: SocialsURL;
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


/**
 * Validate a given Creator object.
 * @param creator - The Creator object to validate.
 * @returns True if valid, otherwise false.
 */
export const isValidCreator = (creator: Creator): boolean => {
  if (
    !creator.creatorName ||
    !creator.fullName ||
    !creator.designation ||
    !creator.avatarURL ||
    !creator.socialsURL.github ||
    !creator.socialsURL.linkedIn
  ) {
    console.warn("Invalid creator data:", creator);
    return false;
  }
  return true;
};

/**
 * Validate the creators array.
 * @param creatorsArray - The array of creators to validate.
 * @returns True if all creators are valid, otherwise false.
 */
export const validateCreators = (creatorsArray: Creator[]): boolean => {
  return creatorsArray.every(isValidCreator);
};

// Validate the creators at runtime and log warnings for invalid data
if (!validateCreators(creators)) {
  console.error("One or more creators have invalid data.");
}
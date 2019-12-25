// eslint-disable-next-line no-undef
export const Colors = {
  Golden: {
    core: "#F5AD32",
    tint75Percent: "#DAA520"
  },
  Black: {
    core: "#000000",
    tint75Percent: "#141414",
    tint50Percent: "#404040",
    tint25Percent: "#808080"
  },
  White: {
    core: "#FFFFFF",
    tint75Percent: "#F7F5F3",
    tint50Percent: "#F7F7F7"
  },
  Concrete: {
    core: "#B1B2B4",
    tint75Percent: "#C5C5C7",
    tint50Percent: "#D8D9D9",
    tint25Percent: "#EBECEC"
  },
  Orange: {
    core: "#E95926"
  },
  Blue: {
    core: "#2966FF"
  }
};

const { Black, White, Blue, Concrete } = Colors;

export const ComponentColors = {
  ButtonBackground: Blue.core,
  TabActiveColor: Blue.core,
  TextColorDark: Black.tint75Percent,
  TextColorLight: White.core,
  Divider: Concrete.tint50Percent
};

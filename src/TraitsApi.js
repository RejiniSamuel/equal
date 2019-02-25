// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const TraitsAPI = {
  traits: [
    {
      id: 1,
      traitId: "a1",
      isSelected: false,
      name: "Decision Making",
      leftDesc: "Emotional",
      rightDesc: "Analytical"
    },
    {
      id: 2,
      traitId: "a2",
      isSelected: false,
      name: "Mental Condition",
      leftDesc: "Extreme Positive",
      rightDesc: "Extreme Negative"
    },
    {
      id: 3,
      traitId: "a3",
      isSelected: false,
      name: "Triggered By",
      leftDesc: "Extreme Positive",
      rightDesc: "Extreme Negative"
    },
    {
      id: 4,
      traitId: "a4",
      isSelected: false,
      name: "Default Body Position",
      leftDesc: "Extreme Closed",
      rightDesc: "Extreme Open"
    },
    {
      id: 5,
      traitId: "a5",
      isSelected: false,
      name: "Body Reaction",
      leftDesc: "Extreme Positve",
      rightDesc: "Extreme Negative"
    },
    {
      id: 6,
      traitId: "a6",
      isSelected: false,
      name: "Physical Communication",
      leftDesc: "Small and Imperceptible",
      rightDesc: "Giant and Grandiose"
    },
    {
      id: 7,
      traitId: "a7",
      isSelected: false,
      name: "Personal Space",
      leftDesc: "Small Bubble",
      rightDesc: "Giant Bubble"
    },
    {
      id: 8,
      traitId: "a8",
      isSelected: false,
      name: "Touch Value",
      leftDesc: "Extreme Positve",
      rightDesc: "Extreme Negative"
    },
    {
      id: 9,
      traitId: "a9",
      isSelected: false,
      name: "Body Condition",
      leftDesc: "Extreme Positve",
      rightDesc: "Extreme Negative"
    },
    {
      id: 10,
      traitId: "a10",
      isSelected: false,
      name: "Subtext",
      leftDesc: "Aligned with Words",
      rightDesc: "Opposite of Words"
    },
    {
      id: 11,
      traitId: "a11",
      isSelected: false,
      name: "Soul Condition",
      leftDesc: "Extreme Positve",
      rightDesc: "Extreme Negative"
    },
    {
      id: 12,
      traitId: "a12",
      isSelected: false,
      name: "Silence",
      leftDesc: "No Speaking",
      rightDesc: "No Silence"
    },
    {
      id: 13,
      traitId: "a13",
      isSelected: false,
      name: "Articulation",
      leftDesc: "No Articulation",
      rightDesc: "Overly Articulation"
    },
    {
      id: 14,
      traitId: "a14",
      isSelected: false,
      name: "Pronunciation",
      leftDesc: "Mis-pronounced",
      rightDesc: "Overly Pronounced"
    },
    {
      id: 15,
      traitId: "a15",
      isSelected: false,
      name: "Emotional Sounds",
      leftDesc: "Extreme Positive",
      rightDesc: "Extreme"
    },
    {
      id: 16,
      traitId: "a16",
      isSelected: false,
      name: "Vocal Pitch",
      leftDesc: "Low Pitch",
      rightDesc: "High Pitch"
    },
    {
      id: 17,
      traitId: "a17",
      isSelected: false,
      name: "Vocal Inflection",
      leftDesc: "Monotone",
      rightDesc: "Heavy Inflection"
    },
    {
      id: 18,
      traitId: "a18",
      isSelected: false,
      name: "Vocal Quality",
      leftDesc: "Terrible Quality",
      rightDesc: "Perfect Quality"
    },
    {
      id: 19,
      traitId: "a19",
      isSelected: false,
      name: "Vocal Rate",
      leftDesc: "Slow Speech",
      rightDesc: "Rapid Speed"
    },
    {
      id: 20,
      traitId: "a20",
      isSelected: false,
      name: "Vocal Volume",
      leftDesc: "Quiet",
      rightDesc: "Loud"
    }
  ],
  all: function() {
    return this.traits;
  },
  get: function(traitId) {
    const isTrait = t => t.traitId === traitId;
    return this.traits.find(isTrait);
  }
};

export default TraitsAPI;

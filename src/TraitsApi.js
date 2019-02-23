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

import React from "react";
import TraitsAPI from "../TraitsApi";
import { Link } from "react-router-dom";

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Trait = props => {
  const trait = TraitsAPI.get(props.match.params.traitId);
  if (!trait) {
    return <div>Sorry, but the trait was not found</div>;
  }
  return (
    <div>
      <div className="flex bg-purple center h-12 o-80 tc br3 pa1 ma3 grow shadow-5 ba b--black-5 lh-copy measure f6 black-100">
        <div className="w-80">
          <h3 className="tc white tl ml3">{`    ${trait.leftDesc} ,${
            trait.name
          }, ${trait.rightDesc} `}</h3>
        </div>
      </div>
      <Link to="/roster">Back</Link>
    </div>
  );
};

export default Trait;

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.

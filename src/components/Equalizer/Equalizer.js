import React from "react";
import Example from "../Checkbox/modaltry";

const Equalizer = ({ selectedTraits }) => {
  return (
    <div>
      TEST
      <Example />
      <ul>
        {selectedTraits.map((element, i) => {
          return (
            <li
              className="w-95 bg-purple o-80 br3 pa2 ma3 shadow-5 "
              key={selectedTraits[i]}
            >
              {element[0]} played at {element[1]} in {element[2]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Equalizer;

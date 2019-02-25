import React from "react";
//import Modal from "react-awesome-modal";
import Button from "@material-ui/core/Button";
const Equalizer = ({ selectedTraits, closeEq }) => {
  return (
    <section>
      <div>
        <ul>
          {selectedTraits.map((element, i) => {
            return (
              <li
                className="w-95 bg-purple o-80 br3 pa2 ma3 shadow-5 "
                key={selectedTraits[i]}
              >
                "{element[0]}" played at "{element[1]}" in "{element[2]}"
              </li>
            );
          })}
        </ul>

        <Button variant="contained" color="primary" onClick={closeEq}>
          RETURN
        </Button>
      </div>
    </section>
    // <Examples selectedTraits={this.state.selectedTraits} submitted={false} />
  );
};

export default Equalizer;

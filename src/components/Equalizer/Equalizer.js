import React from "react";
//import Modal from "react-awesome-modal";
import Button from "@material-ui/core/Button";
const Equalizer = ({ selectedTraits, closeEq }) => {
  return (
    <section>
      <div className="appscroll">
        <h2 className="tc center">Character Equalizer Results</h2>
        <div id="listDiv" className="scroller">
          <ul className="scroller">
            {selectedTraits.map((element, i) => {
              return (
                <li
                  className="item w-95 bg-light-purple o-80 br3 pa2 ma3 shadow-5 "
                  key={selectedTraits[i]}
                >
                  <div className="item">
                    "{element[0]}" played at "{element[1]}" in "{element[2]}"
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <p />
        </div>
        <div className=" center">
          <Button variant="contained" color="primary" onClick={closeEq}>
            RETURN
          </Button>
        </div>
      </div>
    </section>
    // <Examples selectedTraits={this.state.selectedTraits} submitted={false} />
  );
};

export default Equalizer;

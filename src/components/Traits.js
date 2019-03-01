import React from "react";
import Button from "@material-ui/core/Button";
import TraitsAPI from "../TraitsApi";

import Checkbox from "../components/Checkbox/Checkbox";
//import Examples from "../components/Checkbox/modaltry";
//import Modal from "react-awesome-modal";

//import { Link } from "react-router-dom";

const Traits = ({ selectedTraits }) => {
  return (
    <div>
      <h2>Traits</h2>

      <form onSubmit={onsubmit}>
        <div className="appscroll">
          <div id="listDiv" className="scroller">
            <ul>
              {TraitsAPI.all().map(t => (
                <li key={t.traitId}>
                  <div className="w-95 bg-purple o-80 br3 pa2 ma3 shadow-5 ">
                    <div className="item">
                      {
                        <Checkbox
                          label={t.name}
                          isSelected={this.state.checkboxes[false]}
                          onCheckboxChange={this.handleCheckboxChange}
                          key={t.traitId}
                        />
                      }
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="form-group mt-2">
            <Button variant="contained" color="primary" type="submit">
              RUN EQUALIZER
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Traits;

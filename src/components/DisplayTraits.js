import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TraitsAPI from "../TraitsApi";

import Checkbox from "../components/Checkbox/Checkbox";
//import Traits from "./Traits";
import Equalizer from "../components/Equalizer/Equalizer";
//import Examples from "../components/Checkbox/modaltry";
//import Modal from "react-awesome-modal";

//import { Link } from "react-router-dom";
let _ = require("underscore");
// The FullRoster iterates over all of the players and creates
// a link to their profile page.

// *********************************************TRY AND HIDE TRAITS AFTER*****************************************************************
const OPTIONS = [];

class DisplayTraits extends Component {
  constructor(props) {
    super(props);
    this.closeEqualizer = this.closeEqualizer.bind(this);
    this.state = {
      selectedTraits: [],
      submitted: false,
      visible: false,
      traits: TraitsAPI,
      checkboxes: OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: false
        }),
        {}
      )
    };
  }

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
    this.setState(prevTraits => ({
      traits: {
        ...prevTraits.traits,
        [name]: !prevTraits.traits[name]
      }
    }));
    // console.log(this.state.traits);
    //console.log( this.state.traits.traits.find(f => {return 1;}));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    const selectedTraits = [];
    //console.log(selectedTraits);
    //console.log(this.state.checkboxes);
    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        let fullline = _.where(this.state.traits.traits, {
          name: checkbox
        });
        // console.log(fullline);
        let randomNum = Math.floor(Math.random() * 11);
        randomNum *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
        if (randomNum === 0) {
          randomNum = randomNum + 1;
        }
        // randomNum = randomNum === -0 ? randomNum : randomNum - 1;
        //console.log(randomNum);
        let selName = fullline[0].name;
        let desc = "";
        if (randomNum > 0) {
          desc = fullline[0].rightDesc;
        } else {
          desc = fullline[0].leftDesc;
        }
        //console.log(desc);
        selectedTraits.push([selName, randomNum, desc]);

        //console.log(_.intersection(this.state.traits, selectedTraits));
      });
    this.setState({ submitted: true });
    this.setState({ selectedTraits: selectedTraits });
    this.setState({
      visible: true,
      submitted: true
    });
    //console.log(selectedTraits);
  };

  closeEqualizer = () => {
    //console.log("Before " + this.state.selectedTraits);
    // console.log("Before c" + this.state.checkboxes);
    this.setState({
      selectedTraits: [],
      checkboxes: [],
      submitted: false
    });

    // console.log("After " + this.state.selectedTraits);
    // console.log("After c" + this.state.checkboxes);
  };

  renderEqualizer() {
    return (
      <section>
        <Equalizer
          visible={this.state.visible}
          submitted={true}
          selectedTraits={this.state.selectedTraits}
          closeEq={this.closeEqualizer}
        />
      </section>
      // <Examples selectedTraits={this.state.selectedTraits} submitted={false} />
    );
  }

  render() {
    let showTraits = null;
    if (!this.state.submitted) {
      showTraits = (
        <div className="appscroll">
          <h2 className="tc center">Karwisch Character Equalizer</h2>
          <form onSubmit={this.handleFormSubmit}>
            <div id="listDiv" className="scroller">
              <ul>
                {TraitsAPI.all().map(t => (
                  <li key={t.traitId}>
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
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p />
            </div>
            <div className="form-group mt-2 center">
              <Button variant="contained" color="primary" type="submit">
                RUN EQUALIZER
              </Button>
            </div>
          </form>
        </div>
      );
    }
    return (
      <div>
        <div>{showTraits}</div>
        {this.state.submitted && this.renderEqualizer()}
      </div>
    );
  }
}

export default DisplayTraits;
/*
 <div className={`bg-${t.id} black w-20 pa3 br3 ma1'`}>
                    <h3>{p.licExpDate}</h3>
              </div> */
/*          <Link to={`/roster/${t.traitId}`}>
            {" "}

                      </Link> */
//grow
/*
<input
  type="button"
  className="f4 grow no-underline br-pill ph3 pv2 mb2 dib black bg-dark-blue"
  value="Open Character Equalizer"
  onClick={() => this.openModal()}
/> */

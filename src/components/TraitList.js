import React, { Component } from "react";

import TraitsAPI from "../TraitsApi";

import Checkbox from "../components/Checkbox/Checkbox";
//import Equalizer from "../components/Equalizer/Equalizer";
//import Examples from "../components/Checkbox/modaltry";
import Modal from "react-awesome-modal";

//import { Link } from "react-router-dom";
let _ = require("underscore");
// The FullRoster iterates over all of the players and creates
// a link to their profile page.

// *********************************************TRY AND HIDE TRAITS AFTER*****************************************************************
const OPTIONS = [];

class Traitlist extends Component {
  state = {
    selectedTraits: {},
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

  /*  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      console.log(
        "We're here " + isSelected + " " + this.state.checkboxes.isSelected
      );
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true); */

  // deselectAll = () => this.selectAllCheckboxes(false);

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
    //console.log(selectedTraits);
  };

  /*   createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  ); */

  //createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  openModal() {
    this.setState({
      visible: true,
      submitted: true
    });
    //   console.log("In traillist open modal fxn " + this.state.submitted);
  }

  closeModal() {
    this.setState({
      visible: false,
      submitted: false
    });
    //  console.log("In traillist close modal fxn " + this.state.submitted);
  }

  renderEqualizer() {
    return (
      <section>
        <input
          type="button"
          className="f4 grow no-underline br-pill ph3 pv2 mb2 dib black bg-dark-blue"
          value="Open Character Equalizer"
          onClick={() => this.openModal()}
        />
        <Modal
          visible={this.state.visible}
          width="80%"
          height="80%"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div>
            <ul>
              {this.state.selectedTraits.map((element, i) => {
                return (
                  <li
                    className="w-95 bg-purple o-80 br3 pa2 ma3 shadow-5 "
                    key={this.state.selectedTraits[i]}
                  >
                    "{element[0]}" played at "{element[1]}" in "{element[2]}"
                  </li>
                );
              })}
            </ul>

            <input
              type="button"
              className="f4 grow no-underline br-pill ph3 pv2 mb2 dib black bg-dark-grey"
              value="RETURN"
              onClick={() => this.closeModal()}
            />
          </div>
        </Modal>
      </section>
      // <Examples selectedTraits={this.state.selectedTraits} submitted={false} />
    );
  }

  render() {
    return (
      <div className="tc f3">
        <h2>Traits</h2>

        <form onSubmit={this.handleFormSubmit}>
          <div id="listDiv" className="center">
            <ul>
              {TraitsAPI.all().map(t => (
                <li className="f4" key={t.traitId}>
                  <div className="w-95 bg-purple o-80 br3 pa2 ma3 shadow-5 ">
                    <div>
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
            <button
              type="submit"
              className="f4 grow no-underline br-pill ph3 pv2 mb2 dib black bg-dark-blue"
            >
              RUN EQUALIZER
            </button>
          </div>
        </form>
        {this.state.submitted && this.renderEqualizer()}
      </div>
    );
  }
}

export default Traitlist;
/* 
 <div className={`bg-${t.id} black w-20 pa3 br3 ma1'`}>
                    <h3>{p.licExpDate}</h3>
              </div> */
/*          <Link to={`/roster/${t.traitId}`}>
            {" "}
            
                      </Link> */
//grow

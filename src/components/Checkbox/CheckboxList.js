import React from "react";
//import PropTypes from "prop-types";
//import { withStyles } from "@material-ui/core/styles";
//import List from "@material-ui/core/List";
//import ListItem from "@material-ui/core/ListItem";
//import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
//import ListItemText from "@material-ui/core/ListItemText";
//import Checkbox from "@material-ui/core/Checkbox";
//import IconButton from "@material-ui/core/IconButton";
//import CommentIcon from "@material-ui/icons/Comment";
import TraitsAPI from "../../TraitsApi";

/* const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 800,
    color: "white"
    //backgroundColor: theme.palette.background.paper
  }
}); */

class CheckboxList extends React.Component {
  state = {
    checked: [],
    traits: TraitsAPI
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  render() {
    // const { classes } = this.props;
    console.log(this.state.checked);
    return (
      <div className="appscroll center">
        <ul>
          {TraitsAPI.all().map(value => (
            <li
              key={value.traitId}
              className="scroller tc w-90 bg-purple br3 pa3 ma1 shadow-5 "
              onClick={this.handleToggle(value)}
            >
              <input
                type="checkbox"
                className="largerCheckbox"
                checked={this.state.checked.indexOf(value) !== -1}
                tabIndex={-1}
              />
              <p className="tc white ">{`${value.name}`}</p>
            </li>
          ))}
        </ul>
        <div />
      </div>
    );
  }
}

/* CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired
}; */

export default CheckboxList;
/*              
              <ListItemSecondaryAction>
                <IconButton aria-label="Comments" />
              </ListItemSecondaryAction> */

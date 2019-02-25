import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
//import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
//import Avatar from "@material-ui/core/Avatar";
import TraitsAPI from "../../TraitsApi";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class CheckboxListSecondary extends React.Component {
  state = {
    checked: [1],
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
    const { classes } = this.props;

    return (
      <List dense className={classes.root}>
        {TraitsAPI.all().map(value => (
          <ListItem key={value.traitId} button>
            <ListItemText primary={`${value.name}`} />
            <ListItemSecondaryAction>
              <Checkbox
                onChange={this.handleToggle(value)}
                checked={this.state.checked.indexOf(value) !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

CheckboxListSecondary.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckboxListSecondary);

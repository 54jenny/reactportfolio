import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class RaisedButtons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      num : [],
      j : ""
    }
  }
  doSomething() {
    var obj = {"name" : "j" , "value" : 100 }
    var n = this.state.num
    n.push(obj)
    this.setState({num : n})
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="raised" className={classes.button}>
          Default
       </Button>
        <Button variant="raised" color="primary" className={classes.button}>
          Primary
       </Button>
        <Button variant="raised" color="secondary" className={classes.button}>
          Secondary
       </Button>
       {
         
         this.state.num.map((item)=>{
           return (<div key={item.name}>{item.value}</div>)
         })
       }
        <Button variant="raised" color="secondary" onClick={this.doSomething.bind(this)} className={classes.button}>
         
         CUSTOM
       </Button>
        <input
          accept="image/*"
          className={classes.input}
          id="raised-button-file"
          multiple
          type="file"
        />
        <label htmlFor="raised-button-file">
          <Button variant="raised" component="span" className={classes.button}>
            Upload
         </Button>
        </label>
      </div>
    );
  }
}

RaisedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RaisedButtons);

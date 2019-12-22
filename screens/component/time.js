import React, { Component } from 'react';
import { View, } from 'react-native';
import {Text} from 'native-base';
import moment from 'moment';
class time extends Component {
  constructor(props) {
    super(props);
    this.date=props.time;
  }

  render() {
      const time=moment(this.date||moment.now()).fromNow();
    return (
        <Text note style={{marginHorizontal:10,}}>{time}</Text>
    );
  }
}

export default time;

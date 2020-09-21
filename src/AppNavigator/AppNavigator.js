import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import NavigationService from './NavigationService';
import MainNavigator from './MainNavigator';
import _ from 'lodash';
class AppNavigator extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MainNavigator
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);

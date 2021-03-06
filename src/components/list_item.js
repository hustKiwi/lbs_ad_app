import React from 'react';
import styled from 'styled-components/native';

import Ionicons from './ionicons';
import * as consts from '../constants';


const Item = styled.View`
  background-color: ${consts.WHITE};
  padding-vertical: 10;
  padding-horizontal: 10;
  border-bottom-color: ${consts.LIGHTER_GREY};
  border-bottom-width: 1;
  flex-direction: row;
`;

export default class ListItem extends React.Component {
  setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    const { props } = this;

    return (
      <Item
        ref={(ref) => { this._root = ref; }}
        {...props}
      >
        {props.children}
        <Ionicons color={consts.LIGHT_GREY} />
      </Item>
    );
  }
}

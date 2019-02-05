import React, { Component } from 'react'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class SideDrawer = (props) => {

    return (
      <Drawer
        anchor='right'
        open={props.open}
        onClose={ ()=> }
      >
        drawer
      </Drawer>
    )

}

export default SideDrawer;
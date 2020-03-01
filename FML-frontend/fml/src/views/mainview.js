import React, { Component } from 'react'
import {
  Accordion,
  Header,
  Icon,
  Grid,
  Button,
  Segment,
  Container,
  Divider
} from 'semantic-ui-react'
import axios from 'axios'

import '../styles/mainview.css'

import Queue from '../components/queue'
import NavBar from '../components/navbar'
import Player from '../components/player'

class MainView extends Component {
  render () {
    return (
      <div className='mainWrapper'>
        <NavBar />

        <Grid
          columns={3}
          stackable
          textAlign='center'
          stretched
          className='parentGrid'
          padded='vertically'
        >
          <Grid.Row verticalAlign='middle' stretched>
            <Grid.Column stretched width={4}>
              Queue
            </Grid.Column>

            <Grid.Column
              stretched
              width={8}
              textAlign='center'
              className='childGrid'
            >
              <Player />
            </Grid.Column>

            <Grid.Column
              stretched
              width={4}
              textAlign='center'
              className='childGrid'
            >
              <Queue />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default MainView

import React, { Component } from 'react'
import {
  Menu,
  Dropdown,
  Icon,
  List,
  Image,
  Segment,
  Header,
  Container,
  Card,
  Item
} from 'semantic-ui-react'
import { ReactSortable } from 'react-sortablejs'

import { connect } from 'react-redux'

import { urlImage } from '../utils/urls'

class Queue extends Component {
  constructor (props) {
    super(props)

    this.state = {
      songList: []
    }
  }

  componentDidMount () {
    this.setState({ songList: this.props.songList })
  }

  componentDidUpdate (prevProps) {
    if (this.props.songList !== prevProps.songList) {
      this.setState({ songList: this.props.songList })
    }
  }

  render () {
    const { songList } = this.state

    return (
      <Container>
        <ReactSortable
          list={songList}
          setList={newState => this.setState({ songList: newState })}
        >
          {songList.map(song => (
            <Item>
              <Item.Image size='tiny' src={urlImage(song.id)} />

              <Item.Content verticalAlign='middle'>
                <Icon name='like' />
                <Item.Header>{song.title}</Item.Header>
              </Item.Content>
            </Item>
          ))}
        </ReactSortable>
      </Container>
    )
  }
}

function mapStateToProps (state) {
  return {
    songList: state.songList
  }
}

export default connect(mapStateToProps)(Queue)

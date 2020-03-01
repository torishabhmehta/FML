import React, { Component } from 'react'
import { Icon, Segment, Button, Grid, Input } from 'semantic-ui-react'
import { Slider } from 'react-semantic-ui-range'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'

import { addNewSong } from '../actions'
import { urlVideo } from '../utils/urls'
import '../styles/player.css'

class Player extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: '',
      timeTag: '',
      muted: false,
      isPlaying: false,
      paused: false,
      timeTag: 0,
      videoID: ''
    }
  }

  componentWillMount () {
    if (this.state.id === '') {
      this.setState({ isPlaying: false })
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.playingVideo !== prevProps.playingVideo) {
      this.setState({
        videoID: this.props.playingVideo.id,
        videoURL: urlVideo(this.props.playingVideo.id),
        videoTitle: this.props.playingVideo.title,
        isPlaying: true
      })
    }
  }

  handlePlayPause = e => {
    this.setState({ paused: !this.state.paused })
  }

  handleMute = e => {
    this.setState({ muted: !this.state.muted })
  }

  onProgress = state => {
    this.setState({ timeTag: state.played })
  }

  ref = player => {
    this.player = player
  }

  handleAddSong = e => {
    this.props.addNewSong(this.state.videoID, this.state.videoTitle)
  }

  render () {
    const {
      muted,
      isPlaying,
      videoURL,
      videoTitle,
      paused,
      timeTag
    } = this.state
    return (
      <div id='playerWrapper'>
        <ReactPlayer
          ref={this.ref}
          url={videoURL}
          playing={!paused}
          // onEnded={this.onEnd}
          onProgress={this.onProgress}
          volume={this.state.volume}
          muted={muted}
          height='100%'
          width='100%'
        />
        <Grid padded='vertically'>
          <Grid.Row>
            <Grid.Column width='2' verticalAlign='middle'>
              <Button
                inverted
                color='green'
                animated='vertical'
                onClick={this.handleAddSong}
              >
                <Button.Content hidden>Add</Button.Content>
                <Button.Content visible>
                  <Icon name='plus' />
                </Button.Content>
              </Button>
            </Grid.Column>

            <Grid.Column textAlign='center' width='10' verticalAlign='middle'>
              {isPlaying && (
                <Slider
                  color='blue'
                  inverted={true}
                  value={timeTag}
                  settings={{
                    min: 0,
                    max: 1,
                    onChange: value => {
                      this.setState({
                        timeTag: value
                      })
                    }
                  }}
                />
              )}
            </Grid.Column>

            <Grid.Column
              width='3'
              verticalAlign='middle'
              floated='right'
              textAlign='right'
            >
              <Icon
                name={paused ? 'play' : 'pause'}
                color={paused ? 'green' : 'red'}
                bordered
                circular
                link
                inverted
                size='large'
                onClick={this.handlePlayPause}
              />
              <Icon
                name={muted ? 'unmute' : 'mute'}
                color='blue'
                bordered
                circular
                link
                inverted
                size='large'
                onClick={this.handleMute}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Segment.Inline as='h3'>{videoTitle}</Segment.Inline>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewSong: (id, title) => {
      dispatch(addNewSong(id, title))
    }
  }
}

function mapStateToProps (state) {
  return {
    playingVideo: state.playingVideo
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)

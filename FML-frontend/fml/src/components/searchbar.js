import React, { Component } from 'react'
import { Grid, Search } from 'semantic-ui-react'
import axios from 'axios'
import { connect } from 'react-redux'

import { playNewSong } from '../actions'
import { API_key } from '../utils/constants.js'
import { urlSearchAPI, urlImage, urlVideo } from '../utils/urls.js'
import { processText } from '../utils/utils.js'

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: false,
      query: '',
      results: []
    }
  }

  handleChange = e => {
    this.setState({ query: e.target.value, isLoading: true }, () => {
      var URL = urlSearchAPI(this.state.query, API_key, 5)

      axios.get(URL).then(response => {
        var results = response.data.items.map(obj => ({
          key: obj.id.videoId,
          title: processText(obj.snippet.title, 50),
          description: 'Youtube search',
          image: urlImage(obj.id.videoId),
          url: urlVideo(obj.id.videoId)
        }))

        results = [
          ...results,
          {
            key: 'sar',
            title: 'See more results...',
            keyword: this.state.query
          }
        ]

        this.setState({ results, isLoading: false })
      })
    })
  }

  onResultSelect = (e, { result }) => {
    this.props.playNewSong(result.key, result.title)
    this.setState({ query: '' })
  }

  onIconClick = e => {
    this.setState({ iconClicked: true })
  }

  render () {
    const { query, results, isLoading } = this.state
    return (
      <Grid container padded='vertically'>
        <Grid.Row centered>
          <Grid.Column textAlign='center' width='6'>
            <Search
              size='large'
              fluid
              placeholder={`Search for your favourite songs...`}
              icon={{ color: 'pink', name: 'heart' }}
              input={{ fluid: true, type: 'text' }}
              value={query}
              results={results}
              loading={isLoading}
              onSearchChange={this.handleChange}
              onResultSelect={this.onResultSelect}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

function mapStateToProps (state) {
  return {
    playerURL: state.playerURL
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playNewSong: (id, title) => {
      dispatch(playNewSong(id, title))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)

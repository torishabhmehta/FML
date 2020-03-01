import React, { Component } from 'react'
import { Menu, Dropdown, Checkbox, Icon, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import SearchBar from './searchbar.js'

class Navbar extends Component {
  state = {
    activeItem: 'Favourites'
  }

  componentDidMount () {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <Menu attached='top' secondary size='large' inverted>
        <Menu.Menu>
          <Menu.Item
            name='All Songs'
            color='blue'
            active={activeItem === 'All Songs'}
            content='All Songs'
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Favourites'
            color='blue'
            active={activeItem === 'Favourites'}
            content='Favourites'
            onClick={this.handleItemClick}
          />
        </Menu.Menu>

        <SearchBar />

        <Menu.Menu position='right'>
          <Menu.Item>
            <Segment color='pink'>
              <Icon name='venus mars' color='pink' />
              <Checkbox toggle label='Listen with your partner?' />
            </Segment>
          </Menu.Item>
          <Menu.Item>
            <Dropdown icon='bars'>
              <Dropdown.Menu>
                <Dropdown.Item text='Logout' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar

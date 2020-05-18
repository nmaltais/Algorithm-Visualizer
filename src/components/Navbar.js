/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Menu,
  Sidebar,
  Button,
  Transition,
  Icon,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { showLittleButton: false };
  }

  render() {
    const { showLittleButton } = this.state;
    const { toggleSidebar, visible } = this.props;

    const Nav = (props) => (
      <NavLink
        exact
        to={props.to}
        name={props.name}
        activeClassName="active"
      />
    );
    const toggleLittleButton = () => {
      this.setState((prevState) => ({ showLittleButton: !prevState.showLittleButton }));
    };

    return (
      <>
        <Transition visible={showLittleButton} animation="fade right" duration={700}>
          <Button
            icon
            onClick={toggleSidebar('push')}
            style={{
              backgroundColor: 'rgb(27, 28, 29)', color: 'white', position: 'fixed', left: '0', top: '10px', borderRadius: '0 4px 4px 0px', zIndex: 10,
            }}
          >
            <Icon name="bars" />
          </Button>
        </Transition>

        <Sidebar
          as={Menu}
          inverted
          animation="push"
          direction="left"
          vertical
          width="thin"
          visible={visible}
          onHidden={toggleLittleButton}
          onVisible={toggleLittleButton}
          style={{ zIndex: 20 }}
        >
          <Menu.Item>
            TOPICS
            <span
              role="button"
              tabIndex={0}
              style={{ float: 'right' }}
              onClick={toggleSidebar('push')}
              onKeyUp={toggleSidebar('push')}
            >
              X
            </span>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>Sorting</Menu.Header>
            <Menu.Menu>
              <Menu.Item as={Nav} to="/sorting/insert-sort" name="Insert Sort" />
              <Menu.Item as={Nav} to="/sorting/bubble-sort" name="Bubble Sort" />
              <Menu.Item as={Nav} to="/sorting/selection-sort" name="Selection Sort" />
              <Menu.Item as={Nav} to="/sorting/merge-sort" name="Merge Sort" />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Pathfinding</Menu.Header>
            <Menu.Menu>
              <Menu.Item as={Nav} to="/pathfinding/DFS" name="DFS" />
              <Menu.Item as={Nav} to="/pathfinding/BFS" name="BFS" />
              <Menu.Item as={Nav} to="/pathfinding/a-star" name="A Star" />
            </Menu.Menu>
          </Menu.Item>
        </Sidebar>
      </>
    );
  }
}

export default Navbar;

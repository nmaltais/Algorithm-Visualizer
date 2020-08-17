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
import './Navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { showOpenSidebarBtn: false };
  }

  toggleOpenSidebarBtn = () => {
    this.setState((prevState) => ({ showOpenSidebarBtn: !prevState.showOpenSidebarBtn }));
  };

  render() {
    const { showOpenSidebarBtn } = this.state;
    const { toggleSidebar, visible } = this.props;

    const Nav = (props) => (
      <NavLink
        exact
        to={props.to}
        onClick={props.onClick}
        className={props.className}
        activeClassName="active"
      >
        {props.children}
      </NavLink>
    );

    return (
      <>
        <Transition visible={showOpenSidebarBtn} animation="fade right" duration={700}>
          <Button
            icon
            id="openSidebarBtn"
            onClick={() => toggleSidebar('push')}
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
          onHidden={this.toggleOpenSidebarBtn}
          onVisible={this.toggleOpenSidebarBtn}
          style={{ zIndex: 20 }}
        >
          <Menu.Item>
            TOPICS
            <span
              id="closeSidebarBtn"
              role="button"
              tabIndex={0}
              style={{ float: 'right' }}
              onClick={() => toggleSidebar('push')}
              onKeyUp={() => toggleSidebar('push')}
            >
              X
            </span>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>Sorting</Menu.Header>
            <Menu.Menu>
              <Menu.Item as={Nav} to="/sorting/bubble-sort" name="Bubble Sort" />
              <Menu.Item as={Nav} to="/sorting/selection-sort" name="Selection Sort" />
              <Menu.Item as={Nav} to="/sorting/insertion-sort" name="Insertion Sort" />
              <Menu.Item as={Nav} to="/sorting/quick-sort" name="Quick Sort" />
              <Menu.Item as={Nav} to="/sorting/merge-sort" name="Merge Sort" />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Pathfinding</Menu.Header>
            <Menu.Menu>
              <Menu.Item as={Nav} to="/pathfinding/BFS" name="BFS" />
              {/* <Menu.Item as={Nav} to="/pathfinding/a_star" name="A Star" /> */}
            </Menu.Menu>
          </Menu.Item>
          {/* <Menu.Item>
            <Menu.Header>Machine Learning</Menu.Header>
            <Menu.Menu>
              <Menu.Item as={Nav} to="/machinelearning/linear-regression" name="Linear Regression" />
            </Menu.Menu>
          </Menu.Item> */}
        </Sidebar>
      </>
    );
  }
}

export default Navbar;

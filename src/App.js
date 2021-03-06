import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid, Sidebar } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import SortingClassComponent from './components/sorting/SortingClassComponent';
import Pathfinding from './components/pathfinding/Pathfinding';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  toggleSidebar = () => this.setState((prevState) => ({ visible: !prevState.visible }))

  render() {
    const { visible } = this.state;
    return (
      <Router>
        <Grid style={{ margin: '0px' }}>
          <Grid.Column width={16} style={{ minHeight: '100vh', padding: '0px' }}>
            <Sidebar.Pushable>
              <Navbar visible={visible} toggleSidebar={this.toggleSidebar} />
              <Sidebar.Pusher>
                <Switch>
                  <Route path="/sorting/:alg">
                    <SortingClassComponent />
                  </Route>
                  <Route path="/pathfinding/:alg">
                    <Pathfinding />
                  </Route>
                  <Route path="/">
                    <SortingClassComponent />
                  </Route>
                </Switch>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </Grid.Column>
        </Grid>
      </Router>
    );
  }
}

export default App;

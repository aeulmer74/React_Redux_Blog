import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import Posts from './containers/Posts';
import CreatePost from './containers/CreatePost';
import EditPost from './containers/EditPost';



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={Posts}/>
          <Route path='/create' exact component={CreatePost}/>
          <Route path='/edit/:id' render={(props) => <EditPost id={props.match.params.id} {...props}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;

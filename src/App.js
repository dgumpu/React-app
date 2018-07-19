import React, { Component } from 'react';
import axios from 'axios';

import Posts from './components/Posts';

class App extends Component {
  state = { posts: [] };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
        (posts) => this.setState({ posts: posts.data }));
  }
  
  render() {
    return (
      <div className="container">
        <h1 className="display-1">Post Samples</h1>
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;

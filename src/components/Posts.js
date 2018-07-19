import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
    state = { posts: [] };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            (posts) => this.setState({ posts: posts.data }));
    }

    render() {
        return (
            <div>
                <h1 className="display-1">Post Samples</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>User Id</th>
                            <th>Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map(post => (
                            <tr>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.userId}</td>
                                <td>{post.title.length}</td>
                            </tr>
                        ))}
                    </tbody>    
                </table>
                
            </div>
        );
    }
}

export default Posts;
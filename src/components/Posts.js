import React from 'react';

const Posts = props => (
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
            {props.posts.map(post => (
                <tr>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.userId}</td>
                    <td>{post.title.length}</td>
                </tr>
            ))}
        </tbody>    
    </table>
);

export default Posts;
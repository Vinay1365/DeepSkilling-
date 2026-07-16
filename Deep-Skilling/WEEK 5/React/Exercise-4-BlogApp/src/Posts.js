import React, { Component } from 'react';
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], error: null };
  }
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data.slice(0, 10) }))
      .catch(err => this.setState({ error: err.message }));
  }
  componentDidMount() { this.loadPosts(); }
  componentDidCatch(error) { alert('Error: ' + error.message); }
  render() {
    if (this.state.error) return <p>Error: {this.state.error}</p>;
    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default Posts;

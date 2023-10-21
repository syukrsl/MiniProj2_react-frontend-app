import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Posts.css';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const postsListRef = useRef(null);
  const theme = useTheme();
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts?_sort=title&_order=${sortOrder}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setPosts(response.data);
        scrollToBottom();
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [sortOrder]);

  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchQuery, posts]);

  const scrollToBottom = () => {
    if (postsListRef.current) {
      postsListRef.current.scrollTop = postsListRef.current.scrollHeight;
    }
  };

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleSearch = () => {
    // Search for posts when the button is clicked
    // This will trigger the effect to filter posts based on searchQuery
  };

  return (
    <div className="container">
      <h2 className="mt-4">List of Posts</h2>
      <div className="search-sort-container">
  <div className="search-button-container">
    <TextField
      label="Search Posts"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      variant="outlined"
    />
    <Button
      onClick={handleSearch}
      className="search-button"
      variant="contained"
      color="primary"
    >
      Search
    </Button>
  </div>
  <div className="sort-button-container">
    <Button
      onClick={handleSort}
      className="sort-button"
      style={{
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
      }}
    >
      Sort by Title {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
    </Button>
  </div>
</div>
      <ul className="list-group" ref={postsListRef}>
        {filteredPosts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
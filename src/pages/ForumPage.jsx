import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faComment } from '@fortawesome/free-solid-svg-icons';
import '../styles/ForumPage.css';

const ForumPage = () => {
  const initialPosts = [
    { id: 1, title: 'Final Artificial Intelligence Project', author: 'Enid Coliber', time: '2 hours ago', replies: 10, comment: 'Hello world' },
    { id: 2, title: 'Introduction to Machine Learning', author: 'John Doe', time: '3 hours ago', replies: 5, comment: 'Excited to start this project' },
    { id: 3, title: 'Data Structures and Algorithms', author: 'Jane Smith', time: '4 hours ago', replies: 8, comment: 'Looking for study partners' },
    { id: 4, title: 'Web Development Frameworks', author: 'Mike Johnson', time: '5 hours ago', replies: 12, comment: 'React vs Angular discussion' },
    { id: 5, title: 'Cybersecurity Essentials', author: 'Emma Brown', time: '6 hours ago', replies: 7, comment: 'Best practices for network security' },
  ];

  const [posts, setPosts] = useState(initialPosts);
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect to rebuild the page with only the filtered text
  useEffect(() => {
    const filteredPosts = initialPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm) ||
      post.author.toLowerCase().includes(searchTerm) ||
      post.comment.toLowerCase().includes(searchTerm)
    );

    setPosts(filteredPosts);
  }, [searchTerm]); // Re-run the effect whenever searchTerm changes

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="forum-page">
      <h1>Forum</h1>
      <h3>Welcome to the Tutor Forum! Ask questions, share insights, and explore discussion threads on various subjects. Connect with tutors and students, find study tips, and access valuable resources. Join the conversation and enhance your learning experience!</h3>
      <div className="button-container">
        <button className="add-comment-button">Add Comment</button>
      </div>
      <div className="search-bar-container">
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input" 
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <p className="post-title">{post.title}</p>
          <div className="post-meta">
            <div className="user-profile">
              <img src="https://via.placeholder.com/30" alt={post.author} className="author-avatar" />
              <span>{post.author}</span>
            </div>
            <span>{post.time}</span>
          </div>
          <div className='user-comment'>{post.comment}</div>
          <div className="post-replies">
            <FontAwesomeIcon icon={faComment} className="reply-icon" />
            {post.replies} Replies
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForumPage;

import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
  const [blogs, setBloge] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBloge(data));
  }, []);
  return (
    <div className="w-2/3">
      <h2 className="text-4xl font-bold">Blog:{blogs.length}</h2>
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog}></Blog>
      ))}
    
    </div>
  );
};

export default Blogs;

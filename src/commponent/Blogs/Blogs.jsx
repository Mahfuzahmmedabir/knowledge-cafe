import React, { useEffect, useState } from 'react';

const Blogs = () => {
  const [blogs, setBloge] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBloge(data));
  }, []);

  return (
    <div className="w-2/3">
      <h2 className="text-4xl font-bold">This is blog:{blogs.length}</h2>
    </div>
  );
};

export default Blogs;

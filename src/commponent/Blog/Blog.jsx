import { FaBeer } from 'react-icons/fa';

const Blog = blog => {
  console.log(blog);
  const {
    title,
    cover,
    author_img,
    author,
    reading_time,
    posted_date,
    hashtags,
  } = blog.blog;

  return (
    <div className="w-[500px] mb-20 ">
      <img className="w-full rounded-3xl " src={cover} alt="" />

      <div className="flex justify-between mt-10">
        <div className="flex">
          <img className="w-14 rounded-full" src={author_img} alt="" />
          <div className="mx-4">
            <p>{author}</p>
            <p>{posted_date}</p>
          </div>
        </div>

        <div>
          <span>{reading_time} read munet</span>
          <FaBeer></FaBeer>
        </div>
      </div>
      <h2 className="text-3xl"> Title: {title}</h2>
      <p>
        {hashtags.map(hash => (
          <span>
            <a href="">#{hash} </a>
          </span>
        ))}
      </p>
    </div>
  );
};

export default Blog;

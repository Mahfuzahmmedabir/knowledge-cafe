import Blogs from './commponent/Blogs/Blogs';
import Bookmark from './commponent/Bookmark/Bookmark';
import Header from './commponent/Header/Header';

function App() {
  return (
    <>
      <Header></Header>

      <div className="md:flex mt-10">
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>
    </>
  );
}

export default App;

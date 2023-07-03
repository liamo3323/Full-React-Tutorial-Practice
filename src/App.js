import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = 'http://www.youtube.com'


  return (  // functions always need to return something usually JSX template
    <div className="App">

      <div className="content">
        <h1> {title} </h1>
        <p> Num of Likes: {likes}</p>

        <p>{ 10 }</p>
        <p>{"Yo"}</p>
        <p>{ [1,2,3,4,5]}</p>
        <p> {Math.random() * 99}</p>

        <a href={link}> youtube website</a>
      </div>

    </div>
  );
}

export default App; // we always want to export component so that they can be used on the DOM I think

import { useState } from "react";
import { Tweet } from "./components/Tweet"
import './App.css';
import { AppRoutes } from "./Routes";

/** Estado */
function App() {

  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
  ])

  function createTweet() {
    setTweets([...tweets, 'Tweet 5'])
  }

  return (
    /** Tweet = componente / text = propriedade */
    <div> {tweets.map(tweet => {return <Tweet text={tweet} />})}
      <button 
      onClick={createTweet}
      style={{
        backgroundColor: 'black',
        border: 0,
        padding: '6px 12px',
        color:'#FFF',
        cursor: 'pointer'
      }}>
        Adicionar tweet
      </button>
      {/**rotas para outras páginas */}
      <AppRoutes />
    </div>
  );
}

export default App

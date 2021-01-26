import React, {useState, useEffect} from 'react';
import Loading from './components/loading/Loading';
import Routes from './routes/Routes';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);

  })
  return (
    <div className="body">
      {isLoading===true?
        <Loading/>:
        <div className="animated fadeIn">
        <Routes/>
        </div>

      }
    </div>
  );
}

export default App;

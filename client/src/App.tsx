import React, { useEffect, useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [data, setData] = useState<{ download: string }[][]>([]);

  const get = async () => {
    const response = await fetch('http://157.245.41.239/');

    setData(await response.json());
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div className="App">
      {data.map((datum, index) => {
          const { download } = (Object.entries(datum)[0][1]);

          return (
            <div key={index}>
              {parseFloat(download) / 1000 / 1000}
            </div>
          )
        }
      )}
    </div>
  );
};

export default App;

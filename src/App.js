import React, { useEffect } from 'react';
import { drawMap } from './drawMap';
import { visualizations } from './visualizations';

function App() {
  useEffect(() => {
    drawMap();
  }, []);

  return (
    <div className="App">
      <h1>Mapa de Estados de USA</h1>
    </div>
  );
}

export default App;

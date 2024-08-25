import { useState } from 'react';

function App() {
  const [image, setImage] = useState("https://www.acquia.com/sites/default/files/styles/content_grid/public/media/image/2022-11/On-Demand%20Demo%20Card%20Grphic_0.png?h=89a186e6&itok=0kQaKiVj");
  // useEffect(() => {
    
  // }, image)
  return (
    <div className="App">
      <h1>ICloud</h1>
      <div>
        <button className = "bg-slate-400 m-2 px-2 py-1 rounded-lg">
          Upload Image
        </button>
        <div>
          <img
            src = {image}
            alt = ""
            className = "h-[300px]"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default App;

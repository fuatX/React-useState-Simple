import { useState } from "react";

function App() {
  const [imageId, setImageId] = useState(200);

  const getLoremPicsumImg = (id, width = 800, height = 450) =>
    `https://picsum.photos/id/${id}/${width}/${height}`;

  return (
    <main className="container">
      <hgroup>
        <h2>ini Görsel Uygulaması</h2>
        <h3>Rastgele Resim:</h3>
      </hgroup>
      <img src={getLoremPicsumImg(imageId)} alt="" />
    </main>
  );
}

export default App;

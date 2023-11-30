import { useState } from "react";

function App() {
  const pictureIDs = [100, 211, 222, 103, 44];
  const [imageId, setImageId] = useState(pictureIDs[0]);

  const getLoremPicsumImg = (id, width = 800, height = 450) =>
    `https://picsum.photos/id/${id}/${width}/${height}`;

  function handleClick(id) {
    setImageId(id);
  }

  return (
    <main className="container">
      <hgroup>
        <h2>Mini Görsel Uygulaması</h2>
        <h3>Rastgele Resim:</h3>
      </hgroup>
      <img src={getLoremPicsumImg(imageId)} style={{ width: "100%" }} alt="" />
      <div className="grid" style={{ marginTop: "30px" }}>
        {pictureIDs.map((item, index) => (
          <div key={index}>
            <img
              onClick={() => handleClick(item)}
              src={getLoremPicsumImg(item, 100, 100)}
              alt=""
            />
          </div>
        ))}
      </div>
    </main>
  );
}

/*
old method without pictureIDs
  <div className="grid" style={{ marginTop: "30px" }}>
        {[...Array(5)].map((item, index) => (
          <div key={index}>
            <img
              onClick={() => handleClick(200 + index)}
              src={getLoremPicsumImg(200 + index, 100, 100)}
              alt=""
            />
          </div>
*/

export default App;

import React, { useCallback, useEffect, useState } from "react";
import Api from "./Api";
const API_HOST = process.env.REACT_APP_API_HOST;

function App() {
  const [imgList, setImageList] = useState([]);

  useEffect(() => {
    console.log("resrser");
    Api.requestToServer("getImages", "").then((res: any) => {
      console.log("imgList=====>", res);
      setImageList(res);
    });
  }, []);

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }
      const formData = new FormData();
      formData.append("img", e.target.files[0]);
      Api.requestToServer("setImage", formData);
    },
    []
  );

  return (
    <>
      <div className="App">
        <div>
          <input type={"file"} accept={"image/*"} onChange={onUploadImage} />
        </div>

        {imgList?.map((item) => {
          return <ImageBox src={item} />;
        })}
      </div>
    </>
  );
}

const ImageBox = ({ src }: { src: string }) => {
  return (
    <img
      alt={"img"}
      src={`${API_HOST}/images/${src}`}
      style={{ marginTop: 20, objectFit: "contain", width: 300, height: 400 }}
    />
  );
};

export default App;

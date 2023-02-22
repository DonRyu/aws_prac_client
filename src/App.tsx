import React, { useCallback, useEffect, useState } from "react";
import Api, { API_HOST } from "./Api";

function App() {
  const [imgList, setImageList] = useState([]);

  useEffect(() => {
    getImageList();
  }, []);

  const getImageList = () => {
    Api.requestToServer("getImages", "").then((res: any) => {
      setImageList(res);
    });
  };

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }
      const formData = new FormData();
      formData.append("img", e.target.files[0]);
      Api.requestToServer("setImage", formData).then((res) => {
        getImageList();
      });
    },
    []
  );

  return (
    <>
      <div className="App">
        <div>
          <input type={"file"} accept={"image/*"} onChange={onUploadImage} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {imgList?.map((item, key) => {
            return (
              <ImageBox src={item} key={key} getImageList={getImageList} />
            );
          })}
        </div>
        <button onClick={()=>{
          Api.requestToServer('test','')
        }}>test</button>
      </div>
    </>
  );
}

const ImageBox = ({
  src,
  getImageList,
}: {
  src: string;
  getImageList: Function;
}) => {
  const deleteImage = (key: string) => {
    Api.requestToServer("deleteImage", { key }).then((res) => {
      getImageList();
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        style={{ position: "absolute", right: 0, top: 0 }}
        onClick={(e) => deleteImage(src)}
      >
        X
      </button>
      <img
        alt={"img"}
        src={`${API_HOST}/api/images/${src}`}
        style={{ marginTop: 20, objectFit: "cover", width: 200, height: 300 }}
      />
    </div>
  );
};

export default App;

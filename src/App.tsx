import React, { useCallback, useEffect, useState } from "react";
import Api, { API_HOST } from "./Api";

function App() {
  const [imgList, setImageList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({ id: "", password: "" });

  useEffect(() => {
    getImageList();
  }, []);

  const getImageList = async () => {

    Api.requestToServer("getImages", "").then((res: any) => {
      if (res) {
        setLoading(false);
        setImageList(res);
      }
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

  const Auth = ()=>{
     Api.requestToServer('login',userData).then((res)=>{
      console.log('res')
     })
  }

  return (
    <>
      <div className="App">
        id:
        <input onChange={(e)=>setUserData({...userData,id:e.target.value})} />
        pss:
        <input onChange={(e)=>setUserData({...userData,password:e.target.value})} />
        <button onClick={Auth}>Submit</button>
        <div>
          <input type={"file"} accept={"image/*"} onChange={onUploadImage} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {imgList?.map((item, key) => {
            return (
              <ImageBox
                src={item}
                key={key}
                getImageList={getImageList}
                loading={loading}
                setLoading={setLoading}
              />
            );
          })}
        </div>
        <button
          onClick={() => {
            Api.requestToServer("test", "");
          }}
        >
          test
        </button>
      </div>
    </>
  );
}

const ImageBox = ({
  src,
  getImageList,
  setLoading,
  loading,
}: {
  src: string;
  getImageList: Function;
  setLoading: Function;
  loading: boolean;
}) => {
  const deleteImage = (key: string) => {
    setLoading(true);
    Api.requestToServer("deleteImage", { key }).then((res) => {
      return getImageList();
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        disabled={loading}
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

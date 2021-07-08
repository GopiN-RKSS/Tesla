import React from "react";
import "./Home.css";

function Home({ data }) {
  return (
    <>
      <div className="row row-cols-lg-1 row-cols-1">
        {data.map((data, index) => (
          <div className="col" key={index}>
            <div
              className="bg-image text-center"
              style={{ backgroundImage: `url(${data.bg_image})` }}
            >
              <div className="p-4">
                <h1>{data.name}</h1>
                <p>{data.text}</p>
              </div>
              <div className="btm">
                <button type="button" className="btnbutton btn btn-dark">
                  {data.button1}
                </button>
                <button type="button" className="btnbutton ms-2 btn btn-dark">
                  {data.button2}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;

import React, { useState } from "react";
import Poster from "./Poster";
import { data } from "@/data/datas";

function GroupPoster() {
  const [id, setId] = useState(-1);

  const showPoster = (id) => {
    console.log(id);
    const detailPoster = data.find((data) => data.id === id);
    console.log("poster", detailPoster);
    setId(id);
  };

  return (
    <div className="w-[200px] h-[200px]">
      <div className="flex flex-col">
        {data.map((poster) => (
          <div onClick={() => showPoster(poster.id)}>
            <Poster poster={poster} setId={setId} />
            <button className={`${id === poster.id ? "bg-red-500" : ""}`}>
              Click me
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupPoster;

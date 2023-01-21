import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactHlsPlayer from "@panelist/react-hls-player";
function App() {
  const query = new URLSearchParams(window.location.search);
  const src = query.get("src");

  return (
    <div className="screen">
      <div>
        <hr />

        <div>
          <div className="displayMovie">
            <section className="">

              <div id="player">
                <ReactHlsPlayer
                  src={src}
                  autoPlay={false}
                  controls={true}
                  width="100%"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

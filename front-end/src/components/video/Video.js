import React, { useRef } from "react";
import meal from "../../assets/cocoon.mp4";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import "./style.css";
import image from "../../assets/cover.jpg";

function Video() {
  const vidRef = useRef();
  const [playVideo, setPlayVideo] = React.useState(false);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="app__video">
        <video
          poster={image}
          ref={vidRef}
          src={meal}
          type="video/mp4"
          loop
          controls={true}
        />
        <div className="app__video-overlay flex__center">
          <div
            className="app__video-overlay_circle flex__center"
            onClick={() => {
              setPlayVideo(!playVideo);
              if (playVideo) {
                vidRef.current.pause();
              } else {
                vidRef.current.play();
              }
            }}
          >
            {playVideo ? (
              <PauseCircleFilledIcon
                style={{ color: "white", fontSize: "55px" }}
                fontSize="50px"
              />
            ) : (
              <PlayCircleIcon
                style={{ color: "white", fontSize: "55px" }}
                fontSize="50px"
              />
            )}
          </div>
        </div>
      </div>

      <section id="services">
        <h2
          style={{
            textAlign: "center",
            fontFamily: "Montez",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          Services We Offer
        </h2>

        <div className="container services__container">
          <article className="service">
            <div className="services__head">
              <h3
                style={{
                  fontFamily: "Montez",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                Welcome to Cocoon
              </h3>
            </div>

            <ul className="services__list">
              <li>Heavenly pizza that melts in your mouth, a true delight.</li>
              <li>
                Irresistible juicy burgers that will leave you craving more.
              </li>
              <li>
                Refreshing, invigorating juices that quench your thirst in an
                instant.
              </li>
              <li>
                Energize your day with a variety of freshly squeezed juices.
              </li>
              <li>
                Grilled chicken sandwiches that are simply irresistible, a
                must-try.
              </li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Video;

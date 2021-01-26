import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "../../css/App.css";
import ReactAudioPlayer from "react-audio-player";
import audio from '../../audio/bird.mp3';
const Loading = () => {
  return (
    <div className="loading">
      <div className="padre">
      <i class="fab fa-cotton-bureau" /> 
      
        <h2>Ingenio Paraíso Natural</h2>
        <h3>¡Vivelo!</h3>
        <ReactAudioPlayer src={audio} autoPlay />

        <div>
        <Loader type="ThreeDots" color="#07C378" height={80} width={120} />

        </div>
      </div>
    </div>
  );
};
export default Loading;

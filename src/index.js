import React from "react";
import ReactDOM from "react-dom";
import mp3 from "./audio/audio.mp3";
import "./styles.css";
import AudioSpectrum from 'react-audio-spectrum'
import App from './app'

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       {/* <AudioPlayer /> */}
//       <audio
//         id="sound"
//         src="https://firebasestorage.googleapis.com/v0/b/mario-rdr.appspot.com/o/tune101.mp3?alt=media"
        
//         controls
//         type="audio/mp3"
//         crossOrigin={"anonymous"}
//       />
//       {/* <AudioSpectrum
//                 // height={400}
//                 width={600}
//                 audioId="sound"
//                 capColor={"red"}
//                 capHeight={2}
//                 meterWidth={2}
//                 meterCount={512}
//                 meterColor={[
//                   { stop: 0, color: "#f00" },
//                   { stop: 0.5, color: "#0CD7FD" },
//                   { stop: 1, color: "red" },
//                 ]}
//                 gap={4}
//               ></AudioSpectrum> */}
//     </div>
//   );
// }
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React,{useState} from 'react';
import './assets/css/style.css';
import './assets/css/template-style.css';
import HeaderMainComponent from "./components/HeaderMainComponent";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import AppFooterComponent from "./components/AppFooterComponent";
import MainPageComponent from "./components/MainPageComponent";
import DownloadNotesPageComponent from "./components/DownloadNotesPageComponent";

function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
      <div className="App">
          <HeaderMainComponent setModalShow={setModalShow}/>
          <MainPageComponent/>
          <DownloadNotesPageComponent modalShow={modalShow} setModalShow={setModalShow}/>
          <AppFooterComponent/>
      </div>
  );
}

export default App;

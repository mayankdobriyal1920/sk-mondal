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
  const [queryCondition, setQueryCondition] = useState('');


  const openHeadingTabInModalPopup = (tab,subTab)=>{
      let condition = ``;
      if(tab){
          condition = `tab_type = ${tab}`;
      }
      if(subTab){
          condition += ` AND sub_tab_heading = ${subTab}`;
      }
      setQueryCondition(condition);
      setModalShow(true);
  }

  return (
      <div className="App">
          <HeaderMainComponent openHeadingTabInModalPopup={openHeadingTabInModalPopup}/>
          <MainPageComponent/>
          <DownloadNotesPageComponent modalShow={modalShow} queryCondition={queryCondition} setModalShow={setModalShow}/>
          <AppFooterComponent/>
      </div>
  );
}

export default App;

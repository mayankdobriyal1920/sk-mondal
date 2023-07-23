import React,{useState} from 'react';
import './assets/css/style.css';
import './assets/css/template-style.css';
import HeaderMainComponent from "./components/HeaderMainComponent";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import AppFooterComponent from "./components/AppFooterComponent";
import MainPageComponent from "./components/MainPageComponent";
import DownloadNotesPageComponent from "./components/DownloadNotesPageComponent";


const allTabTypes = [
    'Study Materials',
    'Class Link',
    'Tests',
];

const allSubTabTypes = [
    'Plus and iconic Class',
    'FAA, Special Class',
    'XE:Gate with Mondal',
    'SSC JE, AE, PSUs',
    'Mains SSC DRDO ALL',
    'Virtual Calculator',
    'Post Gate Guidance',
    'Bhramastra Batch',
    'Quick Revision Course',
];

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [queryCondition, setQueryCondition] = useState('');
  const [selectedSubjectName, setSelectedSubjectName] = useState('');


  const openHeadingTabInModalPopup = (tab,subTab)=>{
      let condition = ``;
      if(tab){
          condition = `tab_type = ${tab}`;
          setSelectedSubjectName(allTabTypes[tab-1]);
      }
      if(subTab){
          condition += ` AND sub_tab_heading = ${subTab}`;
          setSelectedSubjectName(allSubTabTypes[subTab-1]);
      }
      setQueryCondition(condition);
      setModalShow(true);
  }

  return (
      <div className="App">
          <HeaderMainComponent openHeadingTabInModalPopup={openHeadingTabInModalPopup}/>
          <MainPageComponent/>
          <DownloadNotesPageComponent selectedSubjectName={selectedSubjectName} modalShow={modalShow} queryCondition={queryCondition} setModalShow={setModalShow}/>
          <AppFooterComponent/>
      </div>
  );
}

export default App;

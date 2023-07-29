import React, {useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import {Container} from "react-bootstrap";
import Axios from "axios";
const api = Axios.create({
    baseURL: `https://121tuition.in/api-call-tutor/`
})

function DownloadNotesPageComponent({modalShow,setModalShow,queryCondition,selectedSubjectName}) {
    const [dataLoading,setDataLoading] = React.useState(false);
    const [studyData,setStudyData] = React.useState([]);

    const openPhoneNumberPopupToDownload = (link)=>{
        let phoneNumberInLocalStorage = localStorage.getItem('phoneNumber');
        if(!phoneNumberInLocalStorage){
            let value = prompt("Enter your mobile number : ", "eg. 9999999999");
            if(value) {
                if (value?.length === 10) {
                    window.open(link, '_blank');
                    localStorage.setItem('phoneNumber', value);
                } else {
                    alert("Please enter a valid mobile number");
                }
            }
        }else{
            window.open(link,'_blank');
        }
    }
    useEffect( ()=>{
        const getAllDataForStudy = async (condition)=>{
            setDataLoading(true);
            const { data } = await api.post('common/actionToGetStudyMaterialByHeadingTabAndSubTabApiCall',{condition});
            let keyIndex = [];
            let finalData = [];
            data?.response?.map((dataStudy,key)=>{
                if(!keyIndex?.includes(dataStudy?.subject)){
                    finalData.push({
                        name:dataStudy?.subject,
                        data:[dataStudy]
                    })
                    keyIndex.push(dataStudy?.subject);
                }else{
                    finalData[keyIndex?.indexOf(dataStudy?.subject)].data.push(dataStudy);
                }
            })
            console.log('finalData',finalData);
            setStudyData(finalData);
            setDataLoading(false);
        }
        if(queryCondition){
            getAllDataForStudy(queryCondition);
        }
    },[queryCondition])

    return (
        <Modal show={modalShow} onHide={()=>setModalShow(false)} fullscreen={true}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {selectedSubjectName}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <section className="courses download_study">
                        <div className="container aos-init aos-animate" data-aos="fade-up">
                        {dataLoading ?
                          'Loading...'
                         :(studyData?.length) ?
                            <>
                                {studyData?.map((subjectData,key)=>(
                                    <div key={key} className="row aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                                        <h4><u>{subjectData?.name}</u></h4>
                                        {subjectData?.data?.map((topicData,tkey)=>(
                                            <div key={tkey} className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                                <div className="course-item">
                                                    <div className="course-content">
                                                        <p><a className={"download_notes_a_tag color_theme"} onClick={()=>openPhoneNumberPopupToDownload(topicData?.link)}>{tkey+1}: {topicData?.topic_name}</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </>
                            :
                           'No Data Found'
                        }
                        </div>
                    </section>
                </Container>
            </Modal.Body>
        </Modal>
    );
}

export default DownloadNotesPageComponent;

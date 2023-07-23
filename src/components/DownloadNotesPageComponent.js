import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Container} from "react-bootstrap";

function DownloadNotesPageComponent({modalShow,setModalShow}) {
    const [phoneNumber,setPhoneNumber] = React.useState('');
    const [phoneNumberError,setPhoneNumberError] = React.useState(false);

    const openPhoneNumberPopupToDownload = (link)=>{
        setPhoneNumberError(false);
        if(phoneNumber?.length === 10){
            window.open(link,'_blank');
        }else{
            setPhoneNumberError(true);
            document.getElementById('phone_number_input').focus();
        }
    }
    return (
        <Modal show={modalShow} onHide={()=>setModalShow(false)} fullscreen={true}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Download Study Materials
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <div className="container aos-init aos-animate" data-aos="fade-up">
                        <div className="row aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                            <div className="col-lg-12">
                                <div className={"form-group mt-3 "+(phoneNumberError ? 'error' : '')}>
                                    <h4>PHONE NUMBER</h4>
                                    <input type={"number"} id={"phone_number_input"} placeholder="eg. 9999999999" className="form-control" onKeyUp={()=>setPhoneNumberError(false)} onChange={(e)=>setPhoneNumber(e.target.value)}/>
                                    {phoneNumberError ?
                                        <span className={"error_label"}>Please enter valid phone number to download file</span>
                                        :''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="courses download_study">
                        <div className="container aos-init aos-animate" data-aos="fade-up">
                            <div className="row aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>GATE 2024 Topic list, Analysis and Strategy</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1Z01M5QuJijC5d21FWkvcBz6XZ8_iAcR0/preview?usp=drivesdk")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>Maths + Aptitude Probability for 2024 & 2025</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1HB49Wq6i7RMN82UV3j3kpIUUUdds8UHP")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>Fluid Mechanics Complete</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1lzp_p0PZtkg1m6m6sQnGd3MpSwBtJNCR")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>Heat Transfer Ch 3 Notes</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1QDR13J3n8xVDY-0Vrs-_wgTxDPjzyHP5")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>Heat Transfer Ch 2 Notes</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/117WAAi4sJH6TmgzZs7MdVuPBwYnwhVBm")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>Heat Transfer Ch - 1</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1NMRIfDkWdBezy4YFac0j9NBQlGOEoLP3")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>Break Even Analysis</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1UwA44PCuMQRdx2IpHXFT1FUIOWkbLPs7")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>Mathematics Complete </a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1GcZAc3oML-1_9zhzUWtXrc2TF7Zefqxv")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>TOM Mechanisms & Velocity – Acceleration Analysis</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1ym-WD2Q--uYFeCOMRoYXwackMOJEF4IF")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>TOM Vibration</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1qKzr6VFwcHcZyCgqbUL9FhBLpWjPwZaR")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>Gear and Gear Trains</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1qkM4Sja491TntCFWxq8LIF-yEqICrS0H")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>Industrial Engineering </a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1You6f3nL91rsOuebBnRXx3wx6mGyCA-H")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>Theory of Metal Cutting</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1WOUmzc-P9rNmIn6HWQ47FuW5fdcKO0C4")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>Metal Forming </a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1MXWkpMISKHtokEtlJpV3nnYZ_-z4dF91")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>NTMM</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1Lx1mZLvo8MSunPzkaZd0y92lRi3lrQzO")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>NC CNC DNC APT</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/12ir0WjOcF1GJ3QSllHRsUfrHwdehZuJ-")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>Metrology</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1C5BucJ1c7XMdZ4Xj3CE6WRtYeu06Yzol")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>Welding</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1reAiVuDV3yNT2qCbZ2YcPnOIbj4fCxYc")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>Casting</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1wQeDpCYMMmVhJXSKph-18k38MXuuwaii")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>Powder Metallurgy</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1NuPPUdmubmfqcmLcfjF2oDwrV57eT1z3")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>Additive Manufacturing</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1uL5ySzKTlOvIRKVa7Hj0wd7q4frZGIIB")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>Machine Tools</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1ApAeCeJ6WWNLmpkOofkXOoXnnIlF1f0u")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>Jigs and Fixtures </a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1HfZIULAr17ZRhQrPhFGBPDANKBe50l7E")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>Material Science Complete</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1DvZPR08wIfzmWiT36e2_yRYz77opiWR2")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>ROBOTICS</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1PglAkHIgNFRWnsYEmD6igC5N3WZqlGVU")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <div className="course-content">
                                            <h3><a>GATE FAA (formula Algorithm  Application series and other</a></h3>
                                            <a onClick={()=>openPhoneNumberPopupToDownload("https://drive.google.com/file/d/1WvHqpAqe5_tko3osHpbTlVl8OLS7zf8e")} className="get-started-btn download_notes_a_tag">CLICK HERE TO DOWNLOAD</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
            </Modal.Body>
        </Modal>
    );
}

export default DownloadNotesPageComponent;

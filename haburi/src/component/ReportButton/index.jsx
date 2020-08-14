import React from 'react';
import { videoFilterAPI } from '../../util/api';
import './ReportButton.css';
function ReportButton({videoNum}) {

  const resultAlert = (response) =>{
    return new Promise((resolve,rejects)=>{
      if (response.error) {
      }
      else {
        if(response.result)
          alert('신고해주신 동영상은 유해한 동영상으로 판단되어 블락 처리 되었습니다.');
        else
          alert('신고해주신 동영상은 유해한 동영상으로 판단되지 않았습니다.');
      }
      resolve();
    })
  }

  const selectFilter = async (e) =>{
      e.preventDefault();
      alert('신고가 접수되었습니다.');
      const response = await videoFilterAPI(videoNum);
      await resultAlert(response);
  }

  return(
    <form className = "wrapper">
      <button onClick={selectFilter}>신고하기</button>
    </form> 
  )
}

export default ReportButton;
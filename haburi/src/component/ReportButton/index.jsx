import React from "react";
import { postReport } from "../../util/api";

function ReportButton({ videoUrl }) {
  const resultAlert = (response) => {
    return new Promise((resolve, rejects) => {
      if (response.isBlock) {
        alert("신고해주신 동영상은 유해한 동영상으로 판단되어 블락 처리 되었습니다.");
        window.location.reload();
      } else alert("신고해주신 동영상은 유해한 동영상으로 판단되지 않았습니다.");

      resolve();
    });
  };

  const selectFilter = async (e) => {
    e.preventDefault();
    alert("신고가 접수되었습니다.");
    const response = await postReport({ videoURL: videoUrl });
    await resultAlert(response);
  };

  return (
    <form className="wrapper">
      <button onClick={selectFilter}>신고하기</button>
    </form>
  );
}

export default ReportButton;

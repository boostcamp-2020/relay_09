# 3주차 Front-end 정리

**MainPge 생성 (/component/MainPage/)**

- MyNav, LoginPage, Tab을 묶었습니다.

**Tab 수정 (/component/Tap/)**

- 서버로부터 api를 받아와 여러개의 동영상을 받아와 저장하였습니다.
- 섬네일을 누르면 해당 링크의 번호로 페이지를 이동합니다.

**StreamingPage 생성 (/component/StreamingPage/)**

- 동영상을 재생하고, 유해동영상을 신고할 수 있는 페이지입니다.
- 문제점 : 새로고침을 누르면 store 데이터가 날아가서 이전 페이지로 이동하게 만들어놨습니다.

**ReportButton생성 (/component/ReportButton/)**

- `신고하기` 버튼을 누르면 서버가 유해영상으로 검열을 할 수 있도록 api를 보내고 결과에 따라 async, await으로 판단이 됐을 때 사용자에게 alert가 오게 하였습니다.

**api (/util/api.js)**

### 1. getVideolist

- 처음 메인페이지(/component)를 접근했을 때 서버에게 동영상 링크를 요청하고 결과값으로 받아와 반환합니다.

### 2. postReport

- StreamingPage에서 ReportButton을 눌렀을 때 서버에게 동영상 링크를 전달하여 결과값을 전달받아 누른 사용자에게 경고창으로 결과값을 알려주기 위한 response 값을 반환합니다.
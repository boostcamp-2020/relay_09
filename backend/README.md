# node-chat
### Node.js 기반의 실시간 그룹채팅 강좌
- 진행자: 이근혁(lghlove0509@naver.com)
- [블로그 본문 보기](http://codevkr.tistory.com/62)

# Chapter 5 - 채팅 기능 구현

```javascript
/* 접속된 모든 소켓에게 데이터 전달 */
io.sockets.emit('이벤트명', 데이터)

/* 나를 제외한 모든 소켓에게 데이터 전달*/
socket.broadcast.emit('이벤트명', 데이터)
```
# 3주차 백엔드
## 백엔드 API
​
담당 : `J041_김석중` | `J082_박은식` | `J103_신승현`
​
### 비디오 리스트 가져오기
```jsx
GET "/videolist"
// response video.json
​
// video.json
[
	{
		"id": "number",
		"title": "string",
		"thumbnail": "url:string",
		"video": "url:string",
		"isBlock": "boolean"
	},
	...
]
```
​
### 신고들어온 비디오 판독하기
```jsx
POST "/reportvideo"
// request video url:string
// response true if the video is Harmful, or false
```
<br>
<br>

## 이미지 처리 API
​
API team - 김동현(J032) 김은빈(J050) 박지홍(J089) 오정석(J116) 차효준(J202)
​
​
​
### 머신러닝 API - Sightengine
​
:link: https://sightengine.com/docs/reference?javascript#responses
​
​
​
Sightengine에서 지원하는 다양한 타입의 detection 중 **Nudity Detection API** 사용
​
​
​
### : : Nudity Detection API
​
* 사용방법
​
```bash
$ npm install sightengine --save
```
​
* 요청 - 로직 코드
​
```js
const sightengine = require('sightengine')('{public key}', '{secret key}');
​
// input : video url
// ouput : true(success) / false(fail)
sightengine.check(['nudity']).video_sync('{video_url}').then(function(result) {
  // read the output (result)
    let data = result.data.frames
    for (let i=0; i<data.length; i++){
        let obj_length = Object.keys(data[i].nudity).length
        if(data[i].nudity.raw > 0.6 || data[i].nudity.partial > 0.6 || obj_length === 4){
            return true
        }
    }
    return false
}).catch(function(err) {
  // handle the error
});
```
​
* Result Data Format
​
![캡처2](https://user-images.githubusercontent.com/41413618/90350221-5c26d400-e077-11ea-86b6-af9096aff5e0.JPG)
​
* Result Data Example
​
![캡처](https://user-images.githubusercontent.com/41413618/90350214-5a5d1080-e077-11ea-9029-a9348c572c69.JPG)
​
​
​
​
​
### 유해매체 선정기준
​
1. 사전에 20가지의 유해영상을 분석해 `raw` 값과 `partial` 값의 평균을 도출하여 기준 값으로 선정하였습니다.
2. partial_tag가 존재하면 유해매체라고 판단했습니다.
3. 동영상 분석의 경우 1초마다 frame 결과값을 받는데, frame 하나라도 기준 값보다 높은 수치가 나온다면 유해매체로 분류했습니다.

# 강좌
- [전체강좌 보기](https://github.com/leegeunhyeok/node-chat/blob/master/README.md)
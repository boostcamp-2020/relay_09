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


# 강좌
- [전체강좌 보기](https://github.com/leegeunhyeok/node-chat/blob/master/README.md)
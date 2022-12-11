# < 기초 노드 리액트 강의 >

## John Ahn님의 node.js react.js 시리즈 강의들의 베이스(Boilerplate) 강의

<br>
이 어플리케이션을 사용하기 위해선

dev.js file을 config 폴더 안에 생성해주세요.
mongoDB 정보를 dev.js file안에다가 넣어주세요.
" npm install "을 root directory에서 입력해주세요. (백엔드 종속성 다운받기)
" npm install "을 client directory에서 입력해주세요. (프론트엔드 종속성 다운받기)

- 강의 원본 소스코드 저장소(저자: John Ahn) : https://github.com/jaewonhimnae/boiler-plate-ko
- 원본 동영상 강의 : https://youtube.com/playlist?list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T
  <br><br>

## 단계별 따라하기 설정

```
npm init
git init
npm i express mongoose body-parser --save
npm i nodemon --save-dev
npm i bcrypt jsonwebtoken cookie-parser --save
(package.json 안에 "scripts": {
"start": "node index.js",
"dev": "nodemon index.js", ...} 넣기)

npm i concurrently --save
(package.json 파일 안 "scripts": {...} 안에 아래 넣기
"both": "concurrently \"npm run dev\" \"npm run start --prefix client\"" )
```

### 완강 후기

```
"기본" 강의라고 되있어서 완전 노드&리액트 전혀 모르는 사람용 인가 했는데, node.js React 처음 배우는 분들을 위한 강의는 아닌거 같고요.

존안님의 "따라하며 배우는 풀스택 웹 개발 시리즈" 를 위한 "기본" 강의 이네요.
즉, 기초가 아닌 시리즈 강의 물의 기본(베이스) 강의 인거 같아요.
어느정도 node.js, react 기초는 조금이라도 공부 한 적있는 분이 보면 좋을거 같습니다.
특히 리액트는 처음 배우는 분들을 위한 강의는 아닙니다.
이 강의 보면서 리액트는 전혀 이해 안가시는 분들은 생활코딩에서 이고잉님의 리액트 편 동영상이나 책 보고 오시면 순서상 좋을거 같고 더 잘 이해 가실거에요.
node.js도 기초 강의 먼저 보고 리액트랑 노드가통합적으로 어찌 구현하는지 알고 싶을때 또는 복습용으로 보면 좋을거 같습니다.
```

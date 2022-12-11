# 초기 설정

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

- 강의 원본 레포 : https://github.com/jaewonhimnae/boiler-plate-ko
- 원본인강 : https://youtube.com/playlist?list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T

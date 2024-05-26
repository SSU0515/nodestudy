const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const cors = require("cors");
require("dotenv").config();
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;
console.log("mong", MONGODB_URI_PROD);
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api", indexRouter);

const mongoURI = MONGODB_URI_PROD;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("DB connection fail", err);
  });

app.listen(process.env.PORT || 8080, () => {
  console.log("server on 8080");
});

//1.회원가입
//유저가 이메일 패스워드 유저이름을 입력해서 보냄
//받은 정보를 저장함 (데이터 베이스 모델 필요)
//패스워드를 암호화 시켜서 저장

//1.라우터생성
//2.유저모델
//3.데이터 저장 (가입 유무 확인,패스워드 암호화)
//4.응답

//2.로그인
//이메일 패스워드를 입력해서 보냄
//데이터베이스에 해당 이메일과 패스워드를 가진 유저가 있는지 확인
//있다면? 유저정보 + 토큰
//프론트엔드에서 이 정보를 저장

//1.라우터 설정
//2.이메일 패스워드 정보읽어오기
//3.이메일을 가지고 유저정보 가져오기
//4.이 유저의 디비에 있는 패스워드와 프론트엔드가 보낸 패스워드가 같은지 비교
//5.맞다면 토큰발행
//6.틀리다면 에러메세지 보냄
//7.응답으로 유저정보 + 토큰보냄

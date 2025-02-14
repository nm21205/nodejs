const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true, //띄어쓰기(빈칸)을 제거하는 역할
    unique: 1
  },
  password: {
    type: String,
    minlength: 5
  },
  role: { // 예) 넘버가 1이면 관리자고 넘버가 0이면 일반유저
    type: Number,
    default: 0
  },
  image: String,
  token: { // 토큰을 이용해 나중에 유효성 관리를 할 수 있음
    type: String
  },
  tokenExp: { //토큰을 사용할 수 있는 기간
    type: Number
  }
})

//mongoose.model(모델의 이름, 스키마)
const User = mongoose.model('User', userSchema);

// 다른 곳에도 쓸수 있게 exports 해줌
module.exports = { User }
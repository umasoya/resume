'use strict';

const today = new Date();
document.getElementById('today').textContent = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;

/**
  * 生年月日から年齢を計算する
  */
const myBirthDay = new Date(1993, 2, 31); // 月だけ0始まり
const currentYearsBirthday = new Date(today.getFullYear(), myBirthDay.getMonth(), myBirthDay.getDate());
let age = today.getFullYear() - myBirthDay.getFullYear();
if (today < currentYearsBirthday) {
  age--;
}
document.getElementById('age').textContent = `${age}`;
'use strict';

function countdown(due){
  const now = new Date();
  // 以下を編集
  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest/1000) % 60;
  const min = Math.floor(rest/1000/60) % 60;
  const hours = Math.floor(rest/1000/60/60) % 24;
  const count = [hours, min, sec];

  return count;
}

let goal = new Date();
goal.setHours(23);
goal.setMinutes(59);
goal.setSeconds(59);

console.log(countdown(goal));
// さっき追加した行
console.log(goal)
// ここまで
goal.setHours(23);
goal.setMinutes(59);
goal.setSeconds(59);
// さらに追加
console.log(goal)
// ここまで

console.log(countdown(goal));

// 以下追記
const counter = countdown(goal);
const time = `${counter[0]}時間${counter[1]}分${counter[2]}秒`;
console.log(time);

document.getElementById('timer').textContent = time;

function recalc() {
 console.log(countdown(goal));
  const counter = countdown(goal);
  const time = `${counter[0]}時間${counter[1]}分${counter[2]}秒`
  console.log(time);
  document.getElementById('timer').textContent = time;
  // ※次の一行を忘れずに追加！！
  refresh();
}


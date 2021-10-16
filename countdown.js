'use strict';

function countdown(due){
  const now = new Date();
  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest/1000);
  return sec;
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

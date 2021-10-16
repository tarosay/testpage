'use strict';

function countdown(due){
  const now = new Date();
  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest/1000);
  return sec;
}

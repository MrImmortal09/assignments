// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
// <!-- So the main difference is that setTimeout triggers once and setInterval triggers repeatedly. -->


setTimeout(() => {
  let count = 0;
  const interval = 1000;
  const counter = () => {
    console.log(count);
    count++;
    setTimeout(counter, interval);
  }
  counter();
} , 1000);





































































// (Hint: setTimeout)
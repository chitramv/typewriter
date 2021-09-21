const sentence = "hello there from lighthouse labs";
let waittime = 1
for (const char of sentence) {
  setTimeout(() =>
  process.stdout.write(char),50*(waittime));
  waittime++;
}
setTimeout(() => console.log(" "),3000);
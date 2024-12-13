/*
Do you remember the game of hop?

Get a  number between 2 and 6 from the user(you can use prompt and alert in this practice), then log from 1 to 200 in the console.
It is just like the game of hop, whatever number the user enters, the numbers will be printed accordingly.

Example: If the user enters the number 3, the numbers will be printed like this:
1, 2, hop, 4, 5, hop, 7, 8, hop, 10 ..., 200 
*/
//! Answer:

function hop() {
  let number = prompt("Enter a number between 2 and 6");

  if (!/[2-6]/.test(number)) {
    alert("Enter a number between 2 and 6");
    hop();
    return;
  }

  for (let i = 1; i <= 200; i++) {
    if (i % number === 0) {
      console.log("hop");
    } else {
      console.log(i);
    }
  }
}

hop();

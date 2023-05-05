/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function domainGenerator() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net", ".co", ".co.uk", ".ca"];
  let resultArray = [];

  for (let p = 0; p < pronoun.length; p++);
  {
    for (let a = 0; a < adj.length; a++);
    {
      for (let n = 0; n < noun.length; n++);
      {
        for (let d = 0; d < domain.length; d++);
        {
          resultArray.push(`${pronoun[p]}${adj[a]}${noun[n]}${domain[d]}`);
        }
      }
    }
  }
  for (const element of resultArray) {
    console.log(element);
  }
}

window.onload = function() {
  //write your code here
  domainGenerator();

  // console.log();
};

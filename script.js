"use Strict";

const listEl = document.querySelector(".summary-list");
async function renderData() {
  await fetch("data.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let summary = data;
      summary.map((listItem) => {
        let liEl = document.createElement("li");
        liEl.classList.add(`summary--${listItem.category}`);
        let imgEl = document.createElement("img");
        imgEl.setAttribute("src", `${listItem.icon}`);
        imgEl.setAttribute("alt", `icon-${listItem.category}`);
        let spanEl = document.createElement("span");
        let spanEl2 = document.createElement("span");
        let spanEl3 = document.createElement("span");
        spanEl3.classList.add("summary-score");
        spanEl3.textContent = `${listItem.score}`;
        spanEl3.appendChild(spanEl2);
        spanEl2.textContent = ` / 100`;

        spanEl.classList.add("summary-container");
        spanEl.textContent = `${listItem.category}`;
        spanEl.appendChild(imgEl);
        liEl.appendChild(spanEl3);
        liEl.appendChild(spanEl);
        listEl.appendChild(liEl);
      });
    });
}

const data = renderData();

// function createListItems (arr){
//  data.array.forEach(list => {
//     for (const key in list) {
//        console.log(key);
//     }
//  });
//     // for (let i = 0 ;  i <= arr.length ; i++) {
//     //     console.log(arr[i])
//     // //     let listItem = document.createElement(`<li>${arr[i].category}</li>`)
//     // //    listEl.appendChild(listItem);
//     // }
//     // arr.forEach(list => {
//     //     console.log(list)
//     // });
// }
console.log(data);
// createListItems(data);
//  console.log(listEl);

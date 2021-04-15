let btn = document.createElement("button");
let btnText = document.createTextNode("Add Square");
btn.className = "btn";
btn.appendChild(btnText);
document.body.appendChild(btn);
document.body.style.display = "flex";
document.body.style.flexWrap = "wrap"

let timesClicked = 1;

const colors = ["red", "blue", "green", "yellow", "purple"]

const allDivs = []

btn.addEventListener("click", () => {
  let newDiv = document.createElement("div");
  newDiv.style.backgroundColor = "black";
  newDiv.style.height = "10rem"
  newDiv.style.width = "10rem"
  newDiv.className = "shared"


  newDiv.id = `${timesClicked++}`
  newDiv.style.color = "whitesmoke"
  allDivs.push(newDiv.id)
  console.log(allDivs)


  newDiv.addEventListener("mouseover", () => {
    newDiv.innerHTML = newDiv.id;
  })
  newDiv.addEventListener("mouseout", () => {
    newDiv.innerHTML = "&nbsp";
  })

  newDiv.addEventListener("click", () => {
    newDiv.style.backgroundColor = colors[Math.floor(Math.random() * 6)]
    console.log("should change");
  })

  newDiv.addEventListener("dblclick", () => {

    // check if even
    if (newDiv.id % 2 === 0) {
      if (!allDivs.includes(String(parseInt(newDiv.id) + 1))) {
        // tells if sqare is there
        console.log(String(parseInt(newDiv.id) + 1))
        alert("there is no square after that one")
      } else {
        let el = document.getElementById(String(parseInt(newDiv.id) + 1));
        el.remove()

        let indexOf = allDivs.indexOf(String(parseInt(newDiv.id) + 1))
        allDivs.splice(indexOf, 1)
        console.log(allDivs)

      }

    } else if (newDiv.id % 2 !== 0) {
      if (!allDivs.includes(String(parseInt(newDiv.id) - 1))) {
        console.log(String(parseInt(newDiv.id) - 1))
        alert("there is no square before that one")
      } else {
        let el2 = document.getElementById(String(parseInt(newDiv.id) - 1));
        el2.remove()

        // newDiv.remove();
        let indexOf2 = allDivs.indexOf(String(parseInt(newDiv.id) - 1))
        console.log(indexOf2)
        allDivs.splice(indexOf2, 1)
        console.log(allDivs)

      }

    }
  })

  document.body.appendChild(newDiv);
})
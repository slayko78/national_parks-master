const descriptions = document.querySelectorAll(".description-display");
const test = document.querySelectorAll(".park");
for (let desc of descriptions.values()) {
    let content = desc.innerText;
    console.log(content);
  }
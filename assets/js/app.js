// Retrieve Data
fetch('./data.json')
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
})
.then(data => {
  console.log(data);
  let extName = data[0].name;
  console.log(extName);
})
.catch(error => {
  console.error('Error fetching JSON:', error);
});

const myContent = "Hello, world!";

const myDivHTML = `
  <div class="my-custom-div">
    <h2>${myContent}</h2>
    <p>This is a div created with a template literal.</p>
  </div>
`;

// document.body.onload = addElement;

// function addElement() {
//   const newDiv = document.createElement("div");
//   const newContent = document.createTextNode("example");
//   newDiv.appendChild(newContent);
//   const currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }
let length;
let width;
function calculatArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
   let area = lenth * width
}
document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;

window.onload = function() {

  let btn = document.getElementById("print-btn");
  let div = document.getElementById("print-div");

  btn.addEventListener("click", () => {
    div.removeChild(btn);
    print();
    div.appendChild(btn);
  });
};
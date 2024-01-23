var button = document.querySelector(".show-cat");
// console.log("button");
var cat = document.querySelector(".cat")
// console.log("cat");

button.addEventListener("click", function(){
  // cat.classList.add("show")
  if (cat.classList.contains("show")){
cat.classList.remove("show")
button.classList.add("disappear")
  }else {
    cat.classList.add("show")
    button.classList.remove("disappear")
  }
});
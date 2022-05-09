const checkboxs = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;
function handelClick(e){
  let inBetween = false;
  console.log(this);

  if(e.shiftKey && this.checked){
    checkboxs.forEach(checkbox => {
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
        console.log("Starting");
      }
      if(inBetween){
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this;
  console.log(lastChecked);
}

checkboxs.forEach(checkbox => checkbox.addEventListener("click",handelClick))
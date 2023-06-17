const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

checkboxes.forEach(checkbox =>
  checkbox.addEventListener('click', handleCheck));

function handleCheck(e){
  // Check if the had the Shift key down
  // and that they are checking
  let inBetween = false;
  if(e.shiftKey && this.checked && lastChecked != undefined){
    // loop over every checkbox
    checkboxes.forEach(checkbox => {
      if((checkbox === this || checkbox === lastChecked) &&
        this != lastChecked) {
        inBetween = !inBetween;
      }

      if(inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}
function disableRadios(){
  let unresolvedElements = document.getElementsByClassName("mark_unresolved");
  let resolvedElements = document.getElementsByClassName("mark_resolved");
  let user_self = document.querySelector('.my_name').innerText;

  for(let i = 0; i < unresolvedElements.length; ++i){
    let user_post = unresolvedElements[i].parentElement.parentElement.parentElement.parentElement.querySelector('.user_name').innerText;

    if (user_post != user_self) {
      unresolvedElements[i].disabled = true;
    } else {
      unresolvedElements[i].disabled = false;
    }
  }

  for(let j = 0; j < resolvedElements.length; ++j){
    let user_post = resolvedElements[j].parentElement.parentElement.parentElement.parentElement.querySelector('.user_name').innerText;
    
    if (user_post != user_self) {
      resolvedElements[j].disabled = true;
    } else {
      resolvedElements[j].disabled = false;
    }
  }
}

function setRadios(){
  disableRadios();
}

const resolveObserver = new MutationObserver(setRadios);
let view = document.getElementById("views");
resolveObserver.observe(view, {
  childList: true,
  subtree: true
});


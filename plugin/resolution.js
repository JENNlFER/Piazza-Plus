function disableRadios(){
  let unresolvedElements = document.getElementsByClassName("mark_unresolved");
  let resolvedElements = document.getElementsByClassName("mark_resolved");

  for(let i = 0; i < unresolvedElements.length; ++i){
    unresolvedElements[i].disabled = true;
  }

  for(let j = 0; j < resolvedElements.length; ++j){
    resolvedElements[j].disabled = true;
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



let unresolvedElements = document.getElementsByClassName("mark_unresolved");
let resolvedElements = document.getElementsByClassName("mark_resolved");

for(let i = 0; i < unresolvedElements.length; ++i){
  unresolvedElements[i].disabled = true;
}

for(let j = 0; j < resolvedElements.length; ++j){
  resolvedElements[j].disabled = true;
}

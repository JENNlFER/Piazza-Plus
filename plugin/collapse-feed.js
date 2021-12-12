let elements = document.getElementsByClassName("hide_show_feed hide_feed");
let collapse = elements[0];
collapse.innerHTML = "";

let elements1 = document.getElementsByClassName("hide_show_feed show_feed");
let expand = elements1[0];
expand.innerHTML = "";

let lineImgCollapse = document.createElement("img");
lineImgCollapse.src = chrome.runtime.getURL("assets/lines.png");
lineImgCollapse.height = "20";
lineImgCollapse.width = "20";
let lineImgExpand = lineImgCollapse.cloneNode();
lineImgCollapse.className = "lines_collapse";
lineImgExpand.className = "lines_expand";

collapse.append(lineImgCollapse);
expand.append(lineImgExpand);
collapse.style.display = "block";
collapse.style.display = "block";
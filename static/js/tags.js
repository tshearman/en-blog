var allFlag = true
var selected = [];

 function updateSelectedList(value) {
   if (value == "all") {
       allFlag = !allFlag
       selected = []
   } else if (selected.includes(value)) {
       allFlag = false
       selected = selected.filter(s => s != value);
   } else {
     allFlag = false
     selected = [value, ...selected];
   }
 };

 function updateHighlightedTags(ts) {
     document.getElementById("term_all").setAttribute("data-selected", allFlag.toString())
     for (t of ts) {
         id_ = `term_${t}`
         v = selected.includes(t).toString()
         document.getElementById(id_)
               .setAttribute("data-selected", v)
   };
 }

 function updatePostsDisplayed() {
   posts = document.getElementsByClassName("post");
   for (post of posts) {
       tags = post.getAttribute("data-tags").split(",").filter(t => t != "")
       predicate = allFlag || tags.some(t => selected.includes(t))
       toDisplay = predicate ? "true" : "false"
       post.setAttribute("data-display", toDisplay)
   };
 };

function handleClick(value, ts) {
    console.log(value)
    console.log(ts)
   updateSelectedList(value)
   updateHighlightedTags(ts)
   updatePostsDisplayed()
 };

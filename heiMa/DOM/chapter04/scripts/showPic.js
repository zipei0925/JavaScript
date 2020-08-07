function showPic(wichPic) {
    var placeholder = document.getElementById("placeholder");
    var source = wichPic.getAttribute("href");
    placeholder.setAttribute("src", source);
    var text = wichPic.getAttribute("title");
    var description = document.getElementById("description")
    description.firstChild.nodeValue = text
    // alert(description.childNodes[0].nodeValue)
    // alert(description.firstChild.nodeValue)
}
    
// function countBodyChildren() {
//     var bodyElement = document.getElementsByTagName("body")[0];
//     alert(bodyElement.childNodes.length)
// }
// // 在加载页面时,返回body子元素的个数
// window.onload = countBodyChildren
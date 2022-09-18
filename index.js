var p = document.getElementById("count")
var count = 2

setInterval(() => {
    p.textContent = count
    count--
    if (count == -1) {
        p.textContent = "GO!"
        setTimeout(() => {
            p.parentNode.removeChild(p)
        }, 800);
    }
}, 800);

setTimeout(() => {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("main-container"))
    setTimeout(() => {
        document.getElementById("name-container").style.opacity = "100%"
        document.getElementById("span1").style.animationName = "float-right"
        setTimeout(() => {
            document.getElementById("span1").style.right = "0vw"
            document.getElementById("span2").style.animationName = "float-left"
            setTimeout(() => {
                document.getElementById("span2").style.left = "0vw"
                document.getElementById("span3").style.animationName = "float-right"
                setTimeout(() => {
                    document.getElementById("span3").style.right = "0vw"
                }, 1000);
            }, 1000);
        }, 1000);
    }, 500);
}, 4200);

// document.getElementsByTagName("body")[0].removeChild(document.getElementById("main-container"))
// document.getElementById("name-container").style.opacity = "100%"
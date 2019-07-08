// let current = new Date();

window.onload = function() {
    // alert(current.toLocaleString())
    let dateNode = document.getElementById("current");
    setInterval(() => {
        dateNode.innerText = new Date().toLocaleString();
    }, 1000)
}


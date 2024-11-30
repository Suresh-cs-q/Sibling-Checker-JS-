

var a = document.querySelectorAll('.hero');
if (a.length > 0) {
    if (a[0].previousElementSibling == null) {
        console.log("Sibling not present");
    } else {
        console.log(a[0].previousElementSibling);
    }
} else {
    console.log("No elements with the class 'hero' found.");
}

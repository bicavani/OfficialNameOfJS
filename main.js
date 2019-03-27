function checkName() {
    let name = document.getElementById("answer").value;
    let answerRight = name == "ECMAScript";
    if (answerRight)
        alert("Right");
    else
        alert("Didn't known? ECMAScript!");
}
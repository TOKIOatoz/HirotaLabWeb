var _checkedFalse = function() {
    document.getElementById("menu_check").checked = false;
};
for (let index = 0; index < 8; index++) {
    document.getElementsByClassName("content_link")[index].onclick = function() {
        _checkedFalse();
    };
}
var page = 1;
var list = null;
var loginContainer = null;
var beerListContainer = null;
$(function () {
    $.ajaxSetup({
        headers:
            { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
    });
    list = $('#beerList');
    loginContainer = $('#loginContainer');
    beerListContainer = $('#beerListContainer');
    $("#loginForm").submit(function (event) {
        event.preventDefault();
        login();
    });
    checkTokenValidity();
});
function showHideAlert(element, text, type) {
    var temp = element.find('[role=alert]').text(text);
    if (type == "show")
        temp.show()
    else
        temp.hide()
}
function showHideSpinner(element, type) {
    var temp = element.find('[name=spinner]');
    if (type == "show")
        temp.show()
    else
        temp.hide()
}
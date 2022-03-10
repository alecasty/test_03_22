function logout() {
    reqWithToken(urlLogout, {}, 'POST');
    postLogout();
}
function login() {
    showHideSpinner(loginContainer, "show");
    var data = {
        username: $('#username').val(),
        password: $('#password').val()
    }
    req(urlLogin, data, 'POST', {}).done(
        function (result) {
            sessionStorage.setItem('token', result);
            postLogin()
        }
    ).fail(
        function (jqxhr) {
            console.error(jqxhr)
            console.log(jqxhr.responseJSON.message);
            showHideAlert(loginContainer, jqxhr.responseJSON.message, "show");
            showHideSpinner(loginContainer, "hide");
        }
    )
}
function checkTokenValidity() {
    reqWithToken(urlCheckToken, { page: page }, 'POST').done(
        function () {
            postLogin()
        }
    ).fail(
        function () {
            postLogout();
        }
    )
}

function postLogin() {
    beerListContainer.show();
    loginContainer.hide();
    showHideAlert(loginContainer, '', "hide");
    showHideSpinner(loginContainer, "hide");
    getBeers()
}

function postLogout() {
    beerListContainer.hide();
    loginContainer.show();
    sessionStorage.removeItem("token");
}
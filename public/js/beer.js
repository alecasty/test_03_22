function printData(result) {
    list.empty();
    if (result.statusCode && result.statusCode == 400) {
        showHideAlert(beerListContainer, 'Page not found', "show");
    } else {
        showHideAlert(beerListContainer, '', "hide");
        $.each(result, function (index, value) {
            element = $('<li class="list-group-item"></li>').text(value['name']);
            list.append(element);
        })
    }
}
function next() {
    page = page + 1;
    updatePageCounter()
    getBeers()
}
function prev() {
    if (page > 1)
        page = page - 1;
    updatePageCounter()
    getBeers()
}
function updatePageCounter() {
    $('#pageCounter').text('Page ' + page);
}
function getBeers() {
    showHideSpinner(beerListContainer, "show")
    reqWithToken(urlBeers, { page: page }, 'GET').done(
        function (result, status, jqxhr) {
            console.log(status)
            console.log(jqxhr)
            printData(result);
            showHideSpinner(beerListContainer, "hide")
        }
    ).fail(function (jqxhr) {
        console.log(jqxhr)
        if (jqxhr.status == 401)
            postLogout();
        showHideAlert(beerListContainer, 'Request error', "show");
        showHideSpinner(beerListContainer, "hide")
    })
}
function reqWithToken(url, data, type) {
    var headers = {
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    }
    return req(url, data, type, headers)
}
function req(url, data, type, headers) {
    return $.ajax({
        url: url,
        type: type,
        headers: headers,
        data: data
    });
}
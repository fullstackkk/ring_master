const token = 'rnSCFERG6CBrtCY9kuBI'
const headers = {
    "Content-Type": "application/json",
    Authorization: ("Bearer " + token)
};

function request(
    { url, options }
) {

    return fetch('https://the-one-api.dev/v2/book')
        .then(data => data.json())
        .then(data => data.console.log(data));
}
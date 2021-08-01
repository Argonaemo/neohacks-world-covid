async function cariApi() {
    let input = document.getElementById('valueElement');
    console.log("hi");
    var inp = input.value;
    function searchCountry(keyword) {
        return fetch(`https://covid19.mathdro.id/api/countries/${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.confirmed) {
                    return Promise.resolve(responseJson);
                } else {
                    return Promise.reject(`Negara ${keyword} tak ditemukan`);
                }
            })
    }
    let res = await searchCountry(inp);
    var textSearched = document.getElementById('textnotyet');
    if (res) {
        textSearched.innerHTML = inp;
        // ========== chart sec ===========
        var ctx = document.getElementById('canvas').getContext('2d');
        
    }
}

window.onload = function () {
    let button = document.getElementById('pemicuEvent');
    console.log('hi');
    button.addEventListener('click', cariApi);
}
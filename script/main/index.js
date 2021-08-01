import '../component/kasus.js';
import '../component/search.js';
import DataSource from '../data/dataSource.js';

const main = () => {
    console.log('hai');
    const searchElement = document.querySelector('search-section');
    const kasusElement = document.querySelector('article-kasus');
    const onButtonSearchClicked = () => {
        DataSource.searchCountry(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = result => {
        let con = result.confirmed.value;
        let h = result.recovered.value;
        let m = result.deaths.value;
        let tgl = result.lastUpdate.substring(0, 10);
        let ctr = searchElement.value;
        kasusElement.kasus = { con, h, m, tgl };
        searchElement.country = ctr;
    };

    const fallbackResult = message => {
        searchElement.setErr = message;
    };

    searchElement.clickEvent = onButtonSearchClicked;

}

export default main;
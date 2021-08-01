class Searchto extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        console.log(10);
        this.renderAwal();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    set country(ctr) {
        this._ctr = ctr;
        this.render();
    }

    set setErr(msg) {
        this._msg = msg;
        this.renderError(msg);
    }

    get value() {
        return this.querySelector('#valueElement').value;
    }

    renderAwal(){
        this.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.6);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                align-self: center;
                margin-top: 10px;
                display: none;
            }
        </style>
        <section class="main-search">
        <div class="search-box">
        <input class="search-txt" id="valueElement" type="text" placeholder="Type to search...">
        <a href="#mainzz" class="search-btn" id="pemicuEvent">
            Ok
        </a>
        <h1>Current Country :<br>Not Search Yet</h1>
        </div>
        <h2 class="placeholder">Negara tak ditemukan<br>Coba gunakan nama Basis Inggrisnya: Italy, USA, dll</h2>
    </section>
        `
        this.querySelector("#pemicuEvent").addEventListener('click', this._clickEvent);
        ;
    }

    renderError(message) {
        this.innerHTML += `
        <style>
            .placeholder {
                display: inline;
            }
        </style>
        `;

        this.querySelector("#pemicuEvent").addEventListener('click', this._clickEvent)
    }
}

customElements.define('search-section', Searchto);
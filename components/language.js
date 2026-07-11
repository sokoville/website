class English extends HTMLElement {
	constructor() {
	    super();
	}
  
	connectedCallback() {
		this.innerHTML = `<span id="langselect" onclick="togglelang('en')"><a href="?l=en">English</a></span>`;
	}
}
  
class Italian extends HTMLElement {
	constructor() {
	    super();
	}
  
	connectedCallback() {
		this.innerHTML = `<span id="langselect" onclick="togglelang('it')"><a href="?l=it">Italiano</a></span>`;
	}
}

class German extends HTMLElement {
	constructor() {
	    super();
	}
  
	connectedCallback() {
		this.innerHTML = `<span id="langselect" onclick="togglelang('de')"><a href="?l=de">Deutsch</a></span>`;
	}
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const lang = urlParams.get('l')
  
if (lang) {
	document.documentElement.setAttribute("lang", lang);
} else {
	document.documentElement.setAttribute("lang", "en");
}
  
function togglelang(language) {
	document.documentElement.setAttribute("lang", language);
}
  
customElements.define('english-language', English);
customElements.define('italian-language', Italian);
customElements.define('german-language', German);
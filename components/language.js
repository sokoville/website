class Language extends HTMLElement {
	constructor() {
	  super();
	}
  
	connectedCallback() {
		this.innerHTML = `
		  <div id="langselect">
			  <li onclick="togglelang('en')"><a href="?l=en">English</a></li> 
			  <li onclick="togglelang('it')"><a href="?l=it">Italiano</a></li> 
		  </div>
	  `;
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
  
  customElements.define('language-component', Language);
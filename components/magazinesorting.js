class MagazineSort extends HTMLElement {
	constructor() {
	  super();
	}
  
	connectedCallback() {
		this.innerHTML = `
		  <div id="langselect">
		  	  <li onclick="togglelang('all')"><a href="?l=all">all</a></li> | 
			  <li onclick="togglelang('1930s')"><a href="?l=1930s">1930s</a></li> | 
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
	  document.documentElement.setAttribute("lang", "all");
  }
  
  function togglelang(language) {
	  document.documentElement.setAttribute("lang", language);
  }
  
  customElements.define('lang-select-component', MagazineSort);
  
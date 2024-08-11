class NavBar extends HTMLElement {
	constructor() {
	  super();
	}
  
	connectedCallback() { this.innerHTML = `
		<link rel="stylesheet" href="styles.css">

		<div id="navbar">
			<a href="index.html" title="go back home"><img src="images/ui/huis.gif" id="navbar_home"></a><br>
			<a href="linkzone.html" title="HYPERLINKS"><img src="images/ui/chainlink.png" id="navbar_links"></a>
		</div>
	`;}
}

customElements.define('navbar-component', NavBar);
class Footer extends HTMLElement {
	constructor() {
	  super();
	}
  
	connectedCallback() { this.innerHTML = `
		<footer>
			<br><small>last updated: 16.05.2025 (ver3)</small><br>
            <!--<div style="height: 31px; display: inline-block; vertical-align: top;">
            <span style="font-size: 24px;"><a style="text-decoration: none;" href="https://deadworld.de/">舎</a> </span>
            </div>-->
			<a href="https://www.twitter.com/"><img src="https://deadworld.de/badges/twitter.gif" alt="twitter"></a>
            <a href="https://letterboxd.com/iminthecut/" title="letterboxd"><img src="https://deadworld.de/badges/letterboxd.png" alt="letterboxd"></a>
			<!--<a href="https://discord.gg/"><img src="https://deadworld.de/badges/discord.gif" alt="discord server"></a>-->
			<a href="https://steamcommunity.com/profiles/76561198852125837/" title="play counter strike with me"><img src="https://deadworld.de/badges/playwithsteam.jpg" alt="steam"></a>
			<img src="https://deadworld.de/badges/anybrowse.gif" alt="">
			<a href="https://www.mozilla.org/nl/firefox/"><img src="https://deadworld.de/badges/anythingbut.gif" alt=""></a>
			<img src="https://deadworld.de/badges/cogs.gif" alt="">
			<a href="https://youtu.be/EDsc5A1LQMs?si=TyDRH-74LRuM67d_" title="counter strike source: a beautiful creation"><img src="https://deadworld.de/badges/cs.gif" alt="counter strike source"></a>
			<img src="https://deadworld.de/badges/fingerofgod.gif" alt="">
			<a href="https://www.youtube.com/watch?v=S5L3tESenlU" title="põgene vaba laps"><img src="https://deadworld.de/badges/howtobecomeanangel.gif" alt=""></a>
			<img src="https://deadworld.de/badges/mousepow.gif" alt="">
			<br>
		</footer>
	`;}
}

customElements.define('footer-comp', Footer);
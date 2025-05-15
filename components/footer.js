class Footer extends HTMLElement {
	constructor() {
	  super();
	}
  
	connectedCallback() { this.innerHTML = `
		<footer>
			<a href="https://letterboxd.com/iminthecut/">letterboxd</a> | 
			<a href="https://www.nytimes.com/subscription/redeem?campaignId=8WH8J&gift_code=0412a4eca912f48f">free nyt trial</a>
			<br><small>last updated: 13.05.2025 (ver3)</small><br>
			<a href="https://www.twitter.com/whenitstops" title="twitter is a terrible realm i inhabit"><img src="badges/twitter.gif" alt="twitter"></a>
			<!--<a href="https://discord.gg/" title="ugh"><img src="badges/discord.gif" alt="discord server"></a>-->
			<a href="https://steamcommunity.com/profiles/76561198852125837/" title="play counter strike with me"><img src="badges/playwithsteam.jpg" alt="profile steam"></a>
			<img src="badges/anybrowse.gif" title="optimized for nothing">
			<img src="badges/antinft.gif" alt="fuck nfts" title="ew">
			<a href="https://www.mozilla.org/nl/firefox/" title="mozilla firefox"><img src="badges/anythingbut.gif" alt="anything but chrome"></a>
			<a href="https://www.debian.org/index.nl.html" title="linux is good, i like linux"><img src="badges/poweredbydeb.gif" alt="powered but debian linux"></a>
			<img src="badges/cogs.gif">
			<a href="https://youtu.be/EDsc5A1LQMs?si=TyDRH-74LRuM67d_" title="counter strike source: a beautiful creation"><img src="badges/cs.gif" alt="counter strike source"></a>
			<img src="badges/fingerofgod.gif">
			<a href="https://www.youtube.com/watch?v=S5L3tESenlU" title="põgene vaba laps"><img src="badges/howtobecomeanangel.gif"></a>
			<img src="badges/mousepow.gif">
			<br>
		</footer>
	`;}
}

customElements.define('footer-component', Footer);
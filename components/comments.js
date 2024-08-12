const s_nameId = '1395261069';
const s_textId = '1007718193';
const s_sheetId = '1TT3XDPxiuQzVrhKWI5Zqzf6rkQHrdxeXyZMfd-s_elU';

const s_commentsPerPage = 8;
const s_commentsOpen = true;



class Comments extends HTMLElement {
	constructor() {
	  super();
	}
  
	connectedCallback() { this.innerHTML = `
		<div id="comments" style="width: 40%; padding-left: 30%;">
			<form id="comment" method="post" target="hiddenIFrame" onSubmit="doSubmit();" action="https://docs.google.com/forms/d/e/1FAIpQLSeOuc8fWSWlMClU_rPn2nh7iTmXoRmmLwcC23xosuMcXx3cdQ/formResponse">
				<div>
					Comment:
					<input type="text" name="entry.1007718193" name="entry.1007718193" maxlength="140" minlength="3" value="" style="width: 40%" required>
					<input type="submit" value="Comment"><br>
					<span style="font-size: .75em">(prefer English or Nederlands language)</span>
				</div>
			</form>
			<br>
			<div id="comments_list" style="text-align: left;"></div>
			<iframe id="hiddenIFrame" name="hiddenIFrame" style="display: none;"></iframe>
		</div>
	`;}
}

customElements.define('comments-component', Comments);

function doSubmit() {
	document.getElementById("comment").submit();
	getComments();
}

function getSheet(url) {
	return new Promise(function (resolve, reject) {
		fetch(url).then(response => {
            if (!response.ok) {reject('Could not find Google Sheet with that URL')}
            else {
                response.text().then(data => {
                    if (!data) {reject('Invalid data pulled from sheet')}
                    resolve(data);
                })
            }
        })
	})
}

function getComments() {
	const retrievedSheet = getSheet("https://docs.google.com/spreadsheets/d/1TT3XDPxiuQzVrhKWI5Zqzf6rkQHrdxeXyZMfd-s_elU/gviz/tq?");

	retrievedSheet.then(result => {
		const json = JSON.parse(result.split('\n')[1].replace(/google.visualization.Query.setResponse\(|\);/g, ''));

		let comments = [];

		if (json.table.parsedNumHeaders > 0) {
			for (r = 0; r < json.table.rows.length; r++) {
				let comment = {}
				for (c = 0; c < json.table.cols.length; c++) {
					let val2;
					if (!json.table.rows[r].c[c]) {val2 = ''}
					else {val2 = json.table.rows[r].c[c].v}

					comment[json.table.cols[c].label] = val2;
				}
				comment.Timestamp2 = json.table.rows[r].c[0].f;
				comments.push(comment);
			}
		}

		if (comments.length == 0 || Object.keys(comments[0]).length < 2) { // Once again, Google Sheets can be weird
			c_container.innerHTML = s_noCommentsText;
		} else {
			let child = document.getElementById("comments_list").lastElementChild;
       		while (child) {
            	document.getElementById("comments_list").removeChild(child);
            	child = document.getElementById("comments_list").lastElementChild;
        	}

			for (i = 0; i < comments.length; i++) {
				console.log(comments[i]["Text"])
				console.log(comments[i]["Timestamp2"])

				var comment_line = document.createElement("div");
				comment_line.className = "comment_line"
				document.getElementById("comments_list").appendChild(comment_line)
				
				var span1 = document.createElement("span")
				span1.appendChild(document.createTextNode(comments[i]["Timestamp2"]))
				span1.style = "color: grey;"

				var span2 = document.createElement("span")
				span2.appendChild(document.createTextNode(comments[i]["Text"]))

				comment_line.appendChild(span1)

				if (!comments[i]["Name"] == "") {
					comment_line.appendChild(document.createTextNode(" (".concat(comments[i]['Name'], ') ')))
				} else {
					comment_line.appendChild(document.createTextNode(" (anon) "))
				}

				comment_line.appendChild(span2)
				document.getElementById("comments_list").appendChild(comment_line)
			}

			document.getElementById("comment").reset();
		}
	})
}


getComments();

//ADD RESETTING WHEN YOU PRESS SUBMIT THEN GETTING THE COMMENTS AGAIN OR APPENDING YOUR COMMENT TO THE END EITHER WAY
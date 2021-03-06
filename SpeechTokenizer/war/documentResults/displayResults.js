/**
 * In dieser Klasse werden die Dokumente angezeigt.
 * Diese Klasse wird von der Funktion <code>doPoll()</code> aufgerufen.
 * @author Benjamin Mateja, Verena Hofmann
 */

var displayText = "<ul>";

function GetResults(responsedata){
	//create documentarray for documents
	var DocumentTempArray = new Array();
	
	//Variable i für die Schleife
	var i;
	var b;
	var googlePath = "https://drive.google.com/open?id=";
	var userHangoutId = getHangoutId();
	var userUniqueId = getUniqueId();

	for (b = 0; b <responsedata.documents.length; b++){
			
		/**
		 * Hier wird überprüft, ob das Dokument zur Hangouts Sitzung passt.
		 * Ist dies der Fall, wird das Objekt erweitert und in das DocumentTempArray gepushed.
		 */
		if (responsedata.documents[b].hangoutsId == userHangoutId){
			responsedata.documents[b].stringlink = googlePath + responsedata.documents[b].drivePath;
			var documentName = responsedata.documents[b].documentName
			responsedata.documents[b].show = documentName.link(responsedata.documents[b].stringlink);
			DocumentTempArray.push(responsedata.documents[b]);
		} else {
		}
	}
	/**
	 * Das DocumentTempArray zeigt wenn es leer ist einen DummyText an.
	 * Ist das Array befüllt, werden die Dokzumente angezeigt.
	 */
	if (DocumentTempArray.length == 0){
		displayText = "";
		displayText = "Bisher wurden leider keine passenden Dokumente gefunden ..."
		displayText = capitalize(displayText);
		showdocument.innerHTML = linebreak(displayText);
	} else {
		displayText ="";
		displayText = "<ul>";
		for (i = 0; i < DocumentTempArray.length; i++){
			displayText += "<li><a href='" + DocumentTempArray[i].stringlink + "' target='_blank'>" + DocumentTempArray[i].documentName + "</a></li>";
		}
		displayText += "</ul>";
		displayText = capitalize(displayText);
		showdocument.innerHTML = linebreak(displayText);
		DocumentTempArray = [];
	}	
}

/* Durch linebreak und capatilize wird Text eingeblendet */

function linebreak(displayText) {
	return displayText;
}

function capitalize(displayText) {
	return displayText;
}

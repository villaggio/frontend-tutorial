/*
Questa pagina ha lo scopo di caricare
da servizi esterni la struttra della
tabella (rappresentata dalle colonne)
e il suo contenuto (le righe)
*/
var serviceColumns = "columns.json";
var serviceRows = "rows.json";

a.tabellone = {}
a.tabellone.columns = [];
a.tabellone.rows = [];
a.tabellone.binding = {};

a.tabellone.display = {
	"string": function(input){
		return $("<td>").text(input);},
	"boolean": function(input){
		var index = input?1:0;
		var color = ["red","green"];
		var $i = $("<i>").addClass("icon-signal")
			.css("color", color[index]);
		return $("<td>").addClass("w3-center").append($i);
	},
	"integer": function(input){
		return $("<td>").addClass("w3-center")
		.text(input);}
};

function init(){
	var data = a.tabellone;
	if(! loadData(data,"columns", serviceColumns)){
		alert("Problema caricamento " +
			serviceColumns);
		return;
	}
	data.binding = initBinding(data);
	if(! loadData(data,"rows", serviceRows)){
		alert("Problema caricamento " +
			serviceRows);
		return;
	}
	testGetSetInfo(data);
	populate(data);
}

// caricamento dati
// serviceName: string nome dell servizio
// return true se eseguito con successo
function loadData (data, key, serviceName) {
	$.ajax({async:false, dataType:"json", url:'service/'+serviceName})
		.done(function(res){data[key]=res;});
	// chiamata jquery ajax
	// se servizio columns popola binding
	return true;
}

/**
*	Inizializzo un nuovo array per recupare
*	le info relative ad ogni riga partendo dalla
*	chiave utilizzata
*/
function initBinding(data){
	var binding = {};
	// popolo l'array binding a partire
	// dai dati in columns
	for (i=0;i<data.columns.length;i++){
		binding[data.columns[i].id] =
			data.columns[i].bind;
	}
	return binding;
}

/** ordino le colonne secondo il campo position
*	@input data [object] i dati che conservano gli array 
* 		della tabella
*	@output 
*/
function sortColumns(data){
	data.columns.sort(function(a,b){
		return (a.position - b.position);
	});
}

// recupera info da una riga usando
// binding per conoscere la posizione
// della chiave
function getInfo (data, row, key) {
	return data.rows[row][
				data.binding[key]];
}

// valorizza info in una riga usando
// binding per conoscere la posizione
// della chiave
function setInfo (data, row, key, value) {
	data.rows[row][data.binding[key]] =
		value;
}

function testGetSetInfo(data){
	// genero in output una stringa che
	// visualizza info modificate dai dati
	// originali
	var eta = getInfo(data, 0, "eta");
	var output = getInfo(data, 0, "nome") +
					" ha " +
					eta +
					" anni.";
	output += " E' passato un anno! ";
	setInfo(data, 0, "eta", eta+1);
	output += getInfo(data, 0, "nome") +
					" ha " +
					getInfo(data, 0, "eta") +
					" anni.";
	$(".output").text(output);
}

/** scrive nella tabella tutte le
* colonne e righe disponibili
* dall'attuale versione di data
*/
function populate(data){
	sortColumns(data);
	populateTHead(data);
	populateTBody(data);
}

/**
*	Popolo la prima riga della tabella
*	contente le descrizioni di colonne
*/
function populateTHead(data){
	$tr = $('<tr>');
	for(i=0;i<data.columns.length;i++){
		var column = data.columns[i];
		$('<th>').text(column.name)
			.appendTo($tr);
	}
	purgeTHead();
	$('.tabellone > thead').append($tr);
}

function purgeTHead(){
	$('.tabellone > thead').html("");
}

function purgeTBody(){
	$('.tabellone > tbody').html("");
}

/**
*	Popolo tutte le righe della tabella
*	prendedo le colonne come riferimento
*	per l'ordinamento dei dati da visualizzare
*/
function populateTBody(data){
	purgeTBody();
	for(i=0;i<data.rows.length;i++){
		$tr = $('<tr>');
		for(j=0;j<data.columns.length;j++){
			var column = data.columns[j];
			var txt = getInfo(data, i, column.id);
			//$('<td>').text(txt).appendTo($tr);
			data.display[column.type](txt)
				.appendTo($tr);
		}	
		$('.tabellone > tbody').append($tr);
	}
}

/**
* Eseguire il codice in textarea e ricaricare
* la tabella
*/
function update(){
	var data = a.tabellone;
	var code = $('.codeToExe').val();
	eval(code);
	populate(data);
	$('.codeToExe').val("");
}

/**
*	Questa funzione dovrà restituire la colonna
*	relativa con proprietà name = nome
*/
function findColumn (data, nome){
	/*
	//	prima versione dell esercizio
	for(i=0;i<data.columns.length;i++){
		if(data.columns[i].name==nome){
			return data.columns[i];
		}
	}
	return null;
	*/
	// seconda versione dell esercizio
	return data.columns.find(
		function(a){return a.name==nome;});
}

init();
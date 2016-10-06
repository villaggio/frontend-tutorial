var a = {}
a.s='https://jsonplaceholder.typicode.com/'  //url da dove recupererò i dati. 
a.v='pgs/' // cartella dove vengono salvati i frammenti html da caricare in "#main"
a.p=false
a.ver='0.0.1' //versione dell'applicazione
a.msg = function(m){
	//visualizza messaggi di errore, avvertimento, eccetera. 
	//TODO: Ora come ora utilizzamo l'alert, ma in futuro potremmo ad es. far comparire un messaggio scorrevole
	alert(m)
}
a.load = function (p) {
	//gestisce il caricamento dinamico dei frammenti html in #main.
	a.pg = p //a.pg è una variabile che conterrà sempre il nome della pagina corrente
	$('nav a').removeClass('active') 
	$('#a-' + p).addClass('active')
	try {
		$('.dyn').load(a.v + p + '.html')
	} catch (e) {
		console.log('Error:',e)
		a.notFound()
		return false
	}
}
a.notFound=function(){
  $('.dyn').load(a.v+'notfound.html')
}
a.startApp = function () {
	//inibisco la cache sui dati che carico da remoto
	$.ajaxSetup({cache:false})
	
	//rotte 
	Path.map("#/home").to(function () {
		a.load('home')
	}) 
	Path.map("#/:pag(/:id)").to(function () {
		a.p[this.params.pag + '_id'] = this.params.id
		a.load(this.params.pag)
	})	
	Path.root("#/home") // rotta di default: se non viene specificata alcuna route nell'url carica la home
	Path.rescue(a.notFound) // se la rotta specificata non è valida esegue la funzione a.notFound
	Path.listen() //ENTRA IN AZIONE!
	
	$('#nav').load('_nav.html') //carica la barra di navigazione (statica) in maniera dinamica (così, per strafare)
}

$(a.startApp) //avvia l'app.

/***

CREDITS
Per il routing:

https://github.com/mtrpcic/pathjs

***/ 
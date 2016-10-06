/*
	1.
	due variabili: arr e obj (rispettivamente array e oggetto) arr= []; obj={}
	2.
	Utilizziamo il metodo push per inserire almeno 5 valori all’interno dell’array
	(all’interno di un ciclo for).
	Devono risultare dalla moltiplicazione dell’indice per una costante (es.: i*2)
	3.
	Attraversiamo l’array con un ciclo per inserire interattivamente all’interno 
	dell’oggetto obj i valori come chiave e gli indici come valori.
	4.
	Costruiamo un nuovo array inserendo al valore le chiavi delle singole proprietà 
	dell’oggetto, e come valore concateniamo alla chiave una stringa costante 
	a piacere (es.: _). Il nuovo array sarà costituito da un insieme chiavi-valore. 
	*/
	
	// 1.
	var arr = [];
	var obj = {};

	// 2.
	var per = 2;

	for (i=0 ; i < 5; i++){
		arr.push( i * per );
	}
	console.log(arr);

	// 3.
	for (i=0 ; i < arr.length; i++){
		// inseriamo come chiave il valore dell array alla posiozione i
		// inseriamo come valre la posizione (indice) relativa dell array
		obj[ arr[i] ] = i;
	}
	console.log(obj);

	// 4.
	var arr2 = [];

	for (var key in obj){
		// key ad ogni ciclo sara valorizzata con una chiave (property name)
		// dell oggetto obj
		arr2[obj[key]] = key + "_";
		// inserisco alla posizione relativa al valore della proprietà la la property 
		// name concatenata ad un _
		// in pratica dal valore che nel primo array corrispondeva all indice iniziale
	}
	console.log(arr2);

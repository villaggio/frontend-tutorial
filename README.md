# Tutorial base per lo Sviluppo Web (JS+JQuery)

Questo progetto è stato realizzato e condiviso in classe allo scopo di offrire agli studenti un contesto di lavoro e studio il più possibile vicino al contesto operativo con cui potranno misurarsi durante uno stage formativo come sviluppatori presso una azienda di informatica.
Finalità:

  - Pratica nelle operazioni base di GIT su sorgenti condivisi
  - Esempi di codice organizzati a funzioni opportunamente commentati
  - Cicli e manipolazione di array e oggetti in javascript (arrayEse.js)
  - Elaborazione di array in un esercizio pratico (tabellone.js + tabellone.html)
  - Realizzazione di una pagina CRUD (CReate Update Delete) gestito da plugin esterni (tabellone_bootstrap.js e tabellone_bootstrap.html)
 
Per eseguire anche a casa questo applicativo si suggerisce un IDE come [Netbeans](https://netbeans.org/downloads/8.0.2/) in grado di gestire *commit / push / pull* con GIT e lanciare un webserver su cui testare il proprio lavoro


### Versionamento

Attualmente il progetto è diviso in due branch:
- **master** contiene il codice realizzato dal docente o integrato dal lavoro svilto dagli allievi. Può essere scaricato da tutti ma non riceve modifiche dagli studenti
- **develop** raccoglie anche le modifiche effettuate dal gruppo di lavoro e permette a tutti di lavorare autonomamente
- ** ??? ** E' consigliato agli studenti di generare una propria branch in modo da dare a tutti la possibilità si raccogliere le soluzione agli esercizi proposte dai compagni che di generarne una propria in autonomia

### Plugins

Per la realizzazione dei due tabelloni sono stati introdotti alcuni plugins e librerie

* [glyphicons](http://getbootstrap.com/components/#glyphicons)
* [fontawsome](http://fontawesome.io/icons/)
* [bootstrap-datepicker](http://www.eyecon.ro/bootstrap-datepicker)
* [bootstrap-table](http://bootstrap-table.wenzhixin.net.cn/documentation/
)
* bootstrap 3.3.7 css (http://getbootstrap.com/css/)
* bootstrap 3.3.7 js (http://getbootstrap.com/components/)

### Esercizi

* [Tabellone v1.1] - Provare la textarea in grado di eseguire codice javascript: il comando:
```javascript
findColumn(data, "Nome").position += 5
```
ad esempio sposterà una colonna
* [Tabellone v1.2] - Creare la funzione **findRow(...)** seguendo lo stesso principio applicato per **findColumn(...)** in modo da poter manipolare un elemento della tabella con il seguente comando:
```javascript
setInfo(data, findRow(data, "nome", "Mario"), "sesso", value)
```
* [Tabellone v2.1] - Provare ad aggiungere una nuova colonna a piacere in modo che anche il form sia in grado di valorizzarla (*ad esempio: Indirizzo*)
* [Tabellone v2.2] - Estendere il tabellone aggiungendo la possibilità di cancellare delle righe facendo doppio click su una riga.
**Suggerimento:** dal [manuale del plugin](http://bootstrap-table.wenzhixin.net.cn/documentation/) cercare la descrizione dell evento **onDblClickRow**

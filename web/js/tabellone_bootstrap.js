/*
Questa pagina ha lo scopo di caricare
da servizi esterni la struttra della
tabella (rappresentata dalle colonne)
e il suo contenuto (le righe)

http://bootstrap-table.wenzhixin.net.cn/documentation/

*/
var serviceColumns = "columns.json";
var serviceRows = "rows.json";

a.tab = {}
a.tab.columns = [];
a.tab.rows = [];

a.tab.init = function (){
	var data = a.tab;
	
	data.rows = [{
		id:1,name: "Napoleone",
		surname: "Bonaparte",
		level: 3,
		sex: "male",
		online: "offline",
		born: "15/08/1769"
	}];
		
	data.columns = [{
                field: 'id',
                title: 'Item ID'
            }, {
                field: 'name',
                title: 'Nome'
            }, {
                field: 'surname',
                title: 'Cognome'
            }, {
                field: 'level',
                title: 'Livello'
            }, {
                field: 'sex',
                title: 'Sesso'
            }, {
                field: 'online',
                title: 'Online'
            }, {
                field: 'born',
                title: 'Nato il'
	}];
		
	var $table = $('#tabellone').bootstrapTable({
			showRefresh: 1,
			data: data.rows,
            locale: "it-IT",
            search: true,
            showToggle: true, 
            showColumns: true,
            mobileResponsive: true,
            columns: data.columns
        });
		
	$("#addStudent").submit(function(e){
		e.preventDefault(); // prevent form submit from HTML
		data.addStudent($table);		
	});
}

/**
* Read form student and add it to $table
*/
a.tab.addStudent = function (table)
{
	var $form = $("#addStudent");
	var $inputs = $form.find(':input');

	// prepare a student to be pushed in the table reading data in the $inputs
	var student = {};
	$inputs.each(function() {
		if(this.type == "radio"){
				if($(this).is(':checked'))
					student[this.name] = $(this).val();
		}else if(this.type != "submit"){
			student[this.name] = $(this).val();
		}
	});
	// append in table
	table.bootstrapTable('append', student);
}

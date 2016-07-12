var Employee = function(name,id){
	this.name = name;
	this.id = id;
}

var AcmeDb = function(){
	this.employees = [];
}

AcmeDb.prototype.addEmployee = function(name,id){
	var newEmployee = new Employee(name, id);
	this.employees.push(newEmployee);
}

AcmeDb.prototype.getEmployees = function(){
	return this.employees.sort(function compare(a,b) {
	  if (a.name < b.name)
	    return -1;
	  if (a.name > b.name)
	    return 1;
	  return 0;
	});
}

AcmeDb.prototype.getEmployee = function(id){
	for (var i = 0; i < this.employees.length; i++) {
		if(this.employees[i].id === id){
			return this.employees[i];
		}
	}
}

AcmeDb.prototype.deleteEmployee = function(empl){
	for (var i = 0; i < this.employees.length; i++) {
		if(this.employees[i] === empl){
			this.employees.splice(i,1);
		}
	}
};

AcmeDb.prototype.groupedEmployees = function(){
	var emplObj = { a:[],b:[],c:[],d:[],e:[],f:[],g:[],h:[],i:[],j:[],k:[],l:[],m:[],n:[],o:[],p:[],q:[],r:[],s:[],t:[],u:[],v:[],w:[],x:[],y:[],z:[] };
	this.employees.forEach(function(x){
		var letter = x.name[0];
		emplObj[letter].push(x);
	});
	return emplObj;
};
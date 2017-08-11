function AppViewModel(){
	var self = this;
	
	self.people = ko.observableArray([
		{ name : 'apexa'},
		{ name : 'kashu'},
		{ name : 'ronak'}
		]);
	self.addPerson = function(){
		self.people.push({name :"new at" + new Date()});
	};
	self.removePerson = function(){
		self.people.remove(this);
	}

}
ko.applyBindings(new AppViewModel());
var Viewmodel = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Abby");
	this.imgSrc = ko.observable("img/cat.jpg");
	this.Nickname = ko.observableArray(["nono,noni"]);

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};

}
ko.applyBindings(new Viewmodel());
var Cat = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Abby");
	this.imgSrc = ko.observable("img/cat.jpg");
	this.Nickname = ko.observableArray(["nono,noni"]);

	this.title = ko.computed(function(){
		var title;
		var click = this.clickCount();
		if(click < 10){
			title = "new born"
		}
		else if (click < 50){
			title = "infant"
		}
		else if (click <100){
			title = "child"
		}
		else if (click < 200){
			title = "teen"
		}
		else if (click <300){
			title = "men"
		}
		return title;
	}, this);

}

var Viewmodel = function(){
	var self = this;
	this.currentCat = ko.observable(new Cat());
	this.incrementCounter = function(){
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	};

};
ko.applyBindings(new Viewmodel());
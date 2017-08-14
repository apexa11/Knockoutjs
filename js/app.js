var initialCats = [
        {
            clickCount : 0,
            name : "pussy",
            imgSrc : 'img/cat.jpg',
        
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/cat1.jpg',
            
        },
        {   
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/cat2.jpg',
            
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/cat3.jpg',
            
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/cat4.jpg',
            
        }


    ]



var Cat = function(data){
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.Nickname = ko.observableArray(data.Nickname);

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
	this.currentCat = ko.observable(new Cat({
		clickCount : 0;
		name : "abby";
		imgSrc : "img/cat.jpg";
		Nickname : ['noni', 'nono'];

	}));
	this.incrementCounter = function(){
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	};

};
ko.applyBindings(new Viewmodel());
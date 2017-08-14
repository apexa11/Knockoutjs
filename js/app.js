var initialCats = [
        {
            clickCount : 0,
            name : "pussy",
            imgSrc : 'img/cat.jpg',
            Nickname : ['nono,noni']
        
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/cat1.jpg',
            Nickname : ['tiggi']
            
        },
        {   
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/cat2.jpg',
            Nickname :['sabby']
            
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/cat3.jpg',
            Nickname :['shoddy']
            
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/cat4.jpg',
            Nickname :['zzzzz']
            
        }


    ];



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

};

var Viewmodel = function(){
	var self = this;
	this.CatList = ko.observableArray([]);
	initialCats.forEach(function(catItem){
		self.CatList.push(new Cat (catItem)
	})

	this.currentCat = ko.observable(this.CatList() [0]);

	this.incrementCounter = function(){
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

};
ko.applyBindings(new Viewmodel());
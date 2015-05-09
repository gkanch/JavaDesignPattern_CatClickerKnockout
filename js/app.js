var Cat = function(data) {
	
	// *** Observables & Observable Array ***
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknamesArray = ko.observableArray(data.nicknames);
	
	this.title = ko.computed(function() {
		var title = null;
		var clicks = this.clickCount();
		if (clicks > 500) {
			title = 'Ninja';
		} else if (clicks > 200) {
			title = 'Adult';
		} else if (clicks > 100) {
			title = 'Teen';
		} else if (clicks > 50) {
			title = 'Child';
		} else if (clicks > 10) {
			title = 'Infant';
		} else {
			title = 'Newborn';
		}
		return title;
	}, this);
}

var ViewModel = function() {
	var self = this; /* self points to ViewModel */
	
	this.currentCat = ko.observable( new Cat({
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: 'https://www.flickr.com/...',
		nicknames: [
			{ name: 'Tabtab', id: 121 },
			{ name: 'T-bone', id: 122 },
			{ name: 'Mr. T', id: 123}
		]
	}) );
	
	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());


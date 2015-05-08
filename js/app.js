var Cat = function() {
	// *** Observable Array ***
	this.nicknamesArray = ko.observableArray([
		{ name: "Alpha", id: 121},
		{ name: "beta", id: 122},
		{ name: "Mega", id: 123},
		{ name: "Theta", id: 124},
		{ name: "Omega", id: 125}
	]);

	// *** Observables ***
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('');
	
		/*clickCounter++;
		var clickCounter = 0;
		if (clickCounter > 30) {
			this.level('young adult');
		} 
		else if (clickCounter > 20) {
			this.level('teen');
		}
		else if (clickCounter > 10) {
			this.level('baby');
		}*/
	
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
	this.currentCat = ko.observable( new Cat());
	
	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());


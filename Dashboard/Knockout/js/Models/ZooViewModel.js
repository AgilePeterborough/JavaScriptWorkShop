var ZooViewModel = function(){
    
    this.PeopleExpectedToday =  ko.observable(4304);

    this.TodaysTarget = ko.observable(2300);

    //this.Animals
};

ko.applyBindings(new ZooViewModel());

var ZooViewModel = function(){

	var self = this;
    
    self.PeopleExpectedToday =  ko.observable(4304);

    self.TodaysTarget = ko.observable(2300);

    self.Food = ko.observable(40000);

    self.NumberOfMedKits = ko.observable(45);

    //Animals at the zoo
    self.Animals = ko.observableArray();

    //Notifications for the dashboard
    self.Notifications = ko.observableArray();

    //Make AJAX request to get meerkat data
    self.GetMeerkats = function(){
      $.ajax({
	        url: "/getAnimals",
	        success: function(animals){
	        	ko.utils.arrayForEach(animals, function(animal) {
                	self.Animals.push(animal);
              	});
	        }
    	});
    };

    self.GetNotifications = function(){
      $.ajax({
	        url: "/getNotifications",
	        success: function(notifications){
	        	ko.utils.arrayForEach(notifications, function(notification) {
                	self.Notifications.push(notification);
              	});
	        }
    	});
    };

    self.Init = function(){
    	self.GetMeerkats();
    	self.GetNotifications();
    }

    self.Init();

    //Ideas to get going
    //[x] - Maybe have a formater to format the numbers on the dashboard (e.g 40000 becomes 40,000);
    //[x] - Using the API provided make some more requests and bind up the dashboard with real requests
    //[x] - Bind notifications up with the data from the server? Change the number counter on it when they are read?
    //[x] - Make the drop down functionality (order by, name, value, count) work using filtering/sorting
    //[x] - Allow users to change the widgets? Close them, or move them?
    //[x] - Make the more info buttons links work on the four top widgets
    //[x] - Using server data or your mock data make some more widgets. Look on web for visualisation tools to help?
    //[x] - Open up the server.js node file and try add websockets to the dashboard? (look at socket.io to get started)
};

ko.applyBindings(new ZooViewModel());

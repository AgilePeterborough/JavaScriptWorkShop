function mockData()
{
	return {
		getNotifications: function(){
			return [
			{
				"title": "Server Crashed",
				"date": "01-01-2014 23:32:00"
			},
			{
				"title": "Meerkat Died",
				"date": "01-03-2014 23:32:00"
			},
			{
				"title": "Sold Over 1000 toys",
				"date": "02-04-2014 10:32:00"
			},
			{
				"title": "Sold 10 new toys",
				"date": "02-03-2014 07:32:00"
			},
			{
				"title": "Server not responding",
				"date": "01-03-2014 23:32:00"
			}
			]
		},
		getTimeline: function(){
			return [
			{
				"title": "Plush new pad for pygmy hippos",
				"date": "14-04-2014 13:25:20",
				"description": "Luxury is the name of the game at our newest exhibit – a plush pad for pygmy hippos, Thug and Nicky. The lifelong companions are upping sticks and moving into a brand new home which opens to the public on Saturday 5 April, joining the giraffes, zebras, and African hunting dogs in our Into Africa exhibit."
			},
			{
				"title": "Summer Showcase at ZSL London Zoo",
				"date": "10-04-2014 13:25:20",
				"description": "On Wednesday 26th March, ZSL London Zoo opened its doors to 350 event bookers for a Summer Showcase. It was the Zoo’s second large-scale private viewing since the opening of the brand new Terrace Restaurant and newly refurbished Prince Albert Suite. These stunning spaces are both housed in the historic Regent’s Building in the heart of the Zoo. The Terrace Restaurant, which features a double height 40ft ceiling and a special mezzanine level, is a fantastic space that can hold up to 400 guests and the Prince Albert Suite is the perfect setting for a summer party with its spectacular newly built roof terrace overlooking Penguin Beach and Regent’s Park. "
			},
			{
				"title": "New Meet the Animals experiences launching at Zoo",
				"date": "10-03-2014 12:20:00",
				"description": "This spring ZSL London Zoo is launching six incredible new Meet the Animals experiences, giving visitors the chance to get closer to their favourite animals than ever before."
			}
			]
		},
		getVisitors: function(){
			return {
				"London": 3000,
				"Peterborough": 1300,
				"Leeds": 700
			}
		},
		getAnimals: function(){
			return [
			{
				"type": "Monkeys",
				"count": 40,
				"pricePerAnimal": 40
			},
			{
				"type": "Tigers",
				"count": 10,
				"pricePerAnimal": 20
			},
			{
				"type": "Giraffe",
				"count": 45,
				"pricePerAnimal": 20
			},
			{
				"type": "Horse",
				"count": 55,
				"pricePerAnimal": 20
			},
			{
				"type": "Emu",
				"count": 55,
				"pricePerAnimal": 20
			},
			{
				"type": "Eagle",
				"count": 55,
				"pricePerAnimal": 20
			},
			{
				"type": "Goat",
				"count": 5,
				"pricePerAnimal": 40
			},
			{
				"type": "Wolf",
				"count": 56,
				"pricePerAnimal": 15
			}
			]
		}
	}
}

module.exports = mockData();

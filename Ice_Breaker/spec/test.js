/*
	Welcome to the first What the HTML? - JavaScript Workshop

	First thing we need to do is fix these broken tests. I'm no good at JavaScript and my boss needs them next week.
	Help me out, and afterwards to can start to look at some cool stuff :).

	Thanks,
	JS Workshop Team

	Note : These tests and implementation are not perfect, just an icebreaker to get everybody's brains warmed up

*/

'use strict';

(function () {
    describe('JavaScript workshop test suite', function () {

            it('should do basic math and return 6', function () {

            	var x = '5';

            	var result = x + 1;

            	expect(result).toEqual(6);
            });

            it('should do basic math and return 36', function () {

            	var result = x * 6;

            	expect(result).toEqual(36);
            });

            it('should multiply two numbers together and return the value', function () {

            	var result = function(a, b){
            		a * b;
            	}

            	expect(result(5, 5)).toBe(25);
            });

            it('should display a greeting message with two names', function(){
            	
            	function Person(name){
  					this.name = name;
				}

				Person.prototype.greet = function(otherName){
				  return "Hi " + otherName + ", my name is " + name;
				}

				var person = new Person('Matt');
				var result = person.greet('David');

				expect(result).toBe('Hi David, my name is Matt');

            });

            it('result should set test to 20', function () {

            	var test = 10;

            	var result = function(a, b){
            		test = 20;
            	}

            	expect(test).toBe(20);
            });

            it('should return the value to two fixed decimal', function () {

            	//orginal value
            	var value = 10.4354;

            	//convert any number to fixed number
            	var convert = function(number){
            		return number.toFixed();
            	}

            	//convert value to fixed value.
            	convert(value);

            	var expectedResult = 10.44;

            	expect(value).toBe(expectedResult);
            });


            it('Calculator should add two numbers and handle exceptions', function(){

            	function Calculator(){
				}

				var calc = new Calculator();

            	expect(calc.Add(4, 5)).toBe(9);

            });

            it('Calculator should subtract two numbers together and handle exceptions ', function(){

				var calc = new Calculator();

            	expect(calc.Subtract(10, 4)).toBe(6);
            	expect(calc.Subtract("0", "0")).toBe(null);
            	expect(calc.Subtract(5)).toBe('Please provide two numbers');
            	expect(calc.Subtract().toBe('Please provide some numbers'));

            });

            it('getAddress on the Address object should return the given address', function(){

            	//Create the Address object
            	function Address(address, city, country){
            		this.address = address || 'Bakewell Road';
            		city = city || "Leeds";
    			}

    			//GetAddress function on the Address Object
    			Address.prototype.getAddress = function(){
    				return this.address + ", " + this.city + ", " + this.country;
    			}

    			//Create Address
    			var myAddress = new Address();

    			//Get the Address
    			var result = myAddress.getAddress();

    			//TODO: Why doesnt this work? Let fix it!
    			expect(result).toBe('Bakewell Road, Peterborough, England');

            });

            it('sortAlphabetically should sort the given array Alphabetically ', function(){

            	//List of people to work with
            	var people = ['Bob', 'Dave', 'Ben', 'Matt', 'Robin', 'Henry', 'Steve', 'Bill'];

            	//Create new sorter
            	var sorter = new Sorter();

            	//Sort the names
            	var result = sorter.sortAlphabetically(people);

				expect(result).toBe('Ben, Bill, Bob, Dave, Henry, Matt, Robin, Steve');
            });

            it('string replacer should replace a given word in a sentance', function(){

            	//Our basic StringReplacer
            	StringReplacer = function(){
            	};

            	StringReplacer.prototype.replace() = function(match, word, sentance){
            		//Maybe we should do something here?
            		return sentance;
            	}

            	//Create new instance of replacer
            	var stringReplacer = new StringReplacer();

            	//Test sentance
            	var sentance = 'Hope you have a great day at the JavaScript Workshop. Full of great people and free food!';

            	//expected result
            	var result = StringReplacer.replace('great', 'excellent', sentance);

            	expect(result).toBe('Hope you have a excellent day at the JavaScript Workshop. Full of great people and free food!');

            });

    });
})();


	    



var Persons = (function(){
    var lastName = ["jean", "paul", "simon", "pierre", 
		"robert", "marcel", "carole", "camille", 
		"stephane", "paolo", "djibril", "antoine", 
		"sylvain", "richard", "denis", "simone", 
		"mathieu", "christophe", "marcel-vincent","david",
		"jacob", "benoit","josiane","bertrand","edmond",
		"emilie", "emile", "odile", "eduard", "lucie", "gilbert", "chistiane",
		"berta", "louise","lucette", "christine"];
	var firstName = ["Rob","gasquet","monis", "berton","raccor", "taco",
		"balasko","cisse","bouchon", "tamir", "boulof",
		"clavier", "erriep", "crapaud", "publice",
		"grotto","carre", "clappo",
		"fristion","qlaposus", "klop", 
		"breton", "boite", "papier", "chiffon carpet",
		"babouin", "singe", "taco", 'jurne', 
		"clovis", "zerop"];
    
    function Persons()
    {
	
    }
    
    Persons.prototype.first = function()
    {
	return firstName[Math.round((Math.random() * firstName.length))].toUpperCase();
    }
    
    Persons.prototype.last = function()
    {
	return lastName[Math.round((Math.random() * lastName.length))];
    }
    
    return Persons;
})();


exports.persons = Persons;
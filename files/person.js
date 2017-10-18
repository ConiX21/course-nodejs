var Person = (function () {

    var lastname = ["jean", "paul", "simon", "pierre",
        "robert", "marcel", "carole", "camille",
        "stephane", "paolo", "djibril", "antoine",
        "sylvain", "richard", "denis", "simone",
        "mathieu", "christophe", "marcel-vincent", "david",
        "jacob", "benoit", "josiane", "bertrand", "edmond",
        "emilie", "emile", "odile", "eduard", "lucie", "gilbert", "chistiane",
        "berta", "louise", "lucette", "christine"];

    var firstname = ["Rob", "gasquet", "monis", "berton", "raccor", "taco",
        "balasko", "cisse", "bouchon", "tamir", "boulof",
        "clavier", "erriep", "crapaud", "publice",
        "grotto", "carre", "clappo",
        "fristion", "qlaposus", "klop",
        "breton", "boite", "papier", "chiffon carpet",
        "babouin", "singe", "taco", 'jurne',
        "clovis", "zerop"];

    function Person() {

    }

    Person.prototype.first = function () {
        return firstname[Math.round(Math.random() * (firstname.length -1))].toUpperCase();
    }

    Person.prototype.last = function () {
        return lastname[Math.round(Math.random() * (lastname.length - 1))];
    }

    return Person;
})();


module.exports.person = Person;
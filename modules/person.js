module.exports = (function(){
    var lastname;
    var firstname;

    
    function setLastname(value){
        this.lastname = value;
    }

    function getLastname(){
        return this.lastname;
    }

    function setFirstname(value){
        this.firstname = value;
    }

    function getFirstname(){
        return this.firstname;
    }

    return {
        getFirstname : getFirstname,
        getLastname : getLastname,
        setLastname : setLastname,
        setFirstname : setFirstname
    }

})();
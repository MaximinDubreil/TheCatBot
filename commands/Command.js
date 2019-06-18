module.exports = class Command {
    static parse(message) {
        if (this.matchEnglish(message)) {
            this.action(message,'english');
            return true;
        }else if (this.matchFrench(message)) {
            this.action(message,'french') 
            return true;  
        }
        return false;
    }


    static matchEnglish(message) {
        return false;
    }
    

    static matchFrench(message) {
        return false;
    }
   
    static action(message) {}
}
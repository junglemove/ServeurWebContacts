/**
 * Created by Administrateur on 14/12/2016.
 */
"use strict"
class MyRouteur {
    constructor(name, methode, route){
        this.url = name || "";
        this.methode = methode || "";
        this.route = route || "";
    }
};

MyRouteur.prototype.getRoute = function(name, methode){

}

module.exports = MyRouteur;
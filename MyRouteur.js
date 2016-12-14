/**
 * Created by Administrateur on 14/12/2016.
 */
"use strict"
class MyRouteur {
    constructor(name, methode, response){
        this.url = name || "";
        this.methode = methode || "";
        this.response = response || "";
    }
};

module.exports = MyRouteur;
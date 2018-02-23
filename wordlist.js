var WordList = function () {

    this.wordlist = [
        "Apple",
        "Orange",
        "Yellow",
        "Turquoise",
        "Backpack",
        "Elephant",
        "Remote",
        "Photo",
        "Laughter",
    ];


    this.getRndWord = function () {
        return this.wordlist[Math.floor(this.wordlist.length * Math.random())]
            .toUpperCase();
    }
}

module.exports = WordList;
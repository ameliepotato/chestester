
var chessLogic = {
    squareIsWhite: function (coordinates) {
        const x = coordinates.charAt(0).charCodeAt();
        const y = coordinates.charAt(1).charCodeAt();
        return (x + y) % 2 === 1;
    },
    getRandomPosition: function(){
        var letters = "ABCDEFGH";
        var numbers = "12345678";

        return letters[Math.floor(Math.random() * letters.length)].concat(numbers[Math.floor(Math.random() * numbers.length)]);
    }
}


export default chessLogic;
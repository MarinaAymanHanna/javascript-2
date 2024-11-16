
var Quote = [
    { quote: "Resentment is like drinking poison and waiting for your enemies to die.", auther: "--Nelson Mandela" },
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", auther: "--Nelson Mandela" },
    { quote: "The purpose of our lives is to be happy.", auther: "--Dalai Lama" },
    { quote: "Life is what happens when you're busy making other plans.", auther: "--John Lennon" },
    { quote: "Get busy living or get busy dying.", auther: "--Stephen King" },
    { quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.", auther: "--Brian Tracy" },
    { quote:"You miss 100% of the shots you don't take." , auther: "--Wayne Gretzy"}
];

function generateQuote() {
    var randomIndex = Math.floor(Math.random() * Quote.length);
    var randomQuote = Quote[randomIndex];
    
    document.getElementById("quote").innerHTML = randomQuote.quote;
    document.getElementById("auther").innerHTML = randomQuote.auther;
}

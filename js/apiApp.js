const quote = document.getElementById("quote");
const title = document.querySelector("#id");
const auth = document.querySelector("#author");

const fetchquote = () => {
    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            quote.textContent = '"' + data.content + '"';
            title.textContent = "Quote#" + data.length;
            auth.textContent = "author:    " + data.author;
        })
        .catch(function (err) {
            console.log(err);
        });
}

setInterval(fetchquote(), 10000); 

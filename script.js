const quotes = [{
    quote: '"What is a cynic? A man who knows the price of everything and the value of nothing."',
    writer: '- Oscar Wilde'
}, {
    quote: '"We live in a moment of history where change is so speeded up that we begin to see the present only when it is already disappearing."',
    writer: '- R. D. Laing '
}, {
    quote: '"Nothing great in the world has been accomplished without passion."',
    writer: '- Georg Wilhelm'
}, {
    quote: '"Treat a person as he is, and he will remain as he is. Treat him as he could be, and will become as he should be."',
    writer: '- Jimmy Johnson'
}, {
    quote: '"Our lives improve only when we take chances -- and the first and most difficult risk we can take is to be honest with ourselves."',
    writer: '- Walter Anderson'
}, {
    quote: '"In order to write about life you must first live it."',
    writer: '- Ernest Hemingway'
}, {
    quote: '"The reward for conformity was that everyone liked you except yourself."',
    writer: '- Rita Mae Brown'
}, {
    quote: '"The vast possibilities of our great future will become realities only if we make ourselves responsible for that future."',
    writer: '- Gifford Pinchot'
}, {
    quote: '"Mistakes are the portals of discovery."',
    writer: '- James Joyce'
}]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
})


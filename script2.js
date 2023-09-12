async function fetchRandomQuote() {
    // API endpoint for a random quote
    const apiUrl = 'https://api.quotable.io/random';
    const response=await fetch(apiUrl);
    if(!response.ok){
        document.querySelector(".quote").innerHTML="Failed to fetch";
    }else{
        var data= await response.json();
        document.querySelector(".quote").innerHTML=`<p>"${data.content}"</p><p>- ${data.author}</p>`;       
    }
}
document.getElementById('new-quote-btn').addEventListener('click', fetchRandomQuote);
fetchRandomQuote();
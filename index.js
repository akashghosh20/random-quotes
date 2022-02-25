

const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const newQuotes = document.getElementById('newQuotes');


// let realData ="";

// const getNewQuotes=()=>{
//    let rnum = Math.floor(Math.random()*10);
//    quotes.innerText = `${realData[rnum].text}`;
//    author.innerText = `${realData[rnum].author}`;

// };


const getQuotes = async () =>{

    const api = `https://type.fit/api/quotes`;
     try{

        let data = await fetch(api);
        let realData = await data.json();
        let rnum = Math.floor(Math.random()*1643);
        quotes.innerText = `Text:   ${realData[rnum].text}`;
        author.innerText = `Author:   ${realData[rnum].author}`;
         //  getNewQuotes();
       
     } catch(error){}

}


// newQuotes.addEventListener('click',getNewQuotes);

// getQuotes();


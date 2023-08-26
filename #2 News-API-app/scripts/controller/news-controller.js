import newsOperations from "../services/news-operations.js";

async function loadNews()
{
    const news = await newsOperations.loadProduct();
    console.log("News are ", news);

    for(let newses of news)
    {
        prepareNewsCard(newses);
    }
}
loadNews();

/* <div class="card">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */

function prepareNewsCard(newses)
{
    const output = document.querySelector("#output");
    const cardDiv = document.createElement("div");
    cardDiv.className = "card text-bg-dark";
    // cardDiv.className = "card border-primary";
    output.appendChild(cardDiv);
    const img = document.createElement("img");
    img.src = newses.urlToImage;
    img.className = "card-img-top";
    cardDiv.appendChild(img);
    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";
    cardDiv.appendChild(cardBodyDiv);
    const p = document.createElement("p");
    p.className = "card-text";
    p.innerText = newses.description;
    const button = document.createElement("a")
    button.className = "btn btn-warning";
    button.innerText = "Read More";
    button.href = newses.url;
    cardBodyDiv.appendChild(p);
    cardBodyDiv.appendChild(button);
}
import makeNetworkCall from "./api-client.js";
import News from "../models/news.js";

const newsOperations = {
    async loadProduct()
    {
        const news = await makeNetworkCall();
        const productArray = news['articles'];
        const newsArray = productArray.map(news => {
            const currentNews = new News(news.id, news.name, news.description, news.url, news.urlToImage);
            return currentNews;
        })
        return newsArray;
    }
}

export default newsOperations;
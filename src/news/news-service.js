export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchArticles() {
        const url = `https://pixabay.com/api/?key=22615360-5cbe46b430b53ed17aa097d2d&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=false&page=${this.page}&per_page=40`;
        

        return fetch(url).then(r => r.json()).then(data => {
            this.page += 1;

            return data;
        });
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}
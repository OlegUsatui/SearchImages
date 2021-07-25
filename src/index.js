import './sass/main.scss';
import NewsApiService from './news/news-service'
import hitsTpl from './templates/photo-cards.hbs'
import Notiflix from "notiflix";

const searchForm = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery')

let totalHits = 0;

const newsApiService = new NewsApiService();

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
    e.preventDefault();
 
    clearHitsContainer();
    newsApiService.query = e.currentTarget.searchQuery.value;

    if (newsApiService.query === '') {
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
        return
    }

    newsApiService.resetPage();
    newsApiService.fetchArticles().then(data => {
       totalHits = data.total;
        Notiflix.Notify.success(`Hooray! We found ${totalHits} images`);

        appendHitsMarcup(data.hits)
    }).catch(console.log)

};

function onLoadMore() {
    newsApiService.fetchArticles().then(data => appendHitsMarcup(data.hits))
}

function appendHitsMarcup(hits) {
    gallery.insertAdjacentHTML('beforeend', hitsTpl(hits))
}

function clearHitsContainer() {
    gallery.innerHTML = '';
}
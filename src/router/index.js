//pages
import NotFound from 'pages/404.vue'
import Index from 'pages/Index.vue'
import About from 'pages/About.vue'
import Article from 'pages/Article.vue'
import NewArticle from 'pages/NewArticle.vue'

let routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/about',
    name: 'About',
    component: About
  }, {
    path: '/article/:articleId',
    name: 'Article',
    component: Article
  }, {
    path: '/newArticle',
    name: 'NewArticle',
    component: NewArticle
  }, {
    path: "*",
    name: 'NotFound',
    component: NotFound
  }
]
export default routes

// load components
import HomePage from './inc/pages/HomePage';
import AboutPage from './inc/pages/AboutPage';
import ErrorPage from './inc/pages/ErrorPage';
// instantiate pages object
const pages = {};
// mount pages
pages.home = HomePage;
pages.about = AboutPage;
pages.error = ErrorPage;
// export
export default pages;

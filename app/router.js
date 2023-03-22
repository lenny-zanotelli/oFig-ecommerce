const express = require('express');

// on importe nos controllers
const mainController = require('./controllers/mainController');
const bookmarksController = require('./controllers/bookmarksController');


const router = express.Router();

// page d'accueil
router.get('/', mainController.leftMenu, mainController.homePage);

// page article
router.get('/article/:id', mainController.leftMenu, mainController.articlePage);

// page category
router.get('/category/:categoryName', mainController.leftMenu, mainController.getCategoryPage);

// page favoris
router.get('/bookmarks', bookmarksController.bookmarksPage);
router.get('/bookmarks/add/:id', bookmarksController.addBookmarks);
router.get('/bookmarks/delete/:id', bookmarksController.deleteBookmarks);


// on exporte le router 
module.exports = router;
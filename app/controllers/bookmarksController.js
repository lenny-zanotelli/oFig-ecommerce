const dataMapper = require('../dataMapper');

const bookmarksController = {

  // méthode pour afficher les favoris
  bookmarksPage: (req, res) => {
    let bookmarks = [];
    if(req.session.bookmarks) {
      bookmarks = req.session.bookmarks;
    }
    console.log(bookmarks);
    res.render('favoris', {bookmarks});
  },

  addBookmarks: async (req, res) => {
    try {
      if(!req.session.bookmarks || req.session.bookmarks === undefined) {
        req.session.bookmarks = [];
      }
      const id_figurine = req.params.id;
      const isAlreadyBookmark = req.session.bookmarks.filter((bookmark) => bookmark.id == id_figurine);

      if(isAlreadyBookmark == false) {
        const oneFigurine = await dataMapper.getOneFigurine(id_figurine);
        req.session.bookmarks.push(oneFigurine);
      }
      res.redirect('/bookmarks');
    } catch (error) {
      console.log(error);
      
    }
  },

  deleteBookmarks: (req, res) => {
    const id_figurine = req.params.id;
    req.session.bookmarks = req.session.bookmarks.filter((bookmark) => bookmark.id != id_figurine);
    res.redirect('/bookmarks');
  }

};


module.exports = bookmarksController;

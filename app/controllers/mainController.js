const dataMapper = require('../dataMapper');

const mainController = {
  leftMenu: async (req, res, next) => {
    try {
      const allCategories = await dataMapper.getNumberForCategories();
      res.locals.allCategories = allCategories;

      next();
      
    } catch (error) {
      console.log(error);
      
    }
  },

  // méthode pour la page d'accueil
  homePage: async (req, res) => {
    try {
      const allFigurines = await dataMapper.getAllFigurines();
      
      res.render('accueil', { allFigurines });
      
    } catch (error) {
      console.log(error);
      
    }
    res.render('accueil');
  },

  // méthode pour la page article
  articlePage: async (req, res) => {
    const id_figurine = req.params.id;
    try {
      const figurine = await dataMapper.getOneFigurine(id_figurine);
      const reviews = await dataMapper.getAllReview(figurine.id);

      res.render('article', { figurine, reviews });

    } catch (error) {
      res.status(500);
      console.log(error);
      
    }
    
  },

  

  getCategoryPage: async (req, res) =>{
    try {
      const allFigurines = await dataMapper.getFigurineByCategory(req.params.categoryName);
      res.render('accueil', {allFigurines});
    } catch (error) {
      console.log(error);
      
    }
  }

};


module.exports = mainController;

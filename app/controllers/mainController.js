const dataMapper = require('../dataMapper');

const mainController = {

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

      res.render('article', { figurine });

      
    } catch (error) {
      res.status(500);
      console.log(error);
      
    }
    
  }

};


module.exports = mainController;

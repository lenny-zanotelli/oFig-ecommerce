const path = require('path');

const mainController = {

  // méthode pour la page d'accueil
  homePage: (request, response) => {
    const filePath = path.resolve(__dirname + '/../../integration/accueil.html');
    response.sendFile(filePath);
  },

  // méthode pour la page article
  articlePage: (request, response) => {
    const filePath = path.resolve(__dirname + '/../../integration/article.html');
    response.sendFile(filePath);
  }

};


module.exports = mainController;

const client  = require('./database');

const dataMapper = {

    getAllFigurines: async () => {
        const requete = "SELECT * FROM figurine;"
        const resultat = await client.query(requete);
        return resultat.rows

    },
    getOneFigurine: async (id) => {
        const requete = `SELECT * FROM figurine WHERE id = $1;`;
        const values = [
            id
        ];

        const resultat = await client.query(requete, values);
        return resultat.rows[0];

    },

    getAllReview: async (id) => {
        const requete = `SELECT * FROM review WHERE id= $1;`;
        const result = await client.query(requete, [id]);
        return result.rows;
    },

    getNumberForCategories: async () => {
        const requete = `SELECT category, Count(name) FROM figurine GROUP BY category;`;

        const result = await client.query(requete);
        return result.rows;
    },

    getFigurineByCategory: async (categoryName) =>{
        const requete = `SELECT * FROM figurine WHERE category = $1;`;
        const result = await client.query(requete, [categoryName]);

        return result.rows;
    }

}

module.exports = dataMapper;
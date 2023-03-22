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

}

module.exports = dataMapper;
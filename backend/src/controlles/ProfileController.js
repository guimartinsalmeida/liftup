const connection = require("../database/connection")

module.exports = {
    async index (req,res){
        const company_id = req.headers.authorization

        const incidents = await connection("incidents")
        .where("company_id", company_id)
        .select("*")

        return res.json(incidents)
    }
}
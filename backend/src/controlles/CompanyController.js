const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    async index (req,res){
        const companys = await connection('companys').select('*')
    
        return res.json(companys)
    },
    async create(req,res){
        const {name, email, whatsapp, city, suburb, postalcode} = req.body

    const id = crypto.randomBytes(4).toString('HEX')

    await connection('companys').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        suburb,
        postalcode,
    })


    return res.json({ id })
}
    
}
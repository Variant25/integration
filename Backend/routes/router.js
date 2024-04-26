const express = require(`express`)
const User = require(`../models/form`)

const router = express.Router()

router.get(`/`, (req, res) => {
    res.json({massg: `get all work`})
})

router.post(`/`, async(req,res) =>{
    const{name,email,summary}= req.body

    try {
        const user = await User.create({name,email,summary})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.massage})
    }
})


module.exports =router
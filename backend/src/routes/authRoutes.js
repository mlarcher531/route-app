const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')

const router = express.Router()

router.post('/signup', async (req, res) => {
    const { email, password } = req.body

    try {
        const user = new User({ email: email, password: password })
        await user.save()

        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
        res.send({ token: token })
    } catch (err) {
        return res.status(422).send(err.message)
    }
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(422).send({ error: 'Must Enter Email & Password' })
    }

    const user = await User.findOne({ email: email })
    if (!user) {
        return res.status(404).send({ error: "Invalid Email" })
    }
    try {
        await user.comparePassword(password)
        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
        res.send({ token: token })
    } catch (err) {
        return res.status(404).send({ error: "Invalid Password" })
    }
})


module.exports = router
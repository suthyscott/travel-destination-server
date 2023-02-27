const { Destination } = require("./models/destination")

module.exports = {
    getDestinations: async (req, res) => {
        console.log("getDestinations")
        try {
            const desties = await Destination.findAll()
            res.status(200).send(desties)
        } catch (err) {
            console.log(err)
            res.status(400).send("Error in getDestinations")
        }
    },
    addDestination: async (req, res) => {
        console.log("addDestinations")
        try {
            const { name, imageURL, international } = req.body
            const newDesty = await Destination.create({
                name,
                imageURL,
                international
            })
            res.status(200).send(newDesty)
        } catch (err) {
            console.log(err)
            res.status(400).send("Error in getDestinations")
        }
    }
}

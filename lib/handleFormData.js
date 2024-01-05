import formidable from "formidable"

async function processData(req, res) {
    const form = formidable({ multiples: true })

    const formData = new Promise((resolve, reject) => {
        form.parse(req, async (err, fields, files) => {
            if(err) {
                reject("error")
            }
            resolve({fields, files})
        })
    })

    try {
        //console.log("about to parse formData")
        return await formData
    } catch (e) {
        res.status(400).send({ status: "invalid submission" })
        return
    }
}

export default processData
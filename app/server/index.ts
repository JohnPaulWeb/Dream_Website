

    
import express from "express"
import cors from "cors"
import { generateResponse} from "./generate"


    const app = express()
    const port = process.env.PORT || 3001

    app.use(cors())
    app.use(express.json())

    app.post("/API/Generate", async (req, res) => {
        try {
            const { prompt } = req.body

            if (!prompt) {
                return res.status(400).json({ error: "Prompt is required" })
            }

            const response = await generateResponse(prompt)

            res.json({ result: response})
        } catch (error) {
            console.error("Error:", error)
            res.status(500).json({ error: "Internal server error" })
        }
    })

    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })

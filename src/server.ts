import app from "./app"
import { config } from "./config"

app.listen(config.port, () => {
  console.log(
    `${config.nodeEnv} - Server is running on http://localhost:${config.port}`
  )
})

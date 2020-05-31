import { Octokit } from "@octokit/rest"
import dotenv from "dotenv"
import fs from "fs"
import path from "path"
import Deploy from "./deploy"

dotenv.config()

const args = process.argv.slice(2)
const artifactName = args[0]
const outputDirectory = path.resolve(process.cwd(), args[1] || ".")

if (undefined === artifactName) {
  throw new Error("artifact name required")
}

const deploy = new Deploy(
  new Octokit({
    auth: process.env.GITHUB_TOKEN!,
  }),
  {
    owner: process.env.GITHUB_OWNER!,
    repo: process.env.GITHUB_REPO!,
  }
)

console.log(`Downloading ${artifactName} artifact`)

deploy
  .getArtifact(artifactName)
  .then((artifact) => deploy.downloadArtifact(artifact))
  .then((response) => {
    const file = path.resolve(outputDirectory, `${artifactName}.zip`)

    console.log(`Creating directory ${outputDirectory}`)
    fs.mkdirSync(outputDirectory, { recursive: true })

    console.log(`Writing artifact to ${file}`)
    fs.appendFileSync(file, Buffer.from(response.data))
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

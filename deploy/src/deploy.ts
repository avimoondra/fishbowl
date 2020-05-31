import { Octokit } from "@octokit/rest"
import { ActionsGetArtifactResponseData } from "@octokit/types/dist-types/generated/Endpoints"

interface IOptions {
  owner: string
  repo: string
}

export default class Deploy {
  constructor(private oktokit: Octokit, private options: IOptions) {}

  async getArtifact(name: string) {
    const artifacts = await this.oktokit.actions.listArtifactsForRepo({
      owner: this.options.owner,
      repo: this.options.repo,
    })

    for (const artifact of artifacts.data.artifacts) {
      if (name === artifact.name) {
        return artifact
      }
    }

    return Promise.reject(`Unable to find artifact with name '${name}'`)
  }

  async downloadArtifact(artifact: ActionsGetArtifactResponseData) {
    return await this.oktokit.actions.downloadArtifact({
      owner: this.options.owner,
      repo: this.options.repo,
      artifact_id: artifact.id,
      archive_format: "zip",
    })
  }
}

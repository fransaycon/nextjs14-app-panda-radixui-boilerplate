import { GetUserResult } from "@/actions/github-actions"
import { rest } from "msw"

const mocks = [
  rest.get<undefined, GetUserResult>(
    `https://api.github.com/users/fransaycon`,
    async (_req, res, ctx) => {
      return res(
        ctx.json({
          avatarUrl: "/test.png",
          bio: "fake bio",
          name: "fake name",
        })
      )
    }
  ),
]

export default mocks

import { Request, Response } from "express"
import { isEven } from "@monorepo/utils"
import {DoRequestForTest} from "@monorepo/ui"

export const testHandler = async (req: Request, resp: Response) => {
  resp.setHeader("Content-Type", "application/json")
  resp.json(await DoRequestForTest())
  resp.end()
}

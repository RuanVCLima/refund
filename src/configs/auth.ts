import { SignOptions } from "jsonwebtoken"

export const authConfig: {
  jwt: {
    secret: string
    expiresIn: SignOptions["expiresIn"]
  }
} = {
  jwt: {
    secret: "ruanvictor",
    expiresIn: "1d"
  }
}
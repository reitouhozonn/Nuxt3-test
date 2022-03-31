import { IncomingMessage, ServerResponse } from "http"

export default async (req: IncomingMessage, res: ServerResponse) => {
    console.log("test")
    // console.log(req.headers)
}

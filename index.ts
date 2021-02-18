import { NowRequest, NowResponse } from "@vercel/node";

module.exports = async (req: NowRequest, res: NowResponse) => {
    try {
        const { name = 'World' } = req.query;
        res.status(200).send(`Hello ${name}!`)
    } catch (error) {
        res.send(error)
    }
}
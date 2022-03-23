import { rest } from 'msw';
import { scoreList } from "./data";

export const handlers = [
    rest.post('/updatescore', (req, res, ctx) => {
        const { username } = req.body

        return res(
            ctx.json({
                code: 0,
                data: "Success",
                message: ''
            })
        )
    }),
    rest.post('/scores', (req, res, ctx) => {
        const { page, pageSize } = req.body

        return res(
            ctx.json({
                code: 0,
                data: {
                    page: page,
                    pageSize: pageSize,
                    list: scoreList
                },
                message: ''
            })
        )
    }),
]

export const defaultHandlers = []
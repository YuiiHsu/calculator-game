import { rest } from 'msw'

export const handlers = [
    rest.post('/updateScore', (req, res, ctx) => {
        const { username } = req.body

        return res(
            ctx.json({
                code: 0,
                data: "Success",
                message: ''
            })
        )
    }),
]

export const defaultHandlers = []
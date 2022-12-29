import rateLimit from 'express-rate-limit'
import {NextApiRequest, NextApiResponse} from "next";
import requestIp from 'request-ip';

const limit = 5
const windowMs = 1000 * 60 * 60 * 5 // 5 hours

const middlewares = [
  rateLimit({ keyGenerator: requestIp.getClientIp, windowMs, max: limit }),
]

const applyMiddleware = middleware => (request, response) =>
  new Promise((resolve, reject) => {
    middleware(request, response, result =>
      result instanceof Error ? reject(result) : resolve(result)
    )
})

export default async function applyRateLimit(request, response) {
  await Promise.all(
    middlewares
      .map(applyMiddleware)
      .map(middleware => middleware(request, response))
  )
}

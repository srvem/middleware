import { IncomingMessage, ServerResponse } from 'http'

export abstract class SrvMiddleware {
  request: IncomingMessage
  response: ServerResponse

  abstract main(): void
}

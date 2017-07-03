# @srvem/middleware
Middleware blueprint for srvem (pronounced \"serve 'em\", a super-fast and minimalist middleware-oriented TypeScript server framework for Node.js).
  
## Installation
> `npm install --save @srvem/middleware`
  
## Usage
_srv-sample-middleware.ts_:
```typescript
import { SrvMiddleware } from '@srvem/middleware'

export class SampleMiddlware extends SrvMiddleware {

  // `this.request: SrvRequest` is available
  // `this.response: SrvResponse` is available

  // you can use the constructor to accept parameters
  constructor(private sampleParam: String) {
    super()
  }

  // override
  main(): void {
    // middleware code starts handling requests here
  }
  
}

```
  
_main.ts_:
```typescript
import { Srvem } from '@srvem/app'
import { SrvSampleMiddleware} from './srv-sample-middleware'

const app: Srvem = new Srvem()

app.use(new SrvSampleMiddleware('sample string param'))
// more srvem middlewares can go here using app.use()
// handlers can also be defined here using app.handle()

app.start().listen()

```
  
## Public API
```typescript
interface SrvRequest extends IncomingMessage {} // the super class is from the built-in 'http' module

interface SrvResponse extends ServerResponse {} // the super class is from the built-in 'http' module

abstract class SrvMiddleware {
  request: SrvRequest
  response: SrvResponse

  abstract main(): void
}

```
  
## See Also
- [@srvem/app](https://github.com/srvem/app) a super-fast and minimalist TypeScript middleware-oriented server for Node.js.
- [@srvem/static](https://github.com/srvem/static) to serve static files from a specified directory.
- [@srvem/router](https://github.com/srvem/router) to develop routers and server APIs with asynchronous request handlers.
  
## Credits
Kaleab S. Melkie (<kaleabmelkie@gmail.com>)
  
## License
MIT License  
Copyright (C) 2017 srvem

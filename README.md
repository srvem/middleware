# @srvem/middleware
Middleware blueprint for srvem (pronounced \"serve 'em\"), a super-fast and minimalist TypeScript middleware-oriented server framework for Node.js.

# Installation
> `npm install --save @srvem/middleware`

# Usage
```typescript
import { SrvMiddleware } from '@srvem/middleware'

export class SrvSample extends SrvMiddleware {

  // `this.request` and `this.response` are available in this class
  // they come from the parameters of the function argument of the `createServer` function in the 'http' module

  // you can use the constructor to accept parameters
  constructor(private sampleParam: String) {
    super()
  }

  // override
  main(): void {
    // middleware code starts here
  }
  
}

```

# Public API
```typescript
abstract class SrvMiddleware {
  request: IncomingMessage // from the built-in 'http' module
  response: ServerResponse // from the built-in 'http' module

  abstract main(): void
}

```

# Credits
Kaleab S. Melkie (<kaleabmelkie@gmail.com>)

# License
MIT License
Copyright (c) 2017 srvem

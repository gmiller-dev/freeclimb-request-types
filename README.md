# freeclimb-request-types

freeclimb-request-types is a package adding typescript support for freeclimb application webhooks.

## Installing
```
npm isntall freeclimb-request-types
```
or
```
yarn install freeclimb-request-types
```

## Getting Started
```ts
import express, { Request } from 'express';
import {InboundCallBody} from "freeclimb-request-types";

const app = express()
const port = 3000

// Tells the code that the request body will of InboundCallBody type
app.post('/callEntry', (req: Request<{}, {}, InboundCallBody>, res) => {
  req.body.callId; // $ExpectType string

  res.send([{
    Say: {
      text: `The number you called is ${req.body.to}`
    }
  }])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
in addition type guards are also available
```ts
import {isInboundCall} from "freeclimb-request-types";

app.post('/callEntry', (req, res) => {

  if(isInboundCall(req.body)) {
    res.send([{
      Say: {
        text: `The number you called is ${req.body.to}`
      }
    }]);
  } else {
    res.status(400).send('Invalid request');
  }
});
```

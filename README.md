# Express Listen One

Tiny function for listening to a single request with express.

Useful for catching a request when testing, when dealing with redirects to localhosts etc.

## Install

```sh
npm install --save express-listen-one
```

## Usage

```ts
import listen from 'express-listen-one';

// Maybe during testing...

const result = await listen ( 3333, ( req, res ) => true );

assert ( result === true );

// Maybe when dealing with redirects to localhost...

const tokenPromise = listen ( 3333, ( req, res ) => req.query.token );

request ( 'https://connect.deezer.com/oauth/auth.php?redirect_uri=http://localhost.com:3333' ); // Adding `127.0.0.1 localhost.com` to /etc/hosts is pretty useful btw

const token = await tokenPromise;
```

## License

MIT © Fabio Spampinato

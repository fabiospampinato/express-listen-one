
/* REQUIRE */

import * as express from 'express';
import * as shutdown from 'http-shutdown';
import {Port, Path, Verb, Callback, Return} from './types';

/* EXPRESS LISTEN ONE */

function listen ( callback: Callback ): Return;
function listen ( port: Port, callback: Callback ): Return;
function listen ( port: Port, path: Path, callback: Callback ): Return;
function listen ( port: Port, path: Path, callback: Callback ): Return;
function listen ( port: Port, path: Path, verb: Verb, callback: Callback ): Return;
function listen ( port: Port | Callback, path?: Path | Callback, verb?: Verb | Callback, callback?: Callback ): Return {

  if ( !port ) throw new Error ( 'You need to provide at least a callback' );
  if ( !path ) return listen ( 80, '/', 'GET', port as Callback );
  if ( !verb ) return listen ( port as Port, '/', 'GET', path as Callback );
  if ( !callback ) return listen ( port as Port, path as Path, 'GET', verb as Callback );

  return new Promise ( resolve => {

    const app = express (),
          method = ( verb as string ).toLowerCase ();

    app[method] ( path, async ( req, res, next ) => {
      resolve ( await callback ( req, res ) );
      next ();
      res.end ();
      server.shutdown ();
    });

    const server = shutdown ( app.listen ( port ) );

  });

}

/* EXPORT */

export default listen;

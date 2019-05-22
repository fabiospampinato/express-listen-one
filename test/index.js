
/* IMPORT */

import {describe} from 'ava-spec';
import got from 'got';
import listen from '../dist';

/* EXPRESS LISTEN ONE */

describe ( 'Express Listen One', it => {

  it ( 'Catches one request, and one request only', async t => {

    t.plan ( 3 );

    const result = listen ( 5575, ( req, res ) => {
      res.send ( 'caught' );
      return req.query.foo;
    });

    const {body} = await got ( 'http://localhost:5575?foo=123' );

    t.is ( await result, '123' );
    t.is ( body, 'caught' );

    try {

      await got ( 'http://localhost:5575' );

    } catch ( e ) {

      t.pass ();

    }

  });

});

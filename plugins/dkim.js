'use strict';

// save as plugins/dkim.js

const fs = require('fs');

module.exports.title = 'DKIM signer';
module.exports.init = function(app, done) {
    let privKey;

    try {
        privKey = fs.readFileSync(app.config.path, 'ascii').trim();
    } catch (E) {
        app.logger.error('DKIM', 'Failed loading key: %s', E.message);
        return done;
    }

    app.addHook('sender:connect', (delivery, options, next) => {
        if (!delivery.dkim.keys) {
            delivery.dkim.keys = [];
        }

        delivery.dkim.keys.push({
            domainName: app.config.domain,
            keySelector: app.config.selector,
            privateKey: privKey
        });

        next();
    });

    done();
};

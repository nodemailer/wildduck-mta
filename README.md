# Wild Duck MTA

Example [ZoneMTA](https://github.com/zone-eu/zone-mta) application to work with [Wild Duck Mail Server](https://github.com/nodemailer/wildduck). This application sets up an outbound SMTP server listening on port 587 that uses Wild Duck accounts for authentication.

```
$ npm install --production
$ sudo npm start
```

### Requirements

  * Nodejs v6
  * Build tools + Python (required for building ZoneMTA dependencies). These are optional, though if build-tools are not available then you should probably see a long list of warnings and errors.
  * Wild Duck Mail Server

### Configuration

Main configuration file can be found from [config/wildduck-mta.toml](./config/wildduck-mta.toml), Wild Duck specific config is in [config/plugins/wildduck.toml](./config/plugins/wildduck.toml).

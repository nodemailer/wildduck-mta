# Setup

In this folder you can find an example systemd service file.

The service assumes that application files are stored in /opt/wildduck-mta and config directory resides in /etc/wildduck-mta

**NB!** when running as systemd service, do not forget to edit user info in config

**wildduck-mta.toml**

```toml
name="wildduck-mta"
user="wildduck-mta"
group="wildduck-mta"
...
```

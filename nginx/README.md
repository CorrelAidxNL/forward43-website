# Nginx config

You can put this nginx file in `/etc/nginx/sites-available/` folder (you need to have nginx installed here)

The conf file assumes the hostname is `ubuntu`. In case it is different, change it accordingly.

At the moment, this config accepts only `http` connections.

After updating the nginx conf file and placing it in the correct folder, reload nginx with the following command:

```
sudo nginx -s reload
```
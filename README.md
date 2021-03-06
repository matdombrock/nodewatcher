A simple Node/Express app that keeps a record of anyone who makes an HTTP request to the server. 

Example output:
```
::ffff:24.17.107.167 ||| Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:95.0) Gecko/20100101 Firefox/95.0
::ffff:24.17.107.167 ||| Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:95.0) Gecko/20100101 Firefox/95.0
::ffff:35.237.4.214 ||| Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)
::ffff:35.196.132.85 ||| Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)
::ffff:24.17.107.167 ||| Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:95.0) Gecko/20100101 Firefox/95.0
::ffff:24.17.107.167 ||| Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:95.0) Gecko/20100101 Firefox/95.0
::ffff:24.17.107.167 ||| curl/7.68.0
```

## Building Docker Image

You can download just the `Dockerfile` from this repo to build a docker image

```
docker build -t nodewatcher ~/pathToNodeWatcher/Dockerfile
```

Check that the image is available with `docker image ls` or by using the Docker Desktop GUI.

## Running 

This app runs on post 7331 by default (this can be easily changed in the `index.js` file).

If you are running with Docker you can run like:
```
docker run -p <desired-port>:7331 nodewatcher
```
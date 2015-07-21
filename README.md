# minimal-meteor-docker
##Minimal meteor dockerfile for sanity-checking deployments.

This dockerfile will:
1. Setup Node
2. wget the "simple-tasks" github repo (Publicly available, no private repos yet)
3. build it
4. run it

This docker has no dependencies besides default ubuntu.

Meteor requires you set certain parameters through environment variable in production:

Deploy with:
docker run -d -e PORT:80 -e ROOT_URL=http://myapp.com -e MONGO_URL=mongodb://<USER>:<PASS>@mongohq.com -p 80:80 keyscores/minimal-meteor-docker

NOTE:
The default port is 80, so you should see it as soon as it is deployed.
save

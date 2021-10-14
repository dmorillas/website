# pnkfrg's playful website 🕹

## Set up environment variables

Set up a `.env` file like so:

```bash
SPACE=xxx
DELIVERY=xxx
ORIGIN=xxx
# Netlify will use node 16 which causes issues. Force it to use v15 for now :)
NODE_VERSION=15
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

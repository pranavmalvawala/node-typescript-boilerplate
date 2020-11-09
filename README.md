# Node Typescript Boilerplate

A minimalist Production level boilerplate for NodeJS projects.

## Credentials

Copy the environment variable template:

```sh
cp .env.development.template .env.development
# .env.development is in .gitignore to prevent accidental publication
```

Add the appropriate values to `.env.development`.

## Developing

To build and run current code:

```sh
npm install
npm run build
npm run start
```

Or, to re-compile and restart the server on each change, run:

```sh
npm run dev
```

## Publishing

Before opening a pull request, run `npm run release` to update the version number.

Once changes are merged to the `master` branch, they can be deployed to the environment.

Now if you are looking to keep track of code using version number, These scripts use the version number from `package.json` and pushes the code to remote. The program [`jq`](https://stedolan.github.io/jq/) is used to parse the version number; for the easiest workflow, install `jq`.

1. Tag the merge commit:
   ```sh
   git checkout master
   git pull
   git tag "v$(jq < package.json -r '.version')"
   git push --tags
   ```

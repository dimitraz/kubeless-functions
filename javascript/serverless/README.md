# Javascript serverless framework function

Simple javascript function with lodash dependency. Deployed using [serverless-kubeless](https://github.com/serverless/serverless-kubeless).

Deploy the function:

```sh
npm install

serverless deploy
```

Call the function:

```sh
# Invoke the function
serverless invoke -f capitalise -l --data "HELLO WORLD"

Serverless: Calling function: capitalise...
--------------------------------------------------------------------
"Hello world"
```

Clean up:

```sh
# Clean up
serverless remove
```

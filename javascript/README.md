# Javascript typicode function

Fetch a todo from the typicode REST API.

Create the function:

```sh
kubeless function deploy typicode --runtime nodejs8 \
  --from-file handler.js \
  --dependencies package.json \
  --handler handler.typicode
```

Call and delete the function:

```sh
# Invoke the function
kubeless function call typicode

# Clean up
kubeless function delete typicode
```

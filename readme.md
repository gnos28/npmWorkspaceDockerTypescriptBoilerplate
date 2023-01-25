REMINDER

# HOW TO DEV ?

first run ```npm install``` in both back_1 and back_2

then ONLY AFTER FIRST STEP run ```npm install``` in packages/monpackage if you need typescript assistance to edit your package

in case of error EDUPLICATEWORKSPACE just delete node_modules folders in you packages folders

# HOW TO RUN ?

in root folder

```bash
docker compose build
docker compose up
```

# HOW IT WORKS ???

*important things to note :*

## in your apps folders (back_1, back_2, ...)

### in **tsconfig.json** add
```json
{
    "baseUrl": "./node_modules/"
}
```

### in **package.json** add

```json
{
    "dependencies": {
    "unique-denomination/monpackage": "*",
    },
    "workspaces": ["../packages/**"]
}
```

### in **Dockerfile** add
```dockerfile
COPY packages ../packages
```
*and repeat following steps for each of your packages*
```dockerfile
WORKDIR /packages/monpackage/ 
RUN rm -Rf node_modules
```

## in each of your package subfolders

### in **package.json** add
```json
{
"name": "unique-denomination/monpackage",
"version": "1.0.0",
"main": "index.ts",
}
```

### create **index.ts** that will import / export everything

code !
# Next.js neo4j

Create git folder

    $ git init

    $ git add .

    $ git commit -am "add readme"

    $ git remote add origin git@github.com:kravindranath/neo4j.git

    $ git push -u origin head

    $ npm init
    // fill in app details

Add below to package.json

    "scripts": {
        "build": "next build",
        "start": "next start",
        "export": "next export",
        "dev": "next dev",
        "telemetry": "next telemetry"
    },

### Install Nextjs and react

    npm install next react react-dom axios

Add `.gitignore`

and add `/node_modules` into it

Add `next.config.js`

    module.exports = {
        async headers() {
            return [
            {
                source: '/',
                headers: [
                {
                    key: 'Cache-control',
                    value: 'max-age=180, must-revalidate',
                }
                ],
            },
            ]
        },
    }

Create the main files for Next.js App

From the root folder

    mkdir src
    cd src
    mkdir pages
    touch \_app.js index.js

Please check for the default code in the files in source code

Run the below code to see the initial app

    npm run dev


    - ready started server on 0.0.0.0:3000, url: http://localhost:3000

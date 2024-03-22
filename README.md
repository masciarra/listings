# Listing App

To run:

1. Ensure you have node >v20 and yarn

npm install --global yarn

2. Install deps

yarn install

3. Duplicate .env.example and rename to .env. Modify to your PostGres DB (empty database)

4. Run migrations

npx prisma migrate dev --name init

5. Run app

yarn dev

Will run on port 3000

API routes can be found at /src/app/api

Frontend routes can be found at /src/app/

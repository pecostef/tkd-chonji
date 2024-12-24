# chon_ji

# Config

## Dev

Create a .env.dev file and fill it with the relevant variables according to the .env.template

## Prod

Create a .env.prod file and fill it with the relevant variables according to the .env.template

# Deploy

## dev

aws-vault exec <dev profile> -- npx sst deploy --stage dev

## prod

aws-vault exec <prod profile> -- npx sst deploy --stage prod

# Early access page starter (Gatsby + Netlify + Airtable)

Gatsby starter for building an early access page using Airtable as backend and Netlify for deployment.

## Demo

Live demo is available at [demo URL]()

## How to use

Before deploying to Netlify, set the following environment variables:

    AIRTABLE_API_KEY=<your API key>
    AIRTABLE_BASE=<base name>
    AIRTABLE_TABLE=<table name>

For local development, put these variables inside `.env` file. 

## Development

To run locally, first make sure that you've created `.env` file with Airtable variables, then run:

    yarn start

That will spin off a Gatsby server on port 8000 and Netlify functions oon port 9001.
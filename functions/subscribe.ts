import joi from 'joi'
import Airtable from 'airtable'
import { APIGatewayEvent } from 'aws-lambda'

const schema = joi.object().keys({
  email: joi
    .string()
    .email()
    .required(),
})

const subscribe = async (
  email: string
) => {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE)
  await base(process.env.AIRTABLE_TABLE).create({
    email,
  })
}

const handler = async (event: APIGatewayEvent) => {
  const { error, value } = schema.validate<{ email: string }>(
    JSON.parse(event.body || '{}')
  )
  if (error) {
    return {
      statusCode: 422,
      body: JSON.stringify({
        message: error.details.map(detail => detail.message).join(),
      }),
    }
  } else {
    await subscribe(value.email)

    return {
      statusCode: 200,
      body: JSON.stringify({}),
    }
  }
}

export { handler }

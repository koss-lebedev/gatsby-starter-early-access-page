import React, { useState, FormEvent, FC } from 'react'
import emailValidator from 'email-validator'
import { Form, Input, Button, ThankYou } from './styled'

const subscribe = async (email: string) => {
  const response = await fetch('/.netlify/functions/subscribe', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })
  await response.json()
}

const SubscribeForm: FC = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [isProcessing, setProcessing] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setProcessing(true)
    await subscribe(email)
    setSubscribed(true)
    setProcessing(false)
  }

  return subscribed ? (
  <ThankYou>Thank You!</ThankYou>
  ) : (
    <Form onSubmit={handleSubmit}>
      <Input
        autoFocus
        type="email"
        placeholder="email@domain.com"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <Button
        type="submit"
        disabled={!emailValidator.validate(email) || isProcessing}
      >
        {isProcessing ? 'Submitting...' : 'Subscribe'}
      </Button>
    </Form>
  )
}

export default SubscribeForm

import React from 'react'
import { Button as ButtonBs  } from 'react-bootstrap'

export default function Button() {
  return (
        <>
          <ButtonBs variant="primary">Primary</ButtonBs>{' '}
          <ButtonBs variant="secondary">Secondary</ButtonBs>{' '}
          <ButtonBs variant="success">Success</ButtonBs>{' '}
          <ButtonBs variant="warning">Warning</ButtonBs>{' '}
          <ButtonBs variant="danger">Danger</ButtonBs>{' '}
          <ButtonBs variant="info">Info</ButtonBs>{' '}
          <ButtonBs variant="light">Light</ButtonBs>{' '}
          <ButtonBs variant="dark">Dark</ButtonBs>
          <ButtonBs variant="link">Link</ButtonBs>
        </>
  )
}




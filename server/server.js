'use strict'

const express = require('express');
const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/meanchat'
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('client'))

app.get('/api/title', (req, res) =>
  res.json({ title: 'MEAN Chat' })
)

app.get('/api/messages', (req, res) =>
  res.json({
    messages: [
      {
        author: 'John',
        content: 'Get a Job!',
      },
      {
        author: 'Anonymous',
        content: 'Cohort 14 is 💩'
      },
      {
        author: 'Scott',
        content: '#NeverForget'
      }
    ]
  })
)

app.listen(port, () => console.log(`Listening on port: ${port}`))

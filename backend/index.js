const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// POST endpoint for contact form submissions
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submission:', { name, email, message });

  // Here you could add logic to send an email or store the message

  res.json({ success: true, message: 'Thank you for contacting me!' });

});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

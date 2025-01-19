const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize Firebase Admin SDK
const serviceAccount = require('./firebase-service-account.json'); // Replace with your service account file path
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// API endpoints
app.get('/api/health', (req, res) => {
    res.status(200).json({ message: 'Server is running!' });
});

app.post('/api/verify-token', async (req, res) => {
    const { token } = req.body;
    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        res.status(200).json({ decodedToken });
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
});

// Serve the frontend (Vite build files)
app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
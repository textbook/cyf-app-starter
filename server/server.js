const express = require('express');
const path = require('path');

const API_ROOT_PATH = '/api'
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

const apiRoutes = require('./routes');
app.use(API_ROOT_PATH, apiRoutes);

app.use(express.static(path.join(__dirname, 'public')));

// Enable push-state routing (e.g. with React Router's BrowserRouter)
app.get('*', (req, res, next) => {
    if (req.url.startsWith(API_ROOT_PATH)) {
        return next();
    }
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
    console.debug(`Express started on port ${PORT}`);
});

const PORT = process.env.PORT || 3000;

const express = require('express');
const path = require('path');

const app = express();

const apiRoutes = require('./routes');

app.use(express.json());
app.use('/api', apiRoutes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.debug(`Express started on port ${PORT}`);
});

const express = require('express');
const app = express();

// IBM Cloud PORT environment variable deta hai, varna 8080 use hoga
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
res.send('Hello World! Meri Application IBM Cloud par chal rahi hai 🎉');
});

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
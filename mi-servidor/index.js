// backend/index.js
const express = require('express'); // ⚠️ Necesario para el backend
const mongoose = require('mongoose');
const cors = require('cors');
const Opinion = require('./models/Opinion');

const app = express(); // ⚠️ Creamos la instancia de Express

// Middleware
app.use(express.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect(
  'mongodb+srv://estefaniamorenobravo2003:%234acapulcO@cluster0.hh6rdo1.mongodb.net/carmen_periodoncia?retryWrites=true&w=majority'
)
.then(() => console.log('✅ MongoDB conectado'))
.catch((err) => console.error('❌ Error conectando a MongoDB:', err));

// Rutas
app.get('/api/opiniones', async (req, res) => {
  try {
    const opiniones = await Opinion.find().sort({ fecha: -1 });
    res.json(opiniones);
  } catch (error) {
    console.error('❌ Error al obtener opiniones:', error);
    res.status(500).json({ error: 'Error al obtener opiniones' });
  }
});

app.post('/api/opiniones', async (req, res) => {
  try {
    const nuevaOpinion = new Opinion(req.body);
    await nuevaOpinion.save();
    res.status(201).json({ mensaje: 'Opinión guardada correctamente' });
  } catch (error) {
    console.error('❌ Error al guardar la opinión:', error);
    res.status(500).json({ error: 'Error al guardar la opinión' });
  }
});

// Puerto
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));

// 'mongodb+srv://estefaniamorenobravo2003:#4acapulcO@cluster0.hh6rdo1.mongodb.net/carmen_periodoncia?retryWrites=true&w=majority'
  
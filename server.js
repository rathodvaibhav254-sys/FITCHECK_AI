const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API: Get outfits (with optional filters)
app.get('/api/outfits', async (req, res) => {
  try {
    const { occ, g, s } = req.query;
    
    let outfits = await prisma.outfit.findMany();
    
    if (occ || g || s) {
      const targetOcc = occ || 'all';
      const targetG = g || 'unisex';
      const targetS = s || 'all';
      
      outfits = outfits.filter(o => {
        let mOcc = (targetOcc === 'all' || o.occ === targetOcc);
        let mG = (targetG === 'unisex' || o.g === 'unisex' || o.g === targetG);
        let mS = (targetS === 'all' || o.s === 'all' || o.s === targetS);
        return mOcc && mG && mS;
      });

      // fallback to just occasion
      if (outfits.length === 0 && targetOcc !== 'all') {
        const allOutfits = await prisma.outfit.findMany({ where: { occ: targetOcc } });
        outfits = allOutfits.slice(0, 6);
      }
    }

    // parse JSON for i and c
    const parsed = outfits.map(o => ({
      ...o,
      i: JSON.parse(o.i),
      c: JSON.parse(o.c)
    }));
    
    res.json(parsed);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch outfits' });
  }
});

// API: Get saved look IDs
app.get('/api/saved', async (req, res) => {
  try {
    const saved = await prisma.savedLook.findMany();
    res.json(saved.map(s => s.outfitId));
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch saved looks' });
  }
});

// API: Save an outfit
app.post('/api/saved', async (req, res) => {
  try {
    const { outfitId } = req.body;
    if (!outfitId) return res.status(400).json({ error: 'outfitId required' });
    
    const saved = await prisma.savedLook.create({
      data: { outfitId }
    });
    res.json(saved);
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Outfit already saved' });
    }
    res.status(500).json({ error: 'Failed to save outfit' });
  }
});

// API: Remove a saved outfit
app.delete('/api/saved/:outfitId', async (req, res) => {
  try {
    const { outfitId } = req.params;
    await prisma.savedLook.delete({
      where: { outfitId }
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete saved outfit' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

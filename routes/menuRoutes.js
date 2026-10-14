const express = require('express');
const router = express.Router();
const Menu = require('./../models/menu');

router.get('/', async (req, res) => {
  try {
    const menus = await Menu.find();

    console.log('Menus retrieved:', menus);

    res.status(200).send(menus);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const data = req.body;

    const menu = await Menu.create(data);

    console.log('Menu created:', menu);
    res.status(201).send(menu);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const menuId = req.params.id;
    const updateData = req.body;

    const updatedMenu = await Menu.findByIdAndUpdate(menuId, updateData, { new: true });

    if (!updatedMenu) {
      return res.status(404).send({ error: 'Menu not found' });
    }

    console.log('Menu updated:', updatedMenu);
    res.status(200).send(updatedMenu);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const menuId = req.params.id;

    const deletedMenu = await Menu.findByIdAndDelete(menuId);

    if (!deletedMenu) {
      return res.status(404).send({ error: 'Menu not found' });
    }

    console.log('Menu deleted:', deletedMenu);
    res.status(200).send(deletedMenu);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
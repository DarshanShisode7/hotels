const express = require('express');
const router = express.Router();
const Person = require('./../models/person');

router.post('/', async (req, res) => {
  try {
    const data = req.body;

    const person = await Person.create(data);

    console.log('Person created:', person);
    res.status(201).send(person);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const persons = await Person.find();

    console.log('Persons retrieved:', persons);

    res.status(200).send(persons);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// router.get('/work/:workType', async (req, res) => {
//   try {
//     const workType = req.params.workType;
//     const persons = await Person.find({ work: workType });

//     if(workType === 'chef' || workType === 'waiter' || workType === 'manager') {
//         console.log('Persons retrieved:', persons);

//         res.status(200).send(persons);
//     }else {
//         res.status(400).send({ error: 'Invalid work type' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error);
//   }
// });   

router.put('/:id', async (req, res) => {
  try {
    const personId = req.params.id;
    const updateData = req.body;

    const updatedPerson = await Person.findByIdAndUpdate(personId, updateData, { new: true });

    if (!updatedPerson) {
      return res.status(404).send({ error: 'Person not found' });
    }

    console.log('Person updated:', updatedPerson);
    res.status(200).send(updatedPerson);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const personId = req.params.id;

    const deletedPerson = await Person.findByIdAndDelete(personId);

    if (!deletedPerson) {
      return res.status(404).send({ error: 'Person not found' });
    }

    console.log('Person deleted:', deletedPerson);
    res.status(200).send(deletedPerson);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
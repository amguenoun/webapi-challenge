const router = require('express').Router();

const db = require('../../data/helpers/actionModel');

router.get('/', (req, res) => {
    db.get()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Could not get actions from the database' }));
});

router.get('/:id', (req, res) => {
    db.get(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Could not get action from the database' }));
});

router.post('/', (req, res) => {

});

router.put('/', (req, res) => {

});

router.delete('/', (req, res) => {

});

module.exports = router;
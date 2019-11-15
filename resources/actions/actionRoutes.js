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
    db.insert(req.body)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Could not create action' }));
});

router.put('/:id', (req, res) => {
    db.update(req.params.id, req.body)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Could not update action' }));

});

router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
        .then(data => res.status(200).json({ message: 'Delete Successful' }))
        .catch(err => res.status(500).json({ message: 'Could not delete action' }));
});

module.exports = router;
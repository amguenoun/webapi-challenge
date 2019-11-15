const router = require('express').Router();

const db = require('../data/helpers/projectModel');

router.get('/', (req, res) => {
    db.get()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Could not get projects from the database' }));
});

router.get('/:id', (req, res) => {
    db.get(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Could not get project from the database' }));
});

router.get('/:id/actions', (req, res) => {
    db.getProjectActions(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Could not get project actions from the database' }));

});

router.post('/', (req, res) => {
    db.insert(req.body)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Could not create project' }));
});

router.put('/:id', (req, res) => {
    db.update(req.params.id, req.body)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Could not update project' }));
});

router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
        .then(data => res.status(200).json({ message: "Project successfully deleted" }))
        .catch(err => res.status(500).json({ message: 'Could not delete project' }));
});

module.exports = router;
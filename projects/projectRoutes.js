const router = require('express').Router();

const db = require('../data/helpers/projectModel');

router.get('/', (req, res) => {
    db.get()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Could not get projects from the database' }));
});

router.get('/:id', (req, res) => {
    const projectId = req.params.id;
    db.get(projectId)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Could not get project from the database' }));
});

router.get('/:id/actions', (req, res) => {
    const projectId = req.params.id;
    db.getProjectActions(projectId)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Could not get project actions from the database' }));

});

router.post('/', (req, res) => {
    db.insert(req.body)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Could not create project' }));
});

router.put('/:id', (req, res) => {
    const projectId = req.params.id;
    db.update(projectId, req.body)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Could not update project' }));
});

router.delete('/:id', (req, res) => {

});

module.exports = router;
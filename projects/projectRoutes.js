const router = require('express').Router();

const db = require('../data/helpers/projectModel');

router.get('/', (req, res) => {
    db.get()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Could not get projects from the database' }));
});

router.get('/:id', validateProjectId, (req, res) => {
    res.status(200).json(req.project);
});

router.get('/:id/actions', validateProjectId, (req, res) => {
    db.getProjectActions(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Could not get project actions from the database' }));

});

router.post('/', validProject, (req, res) => {
    db.insert(req.body)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Could not create project' }));
});

router.put('/:id', validateProjectId, (req, res) => {
    db.update(req.params.id, req.body)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Could not update project' }));
});

router.delete('/:id', validateProjectId, (req, res) => {
    db.remove(req.params.id)
        .then(data => res.status(200).json({ message: "Project successfully deleted" }))
        .catch(err => res.status(500).json({ message: 'Could not delete project' }));
});

function validateProjectId(req, res, next) {
    db.get(req.params.id)
        .then(project => {
            if (!project) {
                res.status(404).json({ message: 'Project Id Does not Exist' })
            } else {
                req.project = project;
                next();
            }
        })
        .catch(err => res.status(500).json({ message: 'Could not get project from the database' }));
}

function validProject(req, res, next) {
    const project = req.body;
    if (!project.name) {
        res.status(400).json({ message: 'missing required name field' });
    }
    else if (!project.description) {
        res.status(400).json({ message: 'missing required description field' });
    }
    else {
        next();
    }
}

module.exports = router;
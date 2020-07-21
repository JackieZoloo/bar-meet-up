const router = require('express').Router();
const meetupsCtrl = require('../controllers/meetup');

router.get('/',  meetupsCtrl.index);
router.post('/', checkAuth, meetupsCtrl.create);
router.put('/:id', checkAuth, meetupsCtrl.update);
router.delete('/:id', checkAuth, meetupsCtrl.delete);
router.post('/:id', checkAuth, meetupsCtrl.addPeople);

function checkAuth(req, res, next) {
    if(req.user) return next();
    return res.status(501).json({msg: 'Not Authorized'});
}

module.exports = router;
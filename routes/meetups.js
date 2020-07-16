const router = require('express').Router();
const meetupsCtrl = require('../controllers/meetup');

router.get(/*/api/puppies*/'/',  meetupsCtrl.index);
router.post(/*/api/puppies*/'/', checkAuth, meetupsCtrl.create);
router.put(/*/api/puppies*/'/:id', checkAuth, meetupsCtrl.update);
router.delete(/*/api/puppies*/'/:id', checkAuth, meetupsCtrl.delete);

function checkAuth(req, res, next) {
    if(req.user) return next();
    return res.status(501).json({msg: 'Not Authorized'});
}

module.exports = router;
const router = require('express').Router();
let User = require('../models/User');

router.route('/add').post((req, res) => {
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Age = Number(req.body.Age);
    const Contact = Number(req.body.Contact);
    const newUser = new User({
      Name,
      Email,
      Age,
      Contact,
    });
  
    newUser.save()
    .then(() => res.status(200).send("User added "))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/').get((req, res) => {
        res.send('123')
  });


  router.route('/:id').delete((req,res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise Deleted.'))
    .catch(err => res.status(400).json('Error:' + err));
  });

  module.exports = router;
const router = require('express').Router()
const places = require('../models/places.js')

//GET /places
router.get('/', (req, res) => {
       // let places = [{
    //     name: 'H-Thai-ML',
    //     city: 'Seattle',
    //     state: 'WA',
    //     cuisines: 'Thai, Pan-Asian',
    //     pic: '/images/restaurant2.jpg'
    //   }, {
    //     name: 'Coding Cat Cafe',
    //     city: 'Phoenix',
    //     state: 'AZ',
    //     cuisines: 'Coffee, Bakery',
    //     pic: '/images/restaurant1.jpg'
    //   }]

    res.render('places/index', {places})
})

// NEW
router.post('/', (req, res) => {
//console.log(req.body)
  if (!req.body.pic) {
  // place holder image if one is not there
  req.body.pic = 'http://placekitten.com/400/400'
}
  if (!req.body.city) {
  req.body.city = 'Anytown'
}
  if (!req.body.state) {
  req.body.state = 'USA'
}
  places.push(req.body)
  res.redirect('/places')
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id] })
  }
})



module.exports = router



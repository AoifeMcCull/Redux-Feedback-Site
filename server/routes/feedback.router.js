const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log('posting feedback!', newFeedback);
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)`
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log('error posting!', err)
        res.sendStatus(500);
    })
})

/*feedback object {
  "feeling" INT not null, feeling: 4
  "understanding" INT not null, understanding: 3
  "support" INT not null, support: 2
  "comments" text, comments: 'foo'
}
  
   */


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;

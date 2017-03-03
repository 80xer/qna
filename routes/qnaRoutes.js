var express = require('express');
var router = express.Router();
var qnaController = require('../controllers/qnaController.js');

/*
 * GET
 */
router.get('/', qnaController.list);

/*
 * GET
 */
router.get('/:id', qnaController.show);

/*
 * POST
 */
router.post('/', qnaController.create);

/*
 * PUT
 */
router.put('/:id', qnaController.update);

/*
 * DELETE
 */
router.delete('/:id', qnaController.remove);

module.exports = router;

var qnaModel = require('../models/qnaModel.js');

/**
 * qnaController.js
 *
 * @description :: Server-side logic for managing qnas.
 */
module.exports = {

    /**
     * qnaController.list()
     */
    list: function (req, res) {
        qnaModel.find(function (err, qnas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting qna.',
                    error: err
                });
            }
            return res.json(qnas);
        });
    },

    /**
     * qnaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        qnaModel.findOne({_id: id}, function (err, qna) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting qna.',
                    error: err
                });
            }
            if (!qna) {
                return res.status(404).json({
                    message: 'No such qna'
                });
            }
            return res.json(qna);
        });
    },

    /**
     * qnaController.create()
     */
    create: function (req, res) {
        if (!req.body.title || !req.body.body || !req.body.answers || req.body.answers.length <= 0) {
            return res.send(400, {
                error: 'question payload validation 실패'
            });
        }

        var qna = new qnaModel({
			createdAt : new Date(),
			updatedAt : new Date(),
			title : req.body.title,
			body : req.body.body,
			answers : req.body.answers
        });

        qna.save(function (err, qna) {
            if (err) {
                return res.status(500).json({
                    message: '서버 에러',
                    error: err
                });
            }
            return res.status(201).json(qna);
        });
    },

    /**
     * qnaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        qnaModel.findOne({_id: id}, function (err, qna) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting qna',
                    error: err
                });
            }
            if (!qna) {
                return res.status(404).json({
                    message: 'No such qna'
                });
            }

            qna.createdAt = req.body.createdAt ? req.body.createdAt : qna.createdAt;
			qna.updatedAt = req.body.updatedAt ? req.body.updatedAt : qna.updatedAt;
			qna.title = req.body.title ? req.body.title : qna.title;
			qna.body = req.body.body ? req.body.body : qna.body;
			qna.answers = req.body.answers ? req.body.answers : qna.answers;
			
            qna.save(function (err, qna) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating qna.',
                        error: err
                    });
                }

                return res.json(qna);
            });
        });
    },

    /**
     * qnaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        qnaModel.findByIdAndRemove(id, function (err, qna) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the qna.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};

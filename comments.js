// Create web server

const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const User = require('../models/user');
const Post = require('../models/post');
const mongoose = require('mongoose');

// Get all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get a specific comment
router.get('/:commentId', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        res.json(comment);
    } catch (err) {
        res.json({ message: err });
    }
});

// Post a comment
router.post('/', async (req, res) => {
    const comment = new Comment({
        _id: new mongoose.Types.ObjectId(),
        content: req.body.content,
        user: req.body.userId,
        post: req.body.postId
    });

    try {
        const savedComment = await comment.save();
        res.json(savedComment);
    } catch (err) {
        res.json({ message: err });
    }
});

// Delete a comment
router.delete('/:commentId', async (req, res) => {
    try {
        const removedComment = await Comment.remove({ _id: req.params.commentId });
        res.json(removedComment);
    } catch (err) {
        res.json({ message: err });
    }
});

// Update a comment
router.patch('/:commentId', async (req, res) => {
    try {
        const updatedComment = await Comment.updateOne(
            { _id: req.params.commentId },
            { $set: { content: req.body.content } }
        );
        res.json(updatedComment);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
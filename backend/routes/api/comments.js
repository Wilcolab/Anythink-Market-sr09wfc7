const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey Copilot, please add routes for creating, reading, updating, and deleting comments below.

router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();  
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch comments" });
    }
});

// add another endopoind to delete a comment by id
router.delete("/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    }   catch (err) {   
        res.status(500).json({ error: "Failed to delete comment" });
    }
});

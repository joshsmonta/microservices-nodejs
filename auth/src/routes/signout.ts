import express from 'express';

const router = express.Router();

router.get('/api/users/signout', (req, res) => {
    res.send("heu");
});

export { router as signOutRouter };
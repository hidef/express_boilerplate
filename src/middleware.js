import express from 'express';
const router = express.Router();

const echo = (req, res, next) => {
	if ( req.query.name ) {
		res.send('Hello, ' + req.query.name);
	} else {
		res.send('Hello, anonymous.');
	}
	next();
};

router.use(echo);

export default router;
export {
	echo
};

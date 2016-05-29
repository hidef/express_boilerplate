/**
 * Pants module.
 * @module boilerplate/middleware
 */
import express from 'express';
const router = express.Router();

/**
 * An demo expressjs middleware that replies to requests by greeting the requester
 * with by the query string parameter 'name'
 */
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

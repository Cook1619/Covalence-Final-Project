import { Router } from 'express';
import peopleRouter from './people';
import classesRouter from './classes';
import authRouter from './auth';
import usersRouter from './users';
import postGameRouter from './postgame';
import futureGamesRouter from './futuregames'
import gamesRouter from './games'
import contactRouter from './contactform'
import stripeDonationsRouter from './stripeDonations';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);

router.use('/users', usersRouter);
router.use('/postgame', postGameRouter);
router.use('/games', gamesRouter );
router.use('/contact', contactRouter);

router.route('*')
    // .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);


router.use('/futuregames', futureGamesRouter);    
router.use('/donate', stripeDonationsRouter);
router.use('/classes', classesRouter);
router.use('/people', peopleRouter);



export default router;
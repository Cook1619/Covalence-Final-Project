import { Router } from 'express';
import peopleRouter from './people';
import classesRouter from './classes';
import authRouter from './auth';
import usersRouter from './users';
import postGameRouter from './postgame';
import futureGamesRouter from './futuregame'
import gamesRouter from './games'
import stripeDonationsRouter from './stripeDonations';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);

router.use('/users', usersRouter);
router.use('/postgame', postGameRouter);
router.use('/futuregames', futureGamesRouter);
router.use('/games', gamesRouter )

router.route('*')
    // .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);
    
router.use('/donate', stripeDonationsRouter);
router.use('/classes', classesRouter);
router.use('/people', peopleRouter);



export default router;
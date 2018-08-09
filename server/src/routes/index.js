import { Router } from 'express';
import classesRouter from './classes';
import authRouter from './auth';
import usersRouter from './users';
import singleUserRouter from './singleuser';
import postGameRouter from './postgame';
import futureGamesRouter from './futuregames'
import gamesRouter from './games'
import betRouter from './bet'
import contactRouter from './contactform'
import stripeDonationsRouter from './stripeDonations';
import fakeItTillYouMakeItRouter from './fakeGameResult';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);

router.use('/users', usersRouter);
router.use('/postgame', postGameRouter);
router.use('/games', gamesRouter );
router.use('/contact', contactRouter);
router.use('/singleuser', singleUserRouter);
router.use('/bet', betRouter);
router.use('/fake_it', fakeItTillYouMakeItRouter);
router.route('*')
    // .post(tokenMiddleware, isLoggedIn)
    // .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);
router.use('/bet', betRouter);
router.use('/futuregames', futureGamesRouter);    
router.use('/donate', stripeDonationsRouter);
router.use('/classes', classesRouter);



export default router;
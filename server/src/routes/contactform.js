import { Router } from 'express';
import { sendEmail } from '../utils/mail';

let router = Router();

// router.post('/', (req, res, next) => {
//     let messageBody = `Name: ${req.body.name}
//                        Email: ${req.body.email}
//                        Message: ${req.body.message}`;
//     sendEmail('cook6348@gmail.com', 'no-reply@covalence.io', 'New Contact Form Submission', messageBody)
//         .then((response) => {
//             console.log(response);
//             res.sendStatus(201);
//         }).catch((err) => {
//             next(err);
//         })
// })

router.post('/', (req, res, next) => {
    let messageBody = `
        Name: ${req.body.name}
        Email: ${req.body.email}
        Message: ${req.body.message}`

    let verificationMessage = `
    Hey ${req.body.name},
    Thank you for your expressed interest the Strikezone!! Your number 1 place for your MLB betting needs!!!

    Regards
    Strikezone Team
    `
    sendEmail(req.body.email, false, "no-reply@cook.gmail", "Request for Info - Sent", verificationMessage)
        .then((r) => {
            sendEmail("cook6348@gmail.com", "peterjacobgrant@gmail.com", "no-reply@cook.gmail", "Request for Info", messageBody)
                .then((r) => {
                    res.sendStatus(201);
                }).catch((err) => {
                    next(err);
                })
        }).catch((err) => {
            next(err);
        });
});

export default router;
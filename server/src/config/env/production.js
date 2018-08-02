// This object should mimic the structure of the object in env/development, but should use env properties
// Remember to set these env properties in the environment in which you deploy (AWS, Heroku, etc.)
// Also set the NODE_ENV environment property to "production" (no quotes) in AWS, Heroku, etc.
let cfg = {
    MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
    STRIPE_SK: process.env.STRIPE_SK,
    SPORTS_SK: process.env.SPORTS_SK,
    GOOGLE_SK: process.env.GOOGLE_SK
};

export { cfg };
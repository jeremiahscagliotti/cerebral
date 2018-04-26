const passport = require('passport')
    , OAuthStrategy = require('passport-oauth').OAuthStrategy;

passport.use('provider', new OAuthStrategy({
        requestTokenURL: 'https://www.cerebral.com/oauth/request_token',
        accessTokenURL: 'https://www.cerebral.com/oauth/access_token',
        userAuthorizationURL: 'https://www.cerebral.com/oauth/authorize',
        consumerKey: '123-456-789',
        consumerSecret: 'shhh-its-a-secret'
    },
    function(token, tokenSecret, profile, done) {
        models.User.findCreateFind({where: {id: 1}, function(err, user) {
            done(err, user);
        });
    }
));
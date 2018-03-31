const Twit = require('twit');
const constants = require('./constants');

const twitter = new Twit({
  consumer_key: constants.creds.consumer.key,
  consumer_secret: constants.creds.consumer.secret,
  access_token: constants.creds.user.token,
  access_token_secret: constants.creds.user.secret
});

twitter.get('statuses/user_timeline', {
  screen_name: constants.screen_name
}, (err, tweets, response) => {
  if (tweets) {
    let prevTweet = null;
    tweets.forEach(tweet => {
      if (tweet.text.indexOf('Retweeted') === 0 && tweet.text.indexOf('#nodelete') < 0) {
        twitter.post('/statuses/destroy/:id', {
          id: tweet.id_str
        }, () => {});
      }

      if (prevTweet) {
        // Get the first ten characters of both.
        let prev = prevTweet.text.slice(0, 10);
        let curr = tweet.text.slice(0, 10);

        // Delete previous tweet if current and previous have the same first-10 chars.
        if (prev.startsWith(curr)) {
          twitter.post('/statuses/destroy/:id', {
            id: prevTweet.id_str
          });
        }
      }

      prevTweet = tweet;
    });
  }
});
# Retweet Deleter

# What, Why

Apparently Twitter<->Facebook connection is broken and every tweet you retweet on Twitter gets posted to Facebook (expected behaviour), but it also gets posted to Twitter again as if it is a Facebook post in itself (unexpected behavior).

I got sick of manually having to delete this extra unwanted tweet every time I retweeted something. So, I wrote this little script that will run every X interval of time to look for my recent tweets and delete the unwanted ones.

Also I can add `#nodelete` to a tweet to make this script skip deleting it.

# How

- Make an [app on Twitter](https://apps.twitter.com), get your app's Consumer Key and Consumer Secret.
- Authenticate your user with the app, get your Access Token and Access Token Secret.
- Clone this repo and `cd` into it.
- Plug these in `constants.js` along with your `screen_name` (Twitter handle).
- `npm i`
- `node .` (Make a CRON job or whatever if you want to run this repeatedly.)
const activities = require('./lib/activities'),
    athletes = require('./lib/athletes'),
    clubs = require('./lib/clubs'),
    gears = require('./lib/gears'),
    routes = require('./lib/routes');
    runningRaces = require('./lib/running-races'),
    segmentEfforts = require('./lib/segment-efforts'),
    segments = require('./lib/segments'),
    streams = require('./lib/streams'),
    uploads = require('./lib/uploads')

const strava = {};

strava.activities = activities;
strava.athletes = athletes;
strava.clubs = clubs;
strava.gears = gears;
strava.routes = routes;
strava.runningRaces = runningRaces;
strava.segmentEfforts = segmentEfforts;
strava.segments = segments;
strava.streams = streams;
strava.uploads = uploads;

module.exports = strava;
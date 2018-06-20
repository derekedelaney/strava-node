const Request = require('./utils').Request;
const ENDPOINTS = require('./utils').ENDPOINTS;

class Activities {
    constructor () {
        this.request = new Request();
    }

    createActivity (params) {
        return this.request.post(ENDPOINTS.ACTIVITIES, params, body);
    }

    getActivityById () {

    }

    getCommentsByActivityId () {

    }

    getKudoersByActivityId () {

    }

    getLapsByActivityId () {

    }

    getLoggedInAthleteActivities () {

    }

    getZonesByActivityId () {

    }

    updateActivityById () {

    }
}

module.exports = Activities;
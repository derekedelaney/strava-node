const Request = require('./utils').Request;
const ENDPOINTS = require('./utils').ENDPOINTS;

class Activities {
    constructor () {
        this.request = new Request();
    }

    createActivity(params, body) {
        return this.request.post(ENDPOINTS.ACTIVITIES, params, body);
    }

    getActivityById(id, params) {
        const endpoint = `${ENDPOINTS.ACTIVITIES}/${id}`;
        return this.request.get(endpoint, params)
    }

    getCommentsByActivityId() {

    }

    getKudoersByActivityId() {

    }

    getLapsByActivityId() {

    }

    getLoggedInAthleteActivities(params) {
        const endpoint = `${ENDPOINTS.ATHLETE}${ENDPOINTS.ACTIVITIES}`;
        return this.request.get(endpoint, params);
    }

    getZonesByActivityId() {

    }

    updateActivityById() {

    }
}

module.exports = Activities;
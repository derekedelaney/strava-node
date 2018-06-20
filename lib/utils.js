const request = require('request-promise');
const Authenticator = require('./authenticator');

const baseUrl = 'https://www.strava.com/api/v3';
const ENDPOINTS = {
    ACTIVITIES: '/activities',
    ATHLETE: '/athlete',
    ATHLETES: '/athletes',
    CLUBS: '/clubs',
    GEAR: '/gear',
    ROUTES: '/routes',
    RUNNING_RACES: '/running_races',
    SEGMENTS: '/segments',
    SEGMENT_EFFORTS: '/segment_efforts',
    UPLOADS: '/uploads',
};

class Request {
    constructor() {
        this.authenticator = new Authenticator();
    }

    get(endpoint, params) {
        const token = this.authenticator.getToken();
        const options = {
            uri: baseUrl + endpoint,
            qs: { ...params },
            headers: {
                Authorization: 'Bearer ' + token
            },
            json: true
        };

        return request(options);
    }

    post(endpoint, params, body) {
        const token = this.authenticator.getToken();
        const options = {
            method: 'POST',
            uri: baseUrl + endpoint,
            qs: { ...params },
            headers: {
                Authorization: 'Bearer ' + token
            },
            body: body,
            json: true
        };

        return request(options);
    }

    put(endpoint, params, body) {
        const token = this.authenticator.getToken();
        const options = {
            method: 'POST',
            uri: baseUrl + endpoint,
            qs: { ...params },
            headers: {
                Authorization: 'Bearer ' + token
            },
            body: body,
            json: true
        };

        return request(options);
    }
}

module.exports = { ENDPOINTS, Request };
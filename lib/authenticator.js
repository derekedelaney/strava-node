class Authenticator {
    constructor() {
        this.token = undefined;
        this.clientId = undefined;
        this.clientSecret = undefined;
        this.redirectUri = undefined;
    }

    _fetchEnvironmentVars() {
        if (typeof process.env.STRAVA_ACCESS_TOKEN !== "undefined")
            this.token = process.env.STRAVA_ACCESS_TOKEN;
        if (typeof process.env.STRAVA_CLIENT_ID !== "undefined")
            this.clientId = process.env.STRAVA_CLIENT_ID;
        if (typeof process.env.STRAVA_CLIENT_SECRET !== "undefined")
            this.clientSecret = process.env.STRAVA_CLIENT_SECRET;
        if (typeof process.env.STRAVA_REDIRECT_URI !== "undefined")
            this.redirectUri = process.env.STRAVA_REDIRECT_URI;
    };

    getToken() {
        if (!this.token) {
            this._fetchEnvironmentVars();
        }
        return this.token;
    }

    getClientId() {
        if (!this.clientId) {
            this._fetchEnvironmentVars();
        }
        return this.clientId;
    }

    getClientSecret() {
        if (!this.clientSecret) {
            this._fetchEnvironmentVars();
        }
        return this.clientSecret;
    }

    getRedirectUri() {
        if (!this.redirectUri) {
            this._fetchEnvironmentVars();
        }
        return this.redirectUri;
    }

    reset() {
        this.token = undefined;
        this.clientId = undefined;
        this.clientSecret = undefined;
        this.redirectUri = undefined;
    }
}

module.exports = Authenticator;

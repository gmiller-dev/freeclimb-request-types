'use strict';

// Request Utils
function isInboundRequest(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) == "inboundCall";
}
function isAddToConferenceNotification(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) == "addToConferenceNotification";
}

exports.isAddToConferenceNotification = isAddToConferenceNotification;
exports.isInboundRequest = isInboundRequest;

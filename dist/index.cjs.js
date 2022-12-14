'use strict';

// Request Utils
function isAddToConferenceNotification(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "addToConferenceNotification";
}
function isAddToQueueNotification(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "addToQueueNotification";
}
function isCallControl(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "callControl";
}
function isCallStatus(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "callStatus";
}
function isConferenceRecordingStatus(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "conferenceRecordingStatus";
}
function isConferenceStatus(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "conferenceStatus";
}
function isCreateConference(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "createConference";
}
function isDequeue(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "dequeue";
}
function isGetDigits(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "getDigits";
}
function isGetSpeech(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "getSpeech";
}
function isInboundCall(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "inboundCall";
}
function isLeaveConference(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "leaveConference";
}
function isMachineDetected(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "machineDetected";
}
function isMessageDelivery(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "messageDelivery";
}
function isMessageStatus(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "messageStatus";
}
function isOutDialApiConnect(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "outDialApiConnect";
}
function isOutDialConnect(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "outDialConnect";
}
function isOutDialStart(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "outDialStart";
}
function isQueueWait(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "queueWait";
}
function isRecord(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "record";
}
function isRedirect(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "redirect";
}
function isRemoveFromQueueNotification(requestBody) {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.requestType) === "removeFromQueueNotification";
}

exports.isAddToConferenceNotification = isAddToConferenceNotification;
exports.isAddToQueueNotification = isAddToQueueNotification;
exports.isCallControl = isCallControl;
exports.isCallStatus = isCallStatus;
exports.isConferenceRecordingStatus = isConferenceRecordingStatus;
exports.isConferenceStatus = isConferenceStatus;
exports.isCreateConference = isCreateConference;
exports.isDequeue = isDequeue;
exports.isGetDigits = isGetDigits;
exports.isGetSpeech = isGetSpeech;
exports.isInboundCall = isInboundCall;
exports.isLeaveConference = isLeaveConference;
exports.isMachineDetected = isMachineDetected;
exports.isMessageDelivery = isMessageDelivery;
exports.isMessageStatus = isMessageStatus;
exports.isOutDialApiConnect = isOutDialApiConnect;
exports.isOutDialConnect = isOutDialConnect;
exports.isOutDialStart = isOutDialStart;
exports.isQueueWait = isQueueWait;
exports.isRecord = isRecord;
exports.isRedirect = isRedirect;
exports.isRemoveFromQueueNotification = isRemoveFromQueueNotification;

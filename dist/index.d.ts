export declare function isAddToConferenceNotification(requestBody: any): requestBody is AddToConferenceNotificationBody;
export declare function isAddToQueueNotification(requestBody: any): requestBody is AddToQueueNotifcationBody;
export declare function isCallControl(requestBody: any): requestBody is CallControlBody;
export declare function isCallStatus(requestBody: any): requestBody is CallStatusBody;
export declare function isConferenceRecordingStatus(requestBody: any): requestBody is ConferenceRecordingStatusBody;
export declare function isConferenceStatus(requestBody: any): requestBody is ConferenceStatusBody;
export declare function isCreateConference(requestBody: any): requestBody is CreateConferenceBody;
export declare function isDequeue(requestBody: any): requestBody is DequeueBody;
export declare function isGetDigits(requestBody: any): requestBody is GetDigitsBody;
export declare function isGetSpeech(requestBody: any): requestBody is GetSpeechBody;
export declare function isInboundCall(requestBody: any): requestBody is InboundCallBody;
export declare function isLeaveConference(requestBody: any): requestBody is LeaveConferenceBody;
export declare function isMachineDetected(requestBody: any): requestBody is MachineDetectedBody;
export declare function isMessageDelivery(requestBody: any): requestBody is MessageDeliveryBody;
export declare function isMessageStatus(requestBody: any): requestBody is MessageStatusBody;
export declare function isOutDialApiConnect(requestBody: any): requestBody is OutDialApiConnectBody;
export declare function isOutDialConnect(requestBody: any): requestBody is OutDialConnectBody;
export declare function isOutDialStart(requestBody: any): requestBody is OutDialStartBody;
export declare function isQueueWait(requestBody: any): requestBody is QueueWaitBody;
export declare function isRecord(requestBody: any): requestBody is RecordBody;
export declare function isRedirect(requestBody: any): requestBody is RedirectBody;
export declare function isRemoveFromQueueNotification(requestBody: any): requestBody is RemoveFromQueueNotificationBody;
export interface FCApiRequest<T> {
    body: T;
}
export type CallStatus = "ringing" | "inProgress" | "completed" | "busy" | "failed" | "noAnswer" | "canceled";
export type CallDirection = "inbound" | "outbound" | "outboundDial";
export interface AddToConferenceNotificationBody {
    requestType: "addToConferenceNotification";
    callId: string;
    accountId: string;
    from: string;
    to: string;
    callStatus: CallStatus;
    direction: CallDirection;
    conferenceId: string;
    queueId: string | null;
}
export interface AddToQueueNotifcationBody {
    requestType: "addToQueueNotification";
    callId: string;
    acountId: string;
    from: string;
    to: string;
    callStatus: CallStatus;
    direction: CallDirection;
    conferenceId: string | null;
    queueId: string;
}
export interface CallControlBody {
    requestType: "callControl";
    callId: string;
    accountId: string;
    conferenceId: string;
    digits: string;
}
export interface CallStatusBody {
    requestType: "callStatus";
    callId: string;
    accountId: string;
    from: string;
    to: string;
    callStatus: CallStatus;
    direction: CallDirection;
    conferenceId: null;
    queueId: null;
    callDuration: string;
    recordingUrl?: string;
    recordingId?: string;
    recordingDurationSec?: string;
    parentCallId: string;
}
export type ConferenceStatus = "empty" | "populated" | "inProgress" | "Terminated";
export interface ConferenceRecordingStatusBody {
    requestType: "conferenceRecordingStatus";
    callId: string;
    accountId: string;
    from: string;
    to: string;
    callStatus: CallStatus;
    direction: CallDirection;
    conferenceId: string;
    queueId: string | null;
    status: ConferenceStatus;
    recordingUrl?: string;
    recordingId?: string;
    recordingDurationSec?: number;
}
export interface ConferenceStatusBody {
    requestType: "conferenceStatus";
    callId: string;
    accountId: string;
    from: string;
    to: string;
    callStatus: CallStatus;
    direction: CallDirection;
    conferenecId: string;
    queueId: string | null;
    status: ConferenceStatus;
    recordingUrl?: string;
    recordingId?: string;
    recordingDurationSec?: number;
}
export interface CreateConferenceBody {
    requestType: "createConference";
    callId: string;
    accountId: string;
    from: string;
    to: string;
    callStatus: CallStatus;
    direction: CallDirection;
    conferenceId: string;
    queueId: string;
    status: ConferenceStatus;
    recordingUrl?: string;
    recordingId?: string;
    recordingDurationSec?: number;
}
/**
 * A queued call has been dequeued and the actionUrl
 * of the corresponding Enqueue action is being invoked.
 * A PerCL response is expected.
 */
export interface DequeueBody {
    requestType: "dequeue";
    callId: string;
    accountId: string;
    from: string;
    to: string;
    callStatus: CallStatus;
    direction: CallDirection;
    conferenceId: string | null;
    queueId?: string;
    queueResult?: string;
    queueTime?: number;
}
export type GetDigitsReason = "finishKey" | "timeout" | "maxDigits";
/**
 * The GetDigits command has completed and its actionUrl is being invoked.
 * A PerCL response is expected.
 */
export interface GetDigitsBody {
    requestType: "getDigits";
    from: string;
    to: string;
    callId: string;
    accountId: string;
    callStatus: CallStatus;
    direction: CallDirection;
    conferenceId: string | null;
    queueId: string | null;
    digits: string;
    reason: GetDigitsReason;
    parentCallId: string;
}
export type GetSpeechReason = "error" | "digit" | "noInput" | "noMatch" | "recognition";
/**
 * The GetSpeech command has completed and its actionUrl is being invoked.
 * A PerCL response is expected.
 */
export interface GetSpeechBody {
    requestType: "getSpeech";
    callId: string;
    accountId: string;
    from: string;
    to: string;
    callStatus: CallStatus;
    direction: CallDirection;
    conferenceId: string | null;
    queueId: string | null;
    reason: GetSpeechReason;
    recognitionResult: string | number;
    confidence: number | null;
    parentCallId: string;
}
/**
 * An inbound Call to a number registered on FreeClimb will trigger a request
 * to the voiceUrl of the application the number is assigned to.
 * FreeClimb expects to receive PerCL in response to this request
 * in order to process the Call. The following parameters are sent as the POST body.
 */
export interface InboundCallBody {
    /**
     * Context or reason why this request is being made.
     * Will be inboundCall -
     * An inbound call was received and the voiceUrl is being invoked.
     */
    requstType: "inboundCall";
    /**
     * Unique identifier for this Call, generated by FreeClimb.
     */
    callId: string;
    /**
     * Account ID associated with your account.
     */
    accountId: string;
    /**
     * Phone number of the party that initiated the Call (in E.164 format).
     */
    from: string;
    /**
     * Phone number provisioned to you and to which this Call is directed (in E.164 format).
     */
    to: string;
    /**
     * Descriptive status for the Call. Valid values are:
     * ringing - Call is currently ringing.
     * inProgress - Call was answered and is currently in progress (not queued, not in conference).
     * completed - Call ended normally.
     * busy - Caller received a busy signal.
     * failed - Call could not be completed as dialed (most likely because the phone number was non-existent).
     * noAnswer - Call ended without being answered.
     * canceled - Call was canceled via the REST API while queued or ringing.
     */
    callStatus: CallStatus;
    /**
     * String describing the direction of the Call. Will be inbound.
     */
    direction: "inbound";
    /**
     * This is only populated if request pertains to a Conference. Otherwise, it is set to null.
     */
    conferenceId: string | null;
    /**
     * This is only populated if the request pertains to a Queue. Otherwise, it is set to null.
     */
    queueId: string | null;
    parentCallId: null;
}
/**
 * A Call has been unbridged from a Conference and its leaveConferenceUrl is being invoked.
 * A PerCL response is expected — unless the URL is invoked due to the participant hanging up.
 */
export interface LeaveConferenceBody {
    /**
     * Context or reason why this request is being made.
     * Will be leaveConference - Call has been unbridged from
     * a Conference and its leaveConferenceUrl is being invoked.
     */
    requestType: "leaveConference";
    /**
     * Unique ID for this call, generated by FreeClimb. This is the call leg which has left the Conference.
     */
    callId: string;
    /**
     * Account ID associated with your account.
     */
    accountId: string;
    /**
     * Phone number of the party that initiated the Call (in E.164 format).
     */
    from: string;
    /**
     * Phone number provisioned to you and to which this Call is directed (in E.164 format).
     */
    to: string;
    /**
     * Descriptive status for the Call. Valid values are:
     * ringing - Call is currently ringing.
     * inProgress - Call was answered and is currently in progress (not queued, not in conference).
     * completed - Call ended normally.
     * busy - Caller received a busy signal.
     * failed - Call could not be completed as dialed (most likely because the phone number was non-existent).
     * noAnswer - Call ended without being answered.
     * canceled - Call was canceled via the REST API while queued or ringing.
     */
    callStatus: CallStatus;
    /**
     * String describing the direction of the Call
     * – inbound for inbound calls,
     * outbound for calls initiated via the REST API,
     * or outboundDial for calls initiated by the OutDial command.
     */
    direction: CallDirection;
    /**
     * ID of the Conference from which the call leg was removed.
     */
    conferenceId: string;
    /**
     * This is only populated if the request pertains to a Queue. Otherwise, it is set to null.
     */
    queueId: string;
}
/**
 * An outbound call spawned by OutDial detected an answer by a machine
 * (answering machine or fax/modem machine)
 * and ifMachineUrl is being invoked.
 * A PerCL response is expected.
 */
export interface MachineDetectedBody {
    /**
     * Context or reason why this request is being made.
     * Will be machineDetected - An outbound call spawned by OutDial
     * was answered by a machine and the ifMachineUrl is being invoked.
     */
    requestType: "machineDetected";
    /**
     * Unique identifier for this Call, generated by FreeClimb.
     */
    callId: string;
    /**
     * Account ID associated with your account.
     */
    accountId: string;
    /**
     * Phone number of the party that initiated the Call (in E.164 format).
     */
    from: string;
    /**
     * Phone number provisioned to you and to which this Call is directed (in E.164 format).
     */
    to: string;
    /**
     * Descriptive status for the Call. Valid values are:
     * ringing - Call is currently ringing.
     * inProgress - Call was answered and is currently in progress (not queued, not in conference).
     * completed - Call ended normally.
     * busy - Caller received a busy signal.
     * failed - Call could not be completed as dialed (most likely because the phone number was non-existent).
     * noAnswer - Call ended without being answered.
     * canceled - Call was canceled via the REST API while queued or ringing.
     */
    callStatus: CallStatus;
    /**
     * String describing the direction of the Call
     * – inbound for inbound calls,
     * outbound for calls initiated via the REST API,
     * or outboundDial for calls initiated by the OutDial command.
     */
    direction: CallDirection;
    /**
     * This is only populated if request pertains to a conference. Otherwise, it is set to null.
     */
    conferenceId: string | null;
    /**
     * This is only populated if the request pertains to a queue. Otherwise, it is set to null.
     */
    queueId: string | null;
    /**
     * Call ID of the leg which initiated the OutDial.
     */
    parentCall: string;
    /**
     * Either answering machine or fax modem
     */
    machineType: "anwering machine" | "fax modem";
}
/**
 * An SMS has been received by the platform and is being delivered
 * to the smsUrl of the customer application that is associated
 * with the destination number. A PerCL response will be ignored.
 */
export interface MessageDeliveryBody {
    /**
     * Value will be messageDelivery
     * - An SMS message has been received by
     * the platform and is being delivered to the customer
     * application associated with the destination number.
     */
    requestType: "messageDelivery";
    /**
     * Account ID associated with your account.
     */
    accountId: string;
    /**
     * Unique ID for this message, generated by FreeClimb.
     */
    messageId: string;
    /**
     * Phone number of the party that initiated the Call (in E.164 format).
     */
    from: string;
    /**
     * Phone number provisioned to you and to which this Call is directed (in E.164 format).
     */
    to: string;
    /**
     * Body of the SMS message.
     */
    text: string;
    /**
     * Value will be inbound to indicate the receipt of a message into the FreeClimb platform.
     */
    direction: "inBound";
    /**
     * ID of the application to which the destination number is assigned.
     */
    applicationId: string;
    /**
     * Value will be received to indicate that the platform has successfully received the incoming message.
     */
    status: "received";
    /**
     * ID of the destination phone number.
     */
    phoneNumber: string;
}
export type MessageStaus = "queued" | "rejected" | "sending" | "sent" | "failed" | "expired" | "deleted" | "unknown";
/**
 * An outbound SMS has changed status and the notificationUrl from
 * the Sms command or Send an SMS request is being invoked.
 * A PerCL response will be ignored.
 */
export interface MessageStatusBody {
    /**
     * Value will be messageStatus -
     * An outbound SMS has changed status and
     * the Sms command's notificationUrl is being invoked.
     */
    requestType: "messageStatus";
    /**
     * Unique ID for this message, generated by FreeClimb.
     */
    messageId: string;
    /**
     * Unique ID for the Call in the context of which the Sms PerCL command was issued.
     */
    calllId: string;
    /**
     * Phone number of the party that initiated the Call (in E.164 format).
     */
    from: string;
    /**
     * Phone number provisioned to you and to which this Call is directed (in E.164 format).
     */
    to: string;
    /**
     * Body of the SMS message.
     */
    text: string;
    /**
     * Value will be outbound to indicate an outgoing SMS from FreeClimb.
     */
    direction: "outBound";
    /**
     * ID of the application to which the destination number is assigned.
     */
    applicationId: string;
    /**
     * The status of the SMS at the time the callback was sent. Valid values are:
     * • queued - Message has been accepted by the platform but has not yet been
     * • rejected - Request to send an SMS failed some basic check, and the platform decided not to send a message. Examples of rejected requests:
     * 1. from number doesn't belong to the requesting account
     * 2. to number not in service area
     * 3. text message is too long, etc.
     * • sending - Message is in the process of being sent to an upstream SMS provider by the platform.
     * • sent - Message has been delivered to an upstream SMS provider by the platform.
     * • failed - Message was submitted to one or more upstream SMS providers but none of them accepted the message, and no suitable potential providers remain to try the message on.
     * submitted to an SMS provider.
     * • expired - Message failed to send after the carrier repeatedly attempted to deliver the message within a period of time.
     * • deleted - Message failed as it was deleted by the carrier.
     * • unknown - Message failed to send but the carrier did not provide any reason why.
     */
    status: MessageStaus;
    /**
     * ID of the destination phone number.
     */
    phoneNumberId: string;
}
export type OutDialStatus = "inProgress" | "busy" | "noAnswer" | "failed" | "canceled";
/**
 * An outbound call initiated by the REST API has
 * connected and the callConnectUrl specified
 * in the API request is being invoked.
 * A PerCL response is expected.
 */
export interface OutDialApiConnectBody {
    /**
     * Context or reason why this request is being made.
     * Will be outDialApiConnect - An outbound call spawned by the REST API
     * has connected and the callConnectUrl
     * specified in the API request is being invoked.
     */
    requestType: "outDialApiConnect";
    /**
     * Unique identifier for this Call, generated by FreeClimb
     */
    callId: string;
    /**
     * Account ID associated with your account.
     */
    accountId: string;
    /**
     * Phone number of the party that initiated the Call (in E.164 format).
     */
    from: string;
    /**
     * Phone number or SIP URL of the party that is receiving the call (phone number in E.164 format).
     */
    to: string;
    /**
     * Descriptive status for the Call. Valid values are:
     * ringing - Call is currently ringing.
     * inProgress - Call was answered and is currently in progress (not queued, not in conference).
     * completed - Call ended normally.
     * busy - Caller received a busy signal.
     * failed - Call could not be completed as dialed (most likely because the phone number was non-existent).
     * noAnswer - Call ended without being answered.
     * canceled - Call was canceled via the REST API while queued or ringing.
     */
    callStatus: CallStatus;
    /**
     * String describing the direction of the Call
     * – inbound for inbound calls,
     * outbound for calls initiated via the REST API,
     * or outboundDial for calls initiated by the OutDial command.
     */
    direction: CallDirection;
    /**
     * This is only populated if request pertains to a Conference. Otherwise, it is set to null.
     */
    conferenceId: string | null;
    /**
     * This is only populated if the request pertains to a queue.
     * Otherwise, it is set to null.
     */
    queueId: string | null;
    /**
     * Outcome of the dial attempt. Valid values are:
     *  inProgress - Called party answered the Call.
     *  busy - FreeClimb received a busy signal when trying to connect to the called party.
     *  noAnswer - Called party did not pick up before the timeout period passed.
     *  failed - FreeClimb was unable to route to the given phone number. This is frequently caused by dialing a properly formatted but non-existent phone number.
     *  canceled - Call was canceled via the REST API before it was answered.
     */
    dialCallStatus: OutDialStatus;
    /**
     * ID of the Call that created this leg (child call).
     */
    parentCallId: string;
}
/**
 * A Call generated by OutDial has connected and
 * the callConnectUrl is being invoked.
 * This request is made in the context of the Call leg
 * that was generated using OutDial.
 * A PerCL response is expected.
 */
export interface OutDialConnectBody {
    /**
     * Context or reason why this request is being made.
     * Will be outDialConnect - A Call generated by
     * OutDial has connected and the callConnectUrl
     * is being invoked.
     */
    requestType: "outDialConnect";
    /**
     * Unique identifier for this Call, generated by FreeClimb
     */
    callId: string;
    /**
     * Account ID associated with your account.
     */
    accountId: string;
    /**
     * Phone number of the party that initiated the Call (in E.164 format).
     */
    from: string;
    /**
     * Phone number or SIP URL of the party that is receiving the call (phone number in E.164 format).
     */
    to: string;
    /**
     * Descriptive status for the Call. Valid values are:
     * ringing - Call is currently ringing.
     * inProgress - Call was answered and is currently in progress (not queued, not in conference).
     * completed - Call ended normally.
     * busy - Caller received a busy signal.
     * failed - Call could not be completed as dialed (most likely because the phone number was non-existent).
     * noAnswer - Call ended without being answered.
     * canceled - Call was canceled via the REST API while queued or ringing.
     */
    callStatus: CallStatus;
    /**
     * String describing the direction of the Call
     * – inbound for inbound calls,
     * outbound for calls initiated via the REST API,
     * or outboundDial for calls initiated by the OutDial command.
     */
    direction: CallDirection;
    /**
     * This is only populated if request pertains to a Conference. Otherwise, it is set to null.
     */
    conferenceId: string | null;
    /**
     * This is only populated if the request pertains to a queue.
     * Otherwise, it is set to null.
     */
    queueId: string | null;
    /**
     * ID of the Call that created this leg (child call).
     */
    parentCallId: string;
    /**
     * Outcome of the dial attempt. Valid values are:
     *  inProgress - Called party answered the Call.
     *  busy - FreeClimb received a busy signal when trying to connect to the called party.
     *  noAnswer - Called party did not pick up before the timeout period passed.
     *  failed - FreeClimb was unable to route to the given phone number. This is frequently caused by dialing a properly formatted but non-existent phone number.
     *  canceled - Call was canceled via the REST API before it was answered.
     */
    dialCallStatus: OutDialStatus;
}
/**
 * The OutDial command has started and
 * the actionUrl is being invoked. This request
 * is made in the context of the parent call
 * (Call leg that invoked).
 * A PerCL response is expected.
 */
export interface OutDialStartBody {
    /**
     * Context or reason why this request is being made.
     * Will be outDialStart - The OutDial command
     * has started and the actionUrl is being invoked.
     */
    requestType: "outDialStart";
    /**
         * Unique identifier for this Call, generated by FreeClimb
         */
    callId: string;
    /**
     * Account ID associated with your account.
     */
    accountId: string;
    /**
     * Phone number of the party that initiated the Call (in E.164 format).
     */
    from: string;
    /**
     * Phone number or SIP URL of the party that is receiving the call (phone number in E.164 format).
     */
    to: string;
    /**
     * Descriptive status for the Call. Valid values are:
     * ringing - Call is currently ringing.
     * inProgress - Call was answered and is currently in progress (not queued, not in conference).
     * completed - Call ended normally.
     * busy - Caller received a busy signal.
     * failed - Call could not be completed as dialed (most likely because the phone number was non-existent).
     * noAnswer - Call ended without being answered.
     * canceled - Call was canceled via the REST API while queued or ringing.
     */
    callStatus: CallStatus;
    /**
     * String describing the direction of the Call
     * – inbound for inbound calls,
     * outbound for calls initiated via the REST API,
     * or outboundDial for calls initiated by the OutDial command.
     */
    direction: CallDirection;
    /**
     * This is only populated if request pertains to a Conference. Otherwise, it is set to null.
     */
    conferenceId: string | null;
    /**
     * This is only populated if the request pertains to a queue.
     * Otherwise, it is set to null.
     */
    queueId: string | null;
    /**
     * ID of the child call that was generated as a result of the Outdial.
     */
    dialCallId: string;
    /**
     * ID of the Call that created this leg (child call).
     */
    parentCallId: string;
}
/**
 * A queued Call is requesting instructions to execute
 * during the wait in the Queue and the corresponding
 * waitUrl is being invoked. A PerCL response is expected.
 * The following are the only PerCL commands supported
 * in the PerCL script response to a request to the waitUrl:
 *  Play
 *  Say
 *  Pause
 *  GetDigits
 *  Dequeue
 *  Hangup
 */
export interface QueueWaitBody {
    /**
     * Context or reason why this request is being made.
     * Will be queueWait - A queued call is requesting
     * instructions to execute during the wait in the
     * queue and the corresponding waitUrl is being invoked.
     */
    requestType: "queueWait";
    /**
     * Unique identifier for this Call, generated by FreeClimb
     */
    callId: string;
    /**
     * Account ID associated with your account.
     */
    accountId: string;
    /**
     * Phone number of the party that initiated the Call (in E.164 format).
     */
    from: string;
    /**
     * Phone number or SIP URL of the party that is receiving the call (phone number in E.164 format).
     */
    to: string;
    /**
     * Descriptive status for the Call. Valid values are:
     * ringing - Call is currently ringing.
     * inProgress - Call was answered and is currently in progress (not queued, not in conference).
     * completed - Call ended normally.
     * busy - Caller received a busy signal.
     * failed - Call could not be completed as dialed (most likely because the phone number was non-existent).
     * noAnswer - Call ended without being answered.
     * canceled - Call was canceled via the REST API while queued or ringing.
     */
    callStatus: CallStatus;
    /**
     * String describing the direction of the Call
     * – inbound for inbound calls,
     * outbound for calls initiated via the REST API,
     * or outboundDial for calls initiated by the OutDial command.
     */
    direction: CallDirection;
    /**
     * This is only populated if request pertains to a Conference. Otherwise, it is set to null.
     */
    conferenceId: string | null;
    /**
     * ID of the Queue the caller is in.
     */
    queueId: string;
    /**
     * Current queue position of the enqueued Call.
     */
    queuePosition: string;
    /**
     * Time (in seconds) the Call spent in the Queue.
     * This is only available if the Call was actually enqueued.
     */
    queueTime: number;
    /**
     * Average amount of time that currently enqueued callers have been in the Queue.
     */
    averageQueueTime: number;
    /**
     * Current number of enqueued Calls in this Queue.
     */
    currentQueueSize: number;
}
/**
 * The RecordUtterance command has completed and its actionUrl is being invoked.
 */
export interface RecordBody {
    /**
     * The context or reason why this request is being made.
     * Will be record - The RecordUtterance command
     * has completed and its actionUrl is being invoked.
     */
    requestType: "record";
    /**
     * Unique identifier for this Call, generated by FreeClimb
     */
    callId: string;
    /**
     * Account ID associated with your account.
     */
    accountId: string;
    /**
     * Phone number of the party that initiated the Call (in E.164 format).
     */
    from: string;
    /**
     * Phone number or SIP URL of the party that is receiving the call (phone number in E.164 format).
     */
    to: string;
    /**
     * Descriptive status for the Call. Valid values are:
     * ringing - Call is currently ringing.
     * inProgress - Call was answered and is currently in progress (not queued, not in conference).
     * completed - Call ended normally.
     * busy - Caller received a busy signal.
     * failed - Call could not be completed as dialed (most likely because the phone number was non-existent).
     * noAnswer - Call ended without being answered.
     * canceled - Call was canceled via the REST API while queued or ringing.
     */
    callStatus: CallStatus;
    /**
     * String describing the direction of the Call
     * – inbound for inbound calls,
     * outbound for calls initiated via the REST API,
     * or outboundDial for calls initiated by the OutDial command.
     */
    direction: CallDirection;
    /**
     * This is only populated if request pertains to a Conference. Otherwise, it is set to null.
     */
    conferenceId: string | null;
    /**
     * This is only populated if the request pertains to a queue.
     * Otherwise, it is set to null.
     */
    queueId: string | null;
    /**
     * ID of the recording.
     */
    recordingId: string;
    /**
     * URL of the recorded audio file.
     * This URL can be used as is in a Play command
     * to play the recording (no authentication needed).
     * It can also be used to Download a
     * Recording File via the REST API.
     */
    recordingUrl: string;
    /**
     * Size of the recording in bytes
     */
    recordingSize: number;
    /**
     * File type of the recording (audio/wav)
     */
    recordingFormat: "audio" | "wav";
    /**
     * Duration of the recorded audio rounded up to the nearest second (in seconds)
     */
    recordingDurationSec: number;
    /**
     * Reason for recording termination.
     * Valid values are: finishKey, timeout,
     * hangup, or maxLength.
     */
    termReason: string;
    /**
     * ID of Call that created this leg (child call).
     */
    parentCallId: string;
}
/**
 * The Redirect command is executing and
 * its actionUrl is being invoked.
 * A PerCL response is expected.
 */
export interface RedirectBody {
    /**
     * Context or reason why this request is being made.
     * Will be redirect - The Redirect command is
     * executing and its actionUrl is being invoked.
     */
    requestType: "redirect";
    /**
     * Unique identifier for this Call, generated by FreeClimb
     */
    callId: string;
    /**
     * Account ID associated with your account.
     */
    accountId: string;
    /**
     * Phone number of the party that initiated the Call (in E.164 format).
     */
    from: string;
    /**
     * Phone number or SIP URL of the party that is receiving the call (phone number in E.164 format).
     */
    to: string;
    /**
     * Descriptive status for the Call. Valid values are:
     * ringing - Call is currently ringing.
     * inProgress - Call was answered and is currently in progress (not queued, not in conference).
     * completed - Call ended normally.
     * busy - Caller received a busy signal.
     * failed - Call could not be completed as dialed (most likely because the phone number was non-existent).
     * noAnswer - Call ended without being answered.
     * canceled - Call was canceled via the REST API while queued or ringing.
     */
    callStatus: CallStatus;
    /**
     * String describing the direction of the Call
     * – inbound for inbound calls,
     * outbound for calls initiated via the REST API,
     * or outboundDial for calls initiated by the OutDial command.
     */
    direction: CallDirection;
    /**
     * This is only populated if request pertains to a Conference. Otherwise, it is set to null.
     */
    conferenceId: string | null;
    /**
     * This is only populated if the request pertains to a queue.
     * Otherwise, it is set to null.
     */
    queueId: string | null;
    /**
     * ID of the Call that created this leg (child call).
     */
    parentCallId: string;
}
export type QueueResult = "queueFull" | "hangup" | "systemError";
/**
 * A call has been removed from a queue and
 * the Enqueue command’s actionUrl is being
 * invoked. A PerCL response is expected except if reason is hangup.
 */
export interface RemoveFromQueueNotificationBody {
    /**
     * Context or reason why this request is being made.
     * Will be removeFromQueueNotification - A Call has been removed
     * from a Queue and the Enqueue command’s actionUrl is being invoked.
     */
    requestType: "removeFromQueueNotification";
    /**
     * Unique identifier for this Call, generated by FreeClimb
     */
    callId: string;
    /**
     * Account ID associated with your account.
     */
    accountId: string;
    /**
     * Phone number of the party that initiated the Call (in E.164 format).
     */
    from: string;
    /**
     * Phone number or SIP URL of the party that is receiving the call (phone number in E.164 format).
     */
    to: string;
    /**
     * Descriptive status for the Call. Valid values are:
     * ringing - Call is currently ringing.
     * inProgress - Call was answered and is currently in progress (not queued, not in conference).
     * completed - Call ended normally.
     * busy - Caller received a busy signal.
     * failed - Call could not be completed as dialed (most likely because the phone number was non-existent).
     * noAnswer - Call ended without being answered.
     * canceled - Call was canceled via the REST API while queued or ringing.
     */
    callStatus: CallStatus;
    /**
     * String describing the direction of the Call
     * – inbound for inbound calls,
     * outbound for calls initiated via the REST API,
     * or outboundDial for calls initiated by the OutDial command.
     */
    direction: CallDirection;
    /**
     * This is only populated if request pertains to a Conference. Otherwise, it is set to null.
     */
    conferenceId: string | null;
    /**
     * ID of the Queue the caller is in.
     */
    queueId: string;
    /**
     * Final result of the enqueued Call. Valid values are:
     * queueFull - Targeted Queue was full, so the enqueue attempt was rejected.
     * hangup - Enqueued caller hung up while in the Queue.
     * systemError - FreeClimb system malfunctioned during the enqueue process.
     */
    queueResult: QueueResult;
    /**
     * Time (in seconds) the Call spent in the Queue.
     * This is only available if the Call was actually enqueued.
     */
    queueTime: number;
}

"use server"

import {
    postProcessApiCallResponse,
    preProcessApiCallParameters,
} from "@api3/commons";

/*
 * This is a wrapper for the processing functions in commons/processing.js
 *
 * @param {Object} body - The body of the request
 * @param {Object} body.endpoint - The endpoint of the API call
 * @param {Object} body.apiCallParameters - The parameters of the API call
 * @param {Object} body.apiCallResponse - The response of the API call
 *
 * @returns {Object} - The response of the API call
 */
export async function preProcess(endpoint, apiCallParameters) {
    return await preProcessApiCallParameters(endpoint, apiCallParameters);
}

/*
 * This is a wrapper for the processing functions in commons/processing.js
 *
 * @param {Object} body - The body of the request
 * @param {Object} body.endpoint - The endpoint of the API call
 * @param {Object} body.apiCallParameters - The parameters of the API call
 * @param {Object} body.apiCallResponse - The response of the API call
 *
 * @returns {Object} - The response of the API call
 */
export async function postProcess(apiCallResponse, endpoint, apiCallParameters) {

    const response = await postProcessApiCallResponse(
        apiCallResponse,
        endpoint,
        apiCallParameters,
    );

    return { success: true, data: response };
}

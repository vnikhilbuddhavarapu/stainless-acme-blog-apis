// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AcmeBlog from 'acme-blog';

const client = new AcmeBlog({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource api', () => {
  // Prism tests are disabled
  test.skip('loginUser: only required params', async () => {
    const responsePromise = client.api.loginUser({ email: 'email', password: 'password' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('loginUser: required and optional params', async () => {
    const response = await client.api.loginUser({ email: 'email', password: 'password' });
  });

  // Prism tests are disabled
  test.skip('registerUser: only required params', async () => {
    const responsePromise = client.api.registerUser({ email: 'email', name: 'name', password: 'password' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('registerUser: required and optional params', async () => {
    const response = await client.api.registerUser({ email: 'email', name: 'name', password: 'password' });
  });

  // Prism tests are disabled
  test.skip('unregisterUser: only required params', async () => {
    const responsePromise = client.api.unregisterUser({ email: 'email', password: 'password' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('unregisterUser: required and optional params', async () => {
    const response = await client.api.unregisterUser({ email: 'email', password: 'password' });
  });
});

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { AcmeBlog } from '../client';

export abstract class APIResource {
  protected _client: AcmeBlog;

  constructor(client: AcmeBlog) {
    this._client = client;
  }
}

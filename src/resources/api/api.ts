// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PostsAPI from './posts';
import { PostCreateParams, PostGetByUserParams, PostListResponse, PostUpdateParams, Posts } from './posts';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class API extends APIResource {
  posts: PostsAPI.Posts = new PostsAPI.Posts(this._client);

  /**
   * Login a user
   */
  loginUser(body: APILoginUserParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/login', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Register a new user
   */
  registerUser(body: APIRegisterUserParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/register', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete user account
   */
  unregisterUser(body: APIUnregisterUserParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/unregister', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface APILoginUserParams {
  email: string;

  password: string;
}

export interface APIRegisterUserParams {
  email: string;

  name: string;

  password: string;
}

export interface APIUnregisterUserParams {
  email: string;

  password: string;
}

API.Posts = Posts;

export declare namespace API {
  export {
    type APILoginUserParams as APILoginUserParams,
    type APIRegisterUserParams as APIRegisterUserParams,
    type APIUnregisterUserParams as APIUnregisterUserParams,
  };

  export {
    Posts as Posts,
    type PostListResponse as PostListResponse,
    type PostCreateParams as PostCreateParams,
    type PostUpdateParams as PostUpdateParams,
    type PostGetByUserParams as PostGetByUserParams,
  };
}

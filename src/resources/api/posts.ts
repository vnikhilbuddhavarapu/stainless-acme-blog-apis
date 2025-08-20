// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Posts extends APIResource {
  /**
   * Create a post
   */
  create(body: PostCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/posts', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a post by ID
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/posts/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update a post
   */
  update(
    id: number,
    body: PostUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/api/posts/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get posts of authenticated user
   */
  list(options?: RequestOptions): APIPromise<PostListResponse> {
    return this._client.get('/api/posts', options);
  }

  /**
   * Delete a post
   */
  delete(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/posts/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get posts by email or user ID
   */
  getByUser(query: PostGetByUserParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/posts/user', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PostListResponse {
  posts?: Array<PostListResponse.Post>;
}

export namespace PostListResponse {
  export interface Post {
    id?: number;

    content?: string;

    created_at?: string;

    is_private?: boolean;

    title?: string;
  }
}

export interface PostCreateParams {
  title: string;

  content?: string;

  is_private?: boolean;
}

export interface PostUpdateParams {
  content?: string;

  is_private?: boolean;

  title?: string;
}

export interface PostGetByUserParams {
  id?: number;

  email?: string;
}

export declare namespace Posts {
  export {
    type PostListResponse as PostListResponse,
    type PostCreateParams as PostCreateParams,
    type PostUpdateParams as PostUpdateParams,
    type PostGetByUserParams as PostGetByUserParams,
  };
}

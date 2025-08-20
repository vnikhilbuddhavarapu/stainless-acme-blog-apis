// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import login_user_api from './api/login-user-api';
import register_user_api from './api/register-user-api';
import unregister_user_api from './api/unregister-user-api';
import create_api_posts from './api/posts/create-api-posts';
import retrieve_api_posts from './api/posts/retrieve-api-posts';
import update_api_posts from './api/posts/update-api-posts';
import list_api_posts from './api/posts/list-api-posts';
import delete_api_posts from './api/posts/delete-api-posts';
import get_by_user_api_posts from './api/posts/get-by-user-api-posts';
import retrieve_jwks_well_known from './well-known/retrieve-jwks-well-known';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(login_user_api);
addEndpoint(register_user_api);
addEndpoint(unregister_user_api);
addEndpoint(create_api_posts);
addEndpoint(retrieve_api_posts);
addEndpoint(update_api_posts);
addEndpoint(list_api_posts);
addEndpoint(delete_api_posts);
addEndpoint(get_by_user_api_posts);
addEndpoint(retrieve_jwks_well_known);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}

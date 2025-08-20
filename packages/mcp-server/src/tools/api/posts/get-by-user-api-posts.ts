// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'acme-blog-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AcmeBlog from 'acme-blog';

export const metadata: Metadata = {
  resource: 'api.posts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/posts/user',
};

export const tool: Tool = {
  name: 'get_by_user_api_posts',
  description: 'Get posts by email or user ID',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      email: {
        type: 'string',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AcmeBlog, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.posts.getByUser(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

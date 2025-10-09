// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'acme-blog-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AcmeBlog from 'acme-blog';

export const metadata: Metadata = {
  resource: 'api.posts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/posts',
};

export const tool: Tool = {
  name: 'create_api_posts',
  description: 'Create a post',
  inputSchema: {
    type: 'object',
    properties: {
      title: {
        type: 'string',
      },
      content: {
        type: 'string',
      },
      is_private: {
        type: 'boolean',
      },
    },
    required: ['title'],
  },
  annotations: {},
};

export const handler = async (client: AcmeBlog, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.posts.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'acme-blog-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AcmeBlog from 'acme-blog';

export const metadata: Metadata = {
  resource: 'api.posts',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/posts/{id}',
};

export const tool: Tool = {
  name: 'update_api_posts',
  description: 'Update a post',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      content: {
        type: 'string',
      },
      is_private: {
        type: 'boolean',
      },
      title: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: AcmeBlog, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.api.posts.update(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

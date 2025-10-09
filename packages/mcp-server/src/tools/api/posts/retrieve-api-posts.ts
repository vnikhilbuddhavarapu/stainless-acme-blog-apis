// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'acme-blog-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AcmeBlog from 'acme-blog';

export const metadata: Metadata = {
  resource: 'api.posts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/posts/{id}',
};

export const tool: Tool = {
  name: 'retrieve_api_posts',
  description: 'Get a post by ID',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AcmeBlog, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.api.posts.retrieve(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'acme-blog-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AcmeBlog from 'acme-blog';

export const metadata: Metadata = {
  resource: 'api',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/unregister',
};

export const tool: Tool = {
  name: 'unregister_user_api',
  description: 'Delete user account',
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
      },
      password: {
        type: 'string',
      },
    },
    required: ['email', 'password'],
  },
  annotations: {},
};

export const handler = async (client: AcmeBlog, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.unregisterUser(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

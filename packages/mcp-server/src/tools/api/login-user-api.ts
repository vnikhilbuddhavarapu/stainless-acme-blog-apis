// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'acme-blog-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AcmeBlog from 'acme-blog';

export const metadata: Metadata = {
  resource: 'api',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/login',
};

export const tool: Tool = {
  name: 'login_user_api',
  description: 'Login a user',
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
  const response = await client.api.loginUser(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

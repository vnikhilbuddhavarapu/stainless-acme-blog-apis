// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'acme-blog-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AcmeBlog from 'acme-blog';

export const metadata: Metadata = {
  resource: 'well_known',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/.well-known/jwks.json',
};

export const tool: Tool = {
  name: 'retrieve_jwks_well_known',
  description: 'Serve JWKS for API Shield',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AcmeBlog, args: Record<string, unknown> | undefined) => {
  const response = await client.wellKnown.retrieveJwks().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };

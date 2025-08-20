// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'acme-blog-mcp/filtering';
import { Metadata, asTextContentResult } from 'acme-blog-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AcmeBlog from 'acme-blog';

export const metadata: Metadata = {
  resource: 'api.posts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/posts',
};

export const tool: Tool = {
  name: 'list_api_posts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet posts of authenticated user\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    posts: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer'\n          },\n          content: {\n            type: 'string'\n          },\n          created_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          is_private: {\n            type: 'boolean'\n          },\n          title: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AcmeBlog, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.api.posts.list()));
};

export default { metadata, tool, handler };

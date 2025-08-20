# API

Methods:

- <code title="post /api/login">client.api.<a href="./src/resources/api/api.ts">loginUser</a>({ ...params }) -> void</code>
- <code title="post /api/register">client.api.<a href="./src/resources/api/api.ts">registerUser</a>({ ...params }) -> void</code>
- <code title="post /api/unregister">client.api.<a href="./src/resources/api/api.ts">unregisterUser</a>({ ...params }) -> void</code>

## Posts

Types:

- <code><a href="./src/resources/api/posts.ts">PostListResponse</a></code>

Methods:

- <code title="post /api/posts">client.api.posts.<a href="./src/resources/api/posts.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/posts/{id}">client.api.posts.<a href="./src/resources/api/posts.ts">retrieve</a>(id) -> void</code>
- <code title="put /api/posts/{id}">client.api.posts.<a href="./src/resources/api/posts.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/posts">client.api.posts.<a href="./src/resources/api/posts.ts">list</a>() -> PostListResponse</code>
- <code title="delete /api/posts/{id}">client.api.posts.<a href="./src/resources/api/posts.ts">delete</a>(id) -> void</code>
- <code title="get /api/posts/user">client.api.posts.<a href="./src/resources/api/posts.ts">getByUser</a>({ ...params }) -> void</code>

# WellKnown

Methods:

- <code title="get /.well-known/jwks.json">client.wellKnown.<a href="./src/resources/well-known.ts">retrieveJwks</a>() -> void</code>

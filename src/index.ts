import { Redis } from '@upstash/redis/cloudflare';

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const redis = Redis.fromEnv(env);
    // Attempt to retrieve a value stored under the key 'hello'
    const value = await redis.get('hello');

    if (!value) {
      // If the key doesn't exist, set it with a value
      await redis.set('hello', 'Hello World from Upstash Redis via Cloudflare Integration!');
      return new Response("Key 'hello' was set!", { status: 200 });
    }

    // If the key exists, return its value
    return new Response('Stored value: ' + JSON.stringify(value), { status: 200 });
  },
};

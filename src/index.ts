interface MyExportedHandler extends ExportedHandler<Env> {
	kafka?(event: any, env: any, ctx: any): Promise<void>;
  }
  
  export default {
	async fetch(request, env, ctx): Promise<Response> {
	  return new Response('Hello World!');
	},
  
	async kafka(event, env, ctx): Promise<void> {
	  console.log("Received Kafka message:", event.messages);
	},
  } satisfies MyExportedHandler;
  
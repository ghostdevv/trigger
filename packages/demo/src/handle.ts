import 'dotenv/config';
import type { SendWebhookTask } from 'trigger-tasks';
import { tasks, runs } from '@trigger.dev/sdk/v3';

const handle = await tasks.trigger<SendWebhookTask>('send-webhook', {
	message: 'Hello World',
});

console.log('Task handle', handle);

// On the frontend...

const result = await runs.poll(handle);

console.log('Result!', result);

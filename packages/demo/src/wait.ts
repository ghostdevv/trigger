import 'dotenv/config';
import type { SendWebhookTask } from 'trigger-tasks';
import { tasks } from '@trigger.dev/sdk/v3';

console.log('Triggered task, waiting...');

const result = await tasks.triggerAndPoll<SendWebhookTask>('send-webhook', {
	message: 'Hello World',
});

console.log(result);

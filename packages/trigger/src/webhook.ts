import { logger, task } from '@trigger.dev/sdk/v3';

interface Payload {
	message: string;
}

export const sendWebhook = task({
	id: 'send-webhook',
	run: async (payload: Payload) => {
		logger.debug('payload', payload as Record<string, any>);

		await fetch('https://webhook.willow.sh', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				$title: 'webhook in a trigger.dev task',
				message: payload.message,
			}),
		});

		logger.log('Sent!');
	},
});

export type SendWebhookTask = typeof sendWebhook;

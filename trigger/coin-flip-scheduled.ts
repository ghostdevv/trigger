import { logger, schedules } from '@trigger.dev/sdk/v3';

type Flip = 'heads' | 'tails';

interface Result {
	result: Flip;
	heads: number;
	tails: number;
	sequence: Flip[];
}

export const sendWebhook = schedules.task({
	id: 'coin-flip',
	cron: '*/20 * * * *',
	run: async (payload) => {
		const response = await fetch('https://cf.willow.sh', {});
		const result: Result = await response.json();

		logger.log(
			`You got a ${result.result}!`,
			result as Record<string, any>,
		);
	},
});

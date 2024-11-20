import { logger, schedules } from '@trigger.dev/sdk/v3';

type Flip = 'heads' | 'tails';

interface Result {
	result: Flip;
	heads: number;
	tails: number;
	sequence: Flip[];
}

const coinFlip = schedules.task({
	id: 'coin-flip',
	cron: '*/20 * * * *',
	run: async (payload) => {
		const response = await fetch('https://cf.willow.sh', {});
		const result: Result = await response.json();

		logger.info(`You got a ${result.result}!`);

		return result;
	},
});

export type CoinFlipTask = typeof coinFlip;

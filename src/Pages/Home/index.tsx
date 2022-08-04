import { useState } from 'react';
// import { Button } from '@sajermann/ui-react/build/Button';
// import '@sajermann/ui-react/build/index.css';
import { Button } from '../Components/Button';
import delay from './delay';

export default function Home() {
	const [isLoading, setIsLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [failed, setFailed] = useState(false);

	async function handle() {
		setIsLoading(true);
		await delay(3000);
		setIsLoading(false);
		setFailed(true);
	}

	return (
		<>
			<div data-testid="Batata">Página inicial</div>
			<Button
				type="button"
				variant="Primary"
				// onClick={() => console.log('Batata')}
			>
				Clique aqui
			</Button>
			<Button
				disabled={isLoading}
				variant="Secondary"
				type="button"
				onClick={handle}
				withFeedback={{
					isLoading,
					inSuccess: {
						setSuccess,
						success,
					},
					inFailed: {
						setFailed,
						failed,
					},
				}}
			>
				Clique aqui
			</Button>
			<Button
				variant="Secondary"
				type="button"
				onClick={handle}
				withFeedback={{
					isLoading,
					inSuccess: {
						setSuccess,
						success,
					},
					inFailed: {
						setFailed,
						failed,
					},
				}}
			>
				Clique aqui
			</Button>
		</>
	);
}

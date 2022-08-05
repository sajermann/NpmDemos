import { useState } from 'react';
// import { Button } from '@sajermann/ui-react/build/Button';
// import '@sajermann/ui-react/build/index.css';
import { Airplane } from 'phosphor-react';
import { Button } from '../Components/Button';
import styles from './styles.module.css';
import delay from './delay';

export default function Home() {
	const [isLoading, setIsLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [failed, setFailed] = useState(false);

	async function handle() {
		setIsLoading(true);
		await delay(3000);
		setIsLoading(false);
		setSuccess(true);
	}

	return (
		<>
			<div data-testid="Batata">Página inicial</div>
			<div className={styles.container}>
				<Button
					type="button"
					variant="Primary"
					onClick={() => {
						console.log('s');
					}}
				>
					Clique aqui
				</Button>
				<Button
					disabled={isLoading}
					variant="Secondary"
					id="bruno"
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
					startIcon={<Airplane />}
				>
					Clique aqui
				</Button>
				<Button
					variant="Warning"
					type="button"
					onClick={handle}
					withFeedback={{
						isLoading: true,
						inSuccess: {
							setSuccess,
							success,
						},
						inFailed: {
							setFailed,
							failed,
						},
					}}
					endIcon={<Airplane />}
				>
					Clique aqui
				</Button>
				<Button
					variant="Success"
					type="button"
					onClick={handle}
					withFeedback={{
						isLoading,
					}}
					style={{ minWidth: 600 }}
				>
					Clique aqui
				</Button>

				<Button
					variant="Success"
					type="button"
					onClick={handle}
					withFeedback={{
						isLoading,
					}}
					endIcon={<Airplane />}
				/>

				<Button
					variant="Warning"
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
					endIcon={<Airplane />}
				/>

				<Button
					variant="Transparent"
					type="button"
					onClick={handle}
					withFeedback={{
						isLoading,
					}}
				>
					<Airplane />
					Clique aqui
				</Button>
			</div>
		</>
	);
}

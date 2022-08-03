import { useState } from 'react';
// import { Button } from '@sajermann/ui-react/build/Button';
// import '@sajermann/ui-react/build/index.css';
import { Button } from '../Components/Button';

export default function Home() {
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
				variant="Secondary"
				type="button"
				onClick={() => console.log('Batata')}
				isLoading
			>
				Clique aqui
			</Button>
			<Button type="button" onClick={() => console.log('Batata')} isLoading>
				Clique aqui2
			</Button>

			<input type="text" value="" />
		</>
	);
}

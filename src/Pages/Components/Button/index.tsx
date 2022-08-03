/* eslint-disable react/button-has-type */
import Loading from '../Loading';
import styles from './styles.module.css';

interface Props extends React.HTMLProps<HTMLButtonElement> {
	type: 'button' | 'reset' | 'submit';
	isLoading?: boolean;
	variant?:
		| 'Primary'
		| 'Secondary'
		| 'Success'
		| 'Error'
		| 'Transparent'
		| 'Warning';
}

function Button({ type, isLoading, children, variant, ...props }: Props) {
	const { onClick } = props;
	const VARIANT = {
		Primary: styles.Primary,
		Secondary: styles.Secondary,
		Success: {
			normal: 'bg-green-500',
			hover: 'hover:bg-green-700',
		},
		Error: {
			normal: 'bg-red-500',
			hover: 'hover:bg-red-700',
		},
		Warning: {
			normal: 'bg-yellow-500',
			hover: 'hover:bg-yellow-700',
		},
		Transparent: {
			normal: 'bg-transparent-500',
			hover: 'hover:bg-gray-800',
		},
	};

	console.log(variant);

	function generateGuid(): string {
		let d = new Date().getTime();
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
			// eslint-disable-next-line no-bitwise
			const r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			// eslint-disable-next-line no-bitwise
			return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
		});
	}

	const ID_BUTTON = 'riple_sajermann_ui_button';
	const ID = generateGuid();

	function insertCss() {
		const element = document.createElement('style');
		element.id = ID_BUTTON;
		element.innerHTML = `
		@keyframes ripple_${ID} {
			to {
				transform: scale(4);
				opacity: 0;
			}
		}
		`;
		const head = document.querySelector('head');
		if (head) {
			head.appendChild(element);
		}
	}

	function removeCss() {
		setTimeout(() => document.querySelector(`#${ID_BUTTON}`)?.remove(), 1000);
	}

	function createRipple(event: React.MouseEvent<HTMLButtonElement>) {
		insertCss();
		const button = event.currentTarget;
		const circle = document.createElement('span');
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;

		// eslint-disable-next-line no-multi-assign
		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
		circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
		circle.style.position = 'absolute';
		circle.style.borderRadius = '50%';
		circle.style.transform = 'scale(0)';
		circle.style.animation = `ripple_${ID} 600ms linear`;
		circle.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
		circle.classList.add(`ripple_${ID}`);

		const ripple = button.getElementsByClassName(`ripple_${ID}`)[0];

		if (ripple) {
			ripple.remove();
		}

		button.appendChild(circle);
		if (onClick) {
			onClick(event);
		}
		removeCss();
	}

	return (
		<button
			{...props}
			onClick={createRipple}
			type={type}
			className={`${VARIANT[variant || 'Primary']}  ${styles.btn} ${
				props.className
			} btn`}
		>
			{isLoading && <Loading />}
			{children}
		</button>
	);
}

// eslint-disable-next-line import/prefer-default-export
export { Button };

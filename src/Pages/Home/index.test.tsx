/* eslint-disable import/no-extraneous-dependencies */
import {
	getByPlaceholderText,
	getByTestId,
	render,
	screen,
	waitFor,
	waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './index';

function Mock() {
	return <Home />;
}

describe('Pages/Home', () => {});

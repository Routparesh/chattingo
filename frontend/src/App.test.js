import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // ✅ Import router wrapper
import App from './App';

test('renders learn react link', () => {
	render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});

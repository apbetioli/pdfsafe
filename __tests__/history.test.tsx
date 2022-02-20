import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import History from '../pages/history';

describe('History', () => {
    it('renders a heading', () => {

        render(<History />);

        const heading = screen.getByText('Histórico')

        expect(heading).toBeInTheDocument()
    })
})
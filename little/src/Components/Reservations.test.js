import { render, screen } from "@testing-library/react";
import ReservationsForm from './Reservations';

test('Renders the ReservationsForm heading', () => {
    render(<ReservationsForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})
import Form from '../components/form/index'
import Results from '../components/results/index';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import '@testing-library/user-event'


it('Runs function on Button click', async () => {
    let callApi = jest.fn();
    render(<Form handleApiCall={callApi} />);
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    await waitFor(() => expect(callApi).toHaveBeenCalled());
});

it('Renders results after submiting the url', async () => {
    const data = {
        Headers: {
            "cache-control": 'string no-cache'
        },
        count: 2,
        results: [
            { name: 'fake thing 1', url: 'http://fakethings.com/1' },
            { name: 'fake thing 2', url: 'http://fakethings.com/2' },
        ],
    };
    render(<Results data={data} />);
    const items = screen.getByTestId('results');

    expect(items).toHaveTextContent('"Headers": { "cache-control": "string no-cache" }, "count": 2, "results": [ { "name": "fake thing 1", "url": "http://fakethings.com/1" }, { "name": "fake thing 2", "url": "http://fakethings.com/2" } ]');
})

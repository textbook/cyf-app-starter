import React from 'react';

import TestRenderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  const message = 'Hello, world!';

  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponseOnce(JSON.stringify({ message }));
  });

  it('renders without crashing', () => {
    expect(TestRenderer.create(<App />).toJSON()).toMatchSnapshot();
  });

  it('displays the message from the server', done => {
    const app = TestRenderer.create(<App />);
    setTimeout(() => {
      expect(app.root.findByType('h2').children).toContain(message);
      done();
    });
  });
});

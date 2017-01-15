import { ExampleService } from './example.service';

describe('Service test', () => {
  it('should return a greeting for the given name', () => {
    let exampleService = new ExampleService();
    let messageText = exampleService.getExampleMessage('Frank');
    expect(messageText).toBe('Hello, Frank!');
  });
});

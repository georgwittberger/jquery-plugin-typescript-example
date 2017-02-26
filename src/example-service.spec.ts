import { ExampleService } from './example-service';

// Define a test suite for the example service.
describe('ExampleService', () => {
  // Define a test for the example service.
  it('should return a greeting for the given name', () => {
    let exampleService = new ExampleService();
    let messageText = exampleService.getExampleMessage('Frank');
    expect(messageText).toBe('Hello, Frank!');
  });
});

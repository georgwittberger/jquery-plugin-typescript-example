/** Example service class */
export class ExampleService {
  /**
   * Returns a personalized message.
   * @param name Name to insert into the message.
   */
  getExampleMessage(name: string): string {
    return 'Hello, ' + name + '!';
  }
}

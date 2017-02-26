/** Example plugin options */
interface ExamplePluginOptions {
  /** CSS selector for the element where generated messages are inserted. (required) */
  outputSelector: string;
  /** Color of the message text. (optional) */
  outputColor?: string;
}

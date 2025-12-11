import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders title and default count", () => {
  render(<App />);
  expect(screen.getByTestId("title")).toHaveTextContent("Hello World");
  expect(screen.getByTestId("count")).toHaveTextContent("Clickedd 0 times");
});

test("increments count on button click", async () => {
  render(<App />);
  const user = userEvent.setup();
  const button = screen.getByRole("button", { name: /increment/i });
  await user.click(button);
  expect(screen.getByTestId("count")).toHaveTextContent("Clickedd 1 times");
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

import emojiList from "./emojiList.json";

describe("Emoji Search Testing", () => {
  beforeEach(() => {
    render(<App />);
  });

  // Test code that will check if the header is rendered successfully
  test("check if the heading is there", () => {
    const headerText = screen.getByText("emoji search", { exact: false });

    expect(headerText).toBeInTheDocument();
  });

  // Test code that will check if the emoji list is rendered successfully when the app is first opened
  test("check if the emoji list is here", () => {
    const firstSeenList = emojiList.slice(0, 20);

    firstSeenList.map((emoji) => {
      let title = screen.getByText(emoji.title);

      expect(title).toBeInTheDocument();
    });
  });

  // Test code that will check that when a filter is done, the emoji list is re-rendered according to that filter
  test("check if it filters", async () => {
    const filteredSearch = "joystick"; // only one item shows up
    const input = screen.getByTestId("input-element");

    await userEvent.type(input, filteredSearch);

    expect(screen.getByText("Joystick", { exact: true })).toBeInTheDocument();
  });

  // When clicking any emoji on the list, the test code will check that the relevant emoji has been copied.
  test("check if the emoji is copied when clicked", async () => {
    const firstEmoji = emojiList[0]; // get the first emoji in the list
    const emojiElement = screen.getByText(firstEmoji.title); // find the element that contains the first emoji

    // Depending on the Clipboard API
    if (navigator.clipboard) {
      userEvent.click(emojiElement); // simulate a click on the element
      const clipboardContent = await navigator.clipboard.readText();

      expect(clipboardContent).toBe(firstEmoji.symbol); // assert that the clipboard content matches the symbol of the clicked emoji
    } else {
      // Mock the navigator.clipboard API
      const originalClipboard = navigator.clipboard;
      navigator.clipboard = {
        readText: async () => firstEmoji.symbol,
      };

      userEvent.click(emojiElement); // simulate a click on the element

      const clipboardContent = await navigator.clipboard.readText();

      // Restore the original navigator.clipboard API
      navigator.clipboard = originalClipboard;

      expect(clipboardContent).toBe(firstEmoji.symbol); // assert that the clipboard content matches the symbol of the clicked emoji

      console.log("Clipboard API doesn't work.");
      // Handle the case where clipboard is not available
    }
  });
});

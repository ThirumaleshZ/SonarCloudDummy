import { render, screen } from "@testing-library/react";
import ButtonChip from ".";

test("renders learn react link", () => {
  render(
    <ButtonChip text="CLEAR" onClickHandler={() => console.log("test")} />
  );
  const linkElement = screen.getByText(/clear/i);
  expect(linkElement).toBeInTheDocument();
});

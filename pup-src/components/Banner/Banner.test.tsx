import React from "react";
import { render, cleanup } from "@testing-library/react";

import "jsdom-global/register";
import Banner from "./Banner";

afterEach(cleanup);

const setup = () => {
  const tree = (
    <Banner
      title={"Hello CodeSandbox"}
      subtitle={"Start editing to see some magic happen!"}
    />
  );

  const utils = render(tree);
  const title = utils.container.querySelector("h1");
  const subtitle = utils.container.querySelector("h2");

  return {
    title,
    subtitle,
    ...utils
  };
};

describe("<Banner />", (): void => {
  test("should render header and subheader", (): void => {
    // Arrange
    const { title, subtitle } = setup();

    // Assert
    expect(title.innerHTML).toContain("Hello CodeSandbox");
    expect(subtitle.innerHTML).toContain(
      "Start editing to see some magic happen!"
    );
  });
});

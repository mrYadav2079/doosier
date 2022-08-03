import React from "react";
import { fireEvent, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Grid } from "@mui/material";
import StakeholderToolBar, { StakeholderToolBarProps } from ".";
import { rest } from "msw";
import { setupServer } from "msw/node";

const serverResponse1 = rest.get(
  `http://localhost:3003/stakeholder`,
  (req, res, ctx) => {
    return res(
      ctx.json([
        {
          "id": 1,
          "name": "Brainstorming",
          "description": "Brainstorming Sessions with Stakeholders",
          "isColored": true,
          "position": 1
        },
        {
          "id": 2,
          "name": "Nps",
          "description": "NPS > 9+",
          "isColored": true,
          "position": 2
        },
      ])
    );
  }
);
const serverResponse2 = rest.post(
  `http://localhost:3003/stakeholder/3`,
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({})
    );
  }
);
const serverResponse3 = rest.put(
  `http://localhost:3003/stakeholder/2`,
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({})
    );
  }
);
const server = setupServer(...[serverResponse1,serverResponse2,serverResponse3]);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe("", () => {
  beforeEach(() => {
    server.listen()
    render(<Grid id="render123" data-testid="render123"></Grid>);
    const props: StakeholderToolBarProps = {
      description: "Brainstorming Sessions with Stakeholders",
      gridMenuOpen: true,
      imageGridAnchorEl: document.getElementById("render123"),
      emitClick: () => {},
      handleImageGridMenuClose: () => {},
    };
    render(<StakeholderToolBar {...props}></StakeholderToolBar>);
  });
  test("snapshot", async () => {
    await waitForElementToBeRemoved(() => screen.getByTestId('loading'));
    const menu = screen.getByTestId("stakeholderToolBar");
    expect(menu).toBeInTheDocument();
  });
 
  test("on close or click backdrop", async () => {

    await waitForElementToBeRemoved(() => screen.getByTestId('loading'));
    const backdrop = screen.getByTitle("stakeholderToolBarBackdrop");
    fireEvent.click(backdrop);
  });

  test("copy icon click", async () => {
    await waitForElementToBeRemoved(() => screen.getByTestId('loading'));
    const copyIcon = screen.getByTestId("stakeholderToolBarItem1");
    fireEvent.click(copyIcon);
  });
});

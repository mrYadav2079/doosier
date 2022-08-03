import React from "react";
import SlideBackground from ".";
import { fireEvent, render, screen ,waitFor} from "@testing-library/react";
import { Box, Typography } from "@mui/material";
import "@testing-library/jest-dom/extend-expect";
import { rest } from "msw";
import { setupServer } from "msw/lib/node";

const props = {
  title: "EDUCATION",
  children: (
    <Box data-testid="slideBody">
      <Typography data-testid="slideBodyText">
        Here goes the body of the slide
      </Typography>
    </Box>
  ),
};

describe("testing the slide background", () => {
  const serverResponse = rest.get(
    `http://localhost:3003/users/undefined`,
    (req, res, ctx) => {
      return res(
        ctx.json({
            awardsData: [
                "PMI Eric Jenett Person of the Year Award",
                "Outstanding Project Manager Award"
              ]  ,
            themeColor:"Blue"          })
      );
    }
  );
  const server = setupServer(...[serverResponse]);
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("to test the snap shot", async() => {
    render(<SlideBackground {...props}></SlideBackground>);
    await waitFor(()=>{
    const slideTitleBox = screen.getByTestId("slideTitleBox");
    expect(slideTitleBox).toBeVisible();
    const styles=getComputedStyle(slideTitleBox)
    expect(styles.backgroundColor).toBe('rgb(76, 44, 217)');
    const slideTitle = screen.getByTestId("slideTitle");
    expect(slideTitle).toBeVisible();
    expect(slideTitle).toHaveTextContent("EDUCATION");
    const slideBody = screen.getByTestId("slideBody");
    expect(slideBody).toBeVisible();
    const slideBodyText = screen.getByTestId("slideBodyText");
    expect(slideBodyText).toHaveTextContent("Here goes the body of the slide")
  })
  });
});


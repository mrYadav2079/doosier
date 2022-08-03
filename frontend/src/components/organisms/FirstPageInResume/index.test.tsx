import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import FirstPageInResume from ".";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";

const serverResponse = rest.get(
  `http://localhost:3003/users/undefined`,
  (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        title: "ANCE PORTFOLIO",
        profileimage: "{}",
        userName: "Peter Parker",
        gender: "M",
        age: 35,
        designation: "Project Manager",
        slideScreens: [
          "FirstPageInResume",
          "PersonalDetails",
          "EducationDetails",
          "ExperienceDetalis",
          "Certifications",
          "ImageAndNameSlideContent1",
          "ImageAndNameSlideContent2",
          "ImageAndNameSlideContent3",
          "Accomplishmnets",
          "Graph",
          "SkyFlowValuation",
          "Awards",
        ],
        resumes: [
          {
            id: 1,
            img: "../src/assets/images/PortfolioImage1.svg",
            title: "Fintech Portfolio.pdf",
            edited: "Edited 45 mins ago",
          },
          {
            id: 2,
            img: "../src/assets/images/PortfolioImage1.svg",
            title: "Fintech Portfolio.jpeg",
            edited: "Edited 45 mins ago",
          },
        ],
        certification: [
          {
            id: 2,
            certification_name: "",
          },
        ],
        awardsData: [
          "PMI Eric Jenett Person of the Year Award",
          "Outstanding Project Manager Award",
          "PMI Rising Leader Award",
        ],
        otp: 7900,
      })
    );
  }
);

const server = setupServer(...[serverResponse]);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Test - FirstPage Organisms", async () => {
  const wrapper = render(
    <FirstPageInResume
      userName={"name"}
      designation={"designation"}
      heading={"ss"}
      description={"ss"}
    />
  );
  await waitForElementToBeRemoved(() => screen.getByTestId("loading"));
  expect(screen.getByTestId("input1")).toBeInTheDocument;
  expect(wrapper).toBeTruthy();
});
test("should render hover box when click", async () => {
  const wrapper = render(
    <FirstPageInResume
      userName={"name"}
      designation={"designation"}
      heading={"ss"}
      description={"ss"}
    />
  );
  await waitForElementToBeRemoved(() => screen.getByTestId("loading"));
  const someValues = [{ name: "teresa teng" }];
  let element = screen.getByTestId("input1");
  fireEvent.click(element);
  expect(wrapper.getAllByTestId("hover-input1")).toBeInTheDocument;
  element = screen.getByTestId("hover-input1");
  fireEvent.click(element);
  expect(wrapper.getAllByTestId("input1")).toBeInTheDocument;
  element = screen.getByTestId("avatar");
  fireEvent.click(element);

  expect(screen.queryByTestId("upload-options")).toBeInTheDocument;
  element = screen.getByTestId("avatar");
  fireEvent.click(element);

  expect(screen.queryByTestId("upload-options")).toNotBeInTheDocument;
});

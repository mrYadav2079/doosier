import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { rest } from "msw";
import ExperienceDetalis from ".";
import "@testing-library/jest-dom";
import { setupServer } from "msw/node";

const serverResponse = rest.get(
  `http://localhost:3003/users/undefined`,
  (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        userName: "Peter Parker",
        gender: "Male",
        age: "100",
        newvalue: ["Hobbies", "Cricket"],
        experience: [
          {
            id: 2,
            description:
              "Designed , developed, and maintained MSSBU;s internal web Designed , developed, and maintained MSSBU;s internal web Designed , developed, and maintained MSSBU;s internal web Designed , developed, and maintained MSSBU;s internal web",
          },
        ],
        education: [
          {
            image: "../src/assets/images/university1.png",
            collegeName: "California Institute of Technology",
            degree: "Master of Sciences in Software Systems",
            startDate: "2010",
            endDate: "2012",
          },
          {
            image: "../src/assets/images/university2.png",
            collegeName: "University of Pennsylvania",
            degree: "Bachelor of Sciences in Software Systems",
            startDate: "2006",
            endDate: "2010",
          },
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
        otp: 7900,
      })
    );
  }
);
const serverResponse1 = rest.get(
  `http://localhost:3003/experience/undefined`,
  (req, res, ctx) => {
    return res(
      ctx.json({
        details: ["python 1year"],
      })
    );
  }
);
const server = setupServer(...[serverResponse, serverResponse1]);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
test("Test - Experience Detail Organisms", async () => {
  const wrapper = render(<ExperienceDetalis />);
  await waitForElementToBeRemoved(() => screen.getByTestId("loading"));
  expect(screen.getByTestId("steps")).toBeInTheDocument;
  expect(wrapper).toBeTruthy();
});

test("Test - Experience Detail Organisms", async () => {
  const wrapper = render(<ExperienceDetalis />);
  await waitForElementToBeRemoved(() => screen.getByTestId("loading"));
  fireEvent.click(screen.getByTestId("steps"));
});
test("Test data being fetched", async () => {
  const wrapper = render(<ExperienceDetalis />);
  await waitForElementToBeRemoved(() => screen.getByTestId("loading"));
  expect(screen.getByText("python 1year")).toBeInTheDocument();
});

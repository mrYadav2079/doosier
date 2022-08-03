import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import PersonalDetails from ".";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";

const serverResponse = rest.get(
  `http://localhost:3003/users/undefined`,
  (req, res, ctx) => {
    return res(
      ctx.json(
        {
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
        },
      )
    );
  }
);

const server = setupServer(...[serverResponse]);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
test("Test - PersonalDetails Organisms", async () => {
  const wrapper = render(<PersonalDetails content="Age - 35" />);
  await waitForElementToBeRemoved(() => screen.getByTestId("loading"));
  screen.getByText("PERSONAL DETAILS");
  expect(wrapper).toBeTruthy();
});
test("Test - PersonalDetails Organisms", async () => {
  const wrapper = render(<PersonalDetails content="Age - 35" />);
  await waitForElementToBeRemoved(() => screen.getByTestId("loading"));
  fireEvent.click(screen.getByTestId("input1"));
  fireEvent.click(screen.getByTestId(`icon5`));
  fireEvent.click(screen.getByTestId("input2"));
  fireEvent.click(screen.getByTestId("input1"));
  fireEvent.click(screen.getByTestId("input1"));
  expect(wrapper).toBeTruthy();
});

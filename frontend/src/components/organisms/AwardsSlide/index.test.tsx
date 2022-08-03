import React from "react";
import { render, waitFor } from "@testing-library/react";
import AwardsSlide from "./index";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/lib/node";

describe("Organism AwardsSlide", () => {
    const serverResponse = rest.get(
        `http://localhost:3003/users/undefined`,
        (req, res, ctx) => {
          return res(
            ctx.json({
                awardsData: [
                    "PMI Eric Jenett Person of the Year Award",
                    "Outstanding Project Manager Award"
                  ]            })
          );
        }
      );
      const server = setupServer(...[serverResponse]);
      beforeAll(() => server.listen());
      afterEach(() => server.resetHandlers());
      afterAll(() => server.close());
      
    it("should match snapshot", async() => {
  
      const wrapper = await render(<AwardsSlide />);
      expect(wrapper).toBeTruthy;
    });
    it("Test data being fetched", async () => {
        const wrapper = render(<AwardsSlide />);
        const experienceElement = await waitFor(() =>
        wrapper.getAllByText("PMI Eric Jenett Person of the Year Award")
        );
      })
      
  });
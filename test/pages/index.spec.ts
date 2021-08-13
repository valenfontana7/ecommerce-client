import React from "react";
import Index from "../../pages/index";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import router from "next/router";

describe("index", () => {
  let expectedProps: {};
  beforeEach(() => {
    expectedProps = {};
  });
  test("should return true", () => {
    expect(true).toBe(true);
  });
});

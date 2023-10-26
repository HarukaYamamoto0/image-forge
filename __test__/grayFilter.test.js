// sum.test.js
import { expectTypeOf, describe, it } from "vitest";
import { grayFilter } from "../src/index.js";
import { icon1 } from "./assets/images-url.js";

describe(
  "Testing the gray filter",
  () => {
    it("test with relative path", async () => {
      const buffer = await grayFilter("./__test__/assets/icon-test.jpg");
      expectTypeOf(buffer).toEqualTypeOf(Buffer);
    });

    it("test with URL", async () => {
      const buffer = await grayFilter(icon1);
      expectTypeOf(buffer).toEqualTypeOf(Buffer);
    });

    it("testing for errors", async () => {
      const buffer = await grayFilter(icon1 + "test");
      expectTypeOf(buffer).toEqualTypeOf(Error);
    });
  },
  {
    timeout: 100000,
  }
);

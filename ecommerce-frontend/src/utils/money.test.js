import { it, expect, describe } from "vitest";
import { formatMoney } from "./money";

describe("formatMoney", () => {
  it("should format money correctly", () => {
    expect(formatMoney(100)).toBe("$1.00");
    expect(formatMoney(1234)).toBe("$12.34");
    expect(formatMoney(0)).toBe("$0.00");
    expect(formatMoney(9999)).toBe("$99.99");
    expect(formatMoney(5000)).toBe("$50.00");
    expect(formatMoney(2500)).toBe("$25.00");
    expect(formatMoney(100000)).toBe("$1000.00");
    expect(formatMoney(1234567)).toBe("$12345.67");
  });
});

import { isUser, User } from "./user";

describe("isUser", () => {
  it("should return true if user is User", () => {
    const user: User = {
      name: "John Doe",
    };
    expect(isUser(user)).toBe(true);
  });
});

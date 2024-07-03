// importing
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { toast } from "react-toastify";
import { loginUserApi } from "../../api/api";
import Login from "./Login"; //componenet to be tested

// moking the api module to intercept api calls(dont send to backend)
jest.mock("../../api/api");

// making test case
describe("Login Component Test", () => {
  // clear mockdata
  afterEach(() => {
    jest.clearAllMocks();
  });
  // define test 1
  it("Should display an error toast  on failed login", async () => {
    // rendering the component
    render(<Login />);
    // moking  the api
    const MockResponse = {
      status: 400,
      data: {
        success: false,
        message: "Invalid Password",
      },
    };
    // moking the api
    loginUserApi.mockResolvedValue(MockResponse);
    // making the toast error as a mock function
    toast.error = jest.fn();
    // finding the elements
    const email = screen.getByPlaceholderText("email");
    const password = screen.getByPlaceholderText("password");
    const login = screen.getByText("Login");

    // simulatinf user input and interaction
    fireEvent.change(email, { target: { value: "test@gmail.com" } });
    fireEvent.change(password, { target: { value: "test123" } });
    fireEvent.click(login);

    // we have done all setup above
    await waitFor(() => {
      expect(loginUserApi).toHaveBeenCalledWith({
        email: "test@gmail.com",
        password: "test123",
      });
      // toast error
    expect(toast.error).toHaveBeenCalledWith("Invalid Password");
    });
    
  });
});

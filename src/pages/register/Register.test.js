// importing
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { toast } from "react-toastify";
import { registerUserApi } from "../../api/api";
import Register from "./Register"; // component to be tested

// mocking the api module to intercept api calls (don't send to backend)
jest.mock("../../api/api");

// making test case
describe("Register Component Test", () => {
  // clear mock data
  afterEach(() => {
    jest.clearAllMocks();
  });

  // define test 1
  it("Should display an error toast on failed registration due to empty fields", async () => {
    // rendering the component
    render(<Register />);

    // making the toast error as a mock function
    toast.error = jest.fn();

    // finding the register button
    const registerButton = screen.getByRole('button', { name: /register/i });

    // simulating user interaction
    fireEvent.click(registerButton);

    // we have done all setup above
    await waitFor(() => {
      // checking for error messages
      expect(screen.getByText("First name is required")).toBeInTheDocument();
      expect(screen.getByText("Last name is required")).toBeInTheDocument();
      expect(screen.getByText("EMail is required")).toBeInTheDocument();
      expect(screen.getByText("Password is required")).toBeInTheDocument();
      expect(screen.getByText("Confirm Password is required")).toBeInTheDocument();
      expect(screen.getByText("Phone is required")).toBeInTheDocument();
    });
  });

  // define test 2
  it("Should display a success toast on successful registration", async () => {
    // rendering the component
    render(<Register />);

    // mocking the api
    const MockResponse = {
      status: 200,
      data: {
        success: true,
        message: "Registration successful",
      },
    };
    // mocking the api
    registerUserApi.mockResolvedValue(MockResponse);

    // making the toast success as a mock function
    toast.success = jest.fn();

    // finding the elements
    const firstName = screen.getByLabelText("First Name");
    const lastName = screen.getByLabelText("Last Name");
    const email = screen.getByLabelText("Email Address");
    const phone = screen.getByLabelText("Phone");
    const password = screen.getByLabelText("Password");
    const confirmPassword = screen.getByLabelText("Confirm Password");
    const registerButton = screen.getByRole('button', { name: /register/i });

    // simulating user input and interaction
    fireEvent.change(firstName, { target: { value: "John" } });
    fireEvent.change(lastName, { target: { value: "Doe" } });
    fireEvent.change(email, { target: { value: "john.doe@example.com" } });
    fireEvent.change(phone, { target: { value: "1234567890" } });
    fireEvent.change(password, { target: { value: "password123" } });
    fireEvent.change(confirmPassword, { target: { value: "password123" } });
    fireEvent.click(registerButton);

    // we have done all setup above
    await waitFor(() => {
      expect(registerUserApi).toHaveBeenCalledWith({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: "password123",
        phone: "1234567890",
      });
      // toast success
      expect(toast.success).toHaveBeenCalledWith("Registration successful");
    });
  });

  // define test 3
  it("Should display an error toast on failed registration due to API error", async () => {
    // rendering the component
    render(<Register />);

    // mocking the api
    const MockErrorResponse = {
      response: {
        status: 400,
        data: {
          success: false,
          message: "Email already exists",
        },
      },
    };
    // mocking the api
    registerUserApi.mockRejectedValue(MockErrorResponse);

    // making the toast error as a mock function
    toast.error = jest.fn();

    // finding the elements
    const firstName = screen.getByLabelText("First Name");
    const lastName = screen.getByLabelText("Last Name");
    const email = screen.getByLabelText("Email Address");
    const phone = screen.getByLabelText("Phone");
    const password = screen.getByLabelText("Password");
    const confirmPassword = screen.getByLabelText("Confirm Password");
    const registerButton = screen.getByRole('button', { name: /register/i });

    // simulating user input and interaction
    fireEvent.change(firstName, { target: { value: "John" } });
    fireEvent.change(lastName, { target: { value: "Doe" } });
    fireEvent.change(email, { target: { value: "john.doe@example.com" } });
    fireEvent.change(phone, { target: { value: "1234567890" } });
    fireEvent.change(password, { target: { value: "password123" } });
    fireEvent.change(confirmPassword, { target: { value: "password123" } });
    fireEvent.click(registerButton);

    // we have done all setup above
    await waitFor(() => {
      expect(registerUserApi).toHaveBeenCalledWith({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: "password123",
        phone: "1234567890",
      });
      // toast error
      expect(toast.error).toHaveBeenCalledWith("Email already exists");
    });
  });
});

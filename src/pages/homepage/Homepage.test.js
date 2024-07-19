import { render, screen, waitFor } from "@testing-library/react";
import { productMockData } from "../../__mock__/productMockData";
import { getProductCount, pagination } from "../../api/api";
import Homepage from "./Homepage";

// mock the api.js
jest.mock("../../api/api");

// test case
describe("Testing HomePage", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  // test 1
  it("Should display all product in homepage!", () => {
    // config all
    // mock response
    // const mock_data = {
    //     data:{
    //         success : true,
    //         Message : 'Product Fethed',
    //         products: [{product1},{product2}]
    //     }

    const mock_data = productMockData;
    pagination.mockResolvedValue({
      data: {
        products: mock_data,
      },
    });

    getProductCount.mockResolvedValue({
      data: {
        productCount: 2,
      },
    });
    render(<Homepage />);
    // configured
    waitFor(() => {
      mock_data.forEach((product) => {
        expect(screen.getByText(product.productName)).toBeInTheDocument();
      });
    });
  });
});

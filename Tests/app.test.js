import { shallow } from "enzyme";
import App from "../pages/app";

describe("<App/>", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
});

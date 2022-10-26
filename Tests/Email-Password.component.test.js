import { shallow } from "enzyme";
import Email_Password_Fields from "../components/Email-Password.component";

describe("<Email_Password_Fields/>", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Email_Password_Fields />);
    expect(wrapper).toHaveLength(1);
  });
});

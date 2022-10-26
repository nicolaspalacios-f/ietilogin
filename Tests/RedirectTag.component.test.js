import { shallow } from "enzyme";
import RedirecTag from "../components/RedirectTag.component";

describe("<RedirecTag/>", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<RedirecTag />);
    expect(wrapper).toHaveLength(1);
  });
});

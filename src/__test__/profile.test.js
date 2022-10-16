import Profile from "../components/Profile";
import renderer from 'react-test-renderer';


describe('component test', () => {
    it('matches snapshot with profile', () => {
        const component = renderer.create(<Profile/>);
        expect(component).toMatchSnapshot();
    });
})
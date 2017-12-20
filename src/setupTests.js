import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import requestAnimationFrame from './tempPolyfills';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

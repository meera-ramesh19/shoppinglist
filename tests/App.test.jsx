import { render } from '@testing-library/react';
import { App } from '../src/App';

it('renders without crashing', () => {
	render(<App />);
});
// {
// 	"hosting": {
// 		"public": "build",
// 		"ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
// 		"rewrites": [
// 			{
// 				"source": "**",
// 				"destination": "/index.html"
// 			}
// 		]
// 	}
// }
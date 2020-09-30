import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID LcgiAoH3-1cZe95ZVh8gVslp-83LUyPjMP016dbtsVI',
	},
});

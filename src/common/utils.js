const utils = {
	month: (date) => {
		const monthTable = {
			Jan: 'janvier',
			Feb: 'février',
			Mar: 'mars',
			Apr: 'avril',
			May: 'mai',
			Jun: 'juin',
			Jul: 'juillet',
			Aug: 'août',
			Sep: 'sepembre',
			Oct: 'octobre',
			Nov: 'novembre',
			Dec: 'décembre',
		};
		const newDate = new Date(date).toDateString();
		const monthShort = newDate.split(' ')[1];
		const month = monthTable[monthShort];
		// console.log('common/utils.js #month newDate >>>', newDate);
		return month;
	},

	year: (date) => {
		const newDate = new Date(date).toDateString();
		const year = newDate.split(' ')[3];
		return year;
	},
};

export default utils;

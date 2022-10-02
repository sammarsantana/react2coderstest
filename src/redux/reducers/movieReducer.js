//Will return movie object
/* This is an example of initial data
const initialState = {	title:             'My title',
						original_title:    '',
						original_language: '',
						poster_path:       'https://image.tmdb.org/t/p/w500/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg',
						release_date:      '2000-12-22',
						popularity:        '678595.55',
						overview:          '',
						adult:             ''
					};
*/

const initialState = {	title:             '',
						original_title:    '',
						original_language: '',
						poster_path:       '',
						release_date:      '',
						popularity:        '',
						overview:          '',
						adult:             ''
					};

const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGETITLE': { 
			return { ...state, title: action.payload };
		}
		case 'CHANGEORIGINALTITLE': { 
			return { ...state, original_title: action.payload };
		}
		case 'CHANGEORIGINALLANGUAGE': { 
			return { ...state, original_language: action.payload };
		}
		case 'CHANGEPOSTERPATH': { 
			return { ...state, poster_path: action.payload };
		}
		case 'CHANGERELEASEDATE': { 
			return { ...state, release_date: action.payload };
		}
		case 'CHANGEPOPULARITY': { 
			return { ...state, popularity: action.payload };
		}
		case 'CHANGEOVERVIEW': { 
			return { ...state, overview: action.payload };
		}
		case 'CHANGEADULT': { 
			return { ...state, adult: action.payload };
		}
	}
	return state;
};
export default movieReducer;
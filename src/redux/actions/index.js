export const changeTitle = (title) => {
	type: "CHANGETITLE",
	payload: title,
};
export const changeOriginalTitle = (original_title) => {
	type: "CHANGEORIGINALTITLE",
	payload: original_title,
};
export const changeOriginalLanguage = (original_language) => {
	type: "CHANGEORIGINALLANGUAGE",
	payload: original_language,
};
export const changePosterPath = (poster_path) => {
	type: "CHANGEPOSTERPATH",
	payload: poster_path,
};
export const changeReleaseDate = (release_date) => {
	type: "CHANGERELEASEDATE",
	payload: release_date,
};
export const changePopularity = (popularity) => {
	type: "CHANGEPOPULARITY",
	payload: popularity,
};
export const changeOverview = (overview) => {
	type: "CHANGEOVERVIEW",
	payload: overview,
};
export const changeAdult = (adult) => {
	type: "CHANGEADULT",
	payload: adult,
};
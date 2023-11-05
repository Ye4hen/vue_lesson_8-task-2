import { createStore } from "vuex";
import cars from "../data/carsData.json";
import { getUniqueSortedValues } from "./helper";

export default createStore({
	state() {
		return {
			carsList: [],
			autoTypeSelectVal: null,
			bodyTypeBoxVal: [],
			brandOptionsSelectVal: null,
			modelOptionsSelectVal: null,
			fromYearSelectVal: null,
			toYearSelectVal: null,
			errorMessage: null,
		}
	},
	getters: {
		carsList: ({ carsList }) => carsList,

		getAutoTypeSelectVal: ({ autoTypeSelectVal }) => autoTypeSelectVal,
		getBodyTypeBoxVal: ({ bodyTypeBoxVal }) => bodyTypeBoxVal,
		getBrandOptionsSelectVal: ({ brandOptionsSelectVal }) => brandOptionsSelectVal,
		getModelOptionsSelectVal: ({ modelOptionsSelectVal }) => modelOptionsSelectVal,
		getToYearSelectVal: ({ toYearSelectVal }) => toYearSelectVal,
		getFromYearSelectVal: ({ fromYearSelectVal }) => fromYearSelectVal,

		errorMessage: ({ errorMessage }) => errorMessage,

		brandOptions: (state) => getUniqueSortedValues(state.carsList, "brand"),
		autoTypeOptions: (state) => getUniqueSortedValues(state.carsList, "autoType"),
		bodyTypeOptions: (state) => getUniqueSortedValues(state.carsList, "bodyType"),
		modelOptions: (state) => getUniqueSortedValues(state.carsList, "model"),
		yearOptions: (state) => getUniqueSortedValues(state.carsList, "year"),

		filterCarsList: (state) => {
			let filteredCars = state.carsList.filter(car => {
				const autoTypeCondition = !state.autoTypeSelectVal || car.autoType === state.autoTypeSelectVal;
				const bodyTypeCondition = !state.bodyTypeBoxVal.length || state.bodyTypeBoxVal.includes(car.bodyType);
				const brandCondition = !state.brandOptionsSelectVal || car.brand === state.brandOptionsSelectVal;
				const modelCondition = !state.modelOptionsSelectVal || car.model === state.modelOptionsSelectVal;
				const fromYearCondition = !state.fromYearSelectVal || car.year >= state.fromYearSelectVal;
				const toYearCondition = !state.toYearSelectVal || car.year <= state.toYearSelectVal;

				return (
					autoTypeCondition &&
					bodyTypeCondition &&
					brandCondition &&
					modelCondition &&
					fromYearCondition &&
					toYearCondition
				);
			});

			if (filteredCars.length === 0) {
				return (
					state.errorMessage = "Немає таких машин(",
					filteredCars = []
				)
			} else {
				state.errorMessage = null
			}
			return filteredCars;
		},
	},
	mutations: {
		setCarsList(state, list) {
			state.carsList = list
		},
		setAutoType(state, type) {
			state.autoTypeSelectVal = type;
		},
		setBrand(state, brand) {
			state.brandOptionsSelectVal = brand;
		},
		setModel(state, model) {
			state.modelOptionsSelectVal = model;
		},
		setBodyType(state, bodyType) {
			if (state.bodyTypeBoxVal.includes(bodyType)) {
				state.bodyTypeBoxVal = state.bodyTypeBoxVal.filter((item) => item !== bodyType)
			} else {
				state.bodyTypeBoxVal.push(bodyType)
			}
		},
		setFromYearSelectVal(state, year) {
			state.fromYearSelectVal = year
		},
		setToYearSelectVal(state, year) {
			state.toYearSelectVal = year
		},
		dropAllFilters(state) {
			state.autoTypeSelectVal = null;
			state.bodyTypeBoxVal = [];
			state.brandOptionsSelectVal = null;
			state.modelOptionsSelectVal = null;
			state.toYearSelectVal = null;
			state.fromYearSelectVal = null;
			state.carsList
		},
	},
	actions: {
		getCarsList({ commit }) {
			commit("setCarsList", cars)
		},
		updateAutoType({ commit }, type) {
			commit('setAutoType', type);
		},
		updateBrand({ commit }, brand) {
			commit('setBrand', brand);
		},
		updateModel({ commit }, model) {
			commit('setModel', model);
		},
		updateBodyType({ commit }, bodyType) {
			commit('setBodyType', bodyType)
		},
		updateFromYear({ commit }, year) {
			commit('setFromYearSelectVal', year)
		},
		updateToYear({ commit }, year) {
			commit('setToYearSelectVal', year)
		},
		dropFilters({ commit }) {
			commit("dropAllFilters")
		}
	},
});

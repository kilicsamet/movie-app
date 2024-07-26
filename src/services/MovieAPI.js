import Movie from "../model/Movie"
import { axiosApi } from "./configs/axiosConfigs"
import { defineCancelApiObject } from "./configs/axiosUtils"
export const MovieAPI = {
    get: async function (params, cancel = false) {
        const response = await axiosApi.request({
            method: "GET",
            params: params,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
        })
        return response.data
    },
    getAll: async function (params, cancel = false) {
        try {
            const response = await axiosApi.request({
                method: "GET",
                params: params,
                signal: cancel ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal : undefined,
            })
            const movies = {
                totalResults: response.data.totalResults,
                results:response.data.Search? response.data.Search?.map(movieData => new Movie(movieData)):[]
            };
            return movies;
        } catch (error) {
            console.error('Error fetching all movies:', error);
            throw error;
        }
      
    },


}

const cancelApiObject = defineCancelApiObject(MovieAPI)
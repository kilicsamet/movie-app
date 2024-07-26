import axios from "axios";
import { useEffect, useState } from "react";
import { getButtonArray } from "../helper/function";
import { useNavigate, useParams } from "react-router-dom";
import { MovieAPI } from "../services/MovieAPI";

export const useMovieDetailViewModel = () => {
    let { id } = useParams();
    const [movieDetail, setMovieDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchMovieDetails = async (id) => {
        try {
            const params = new URLSearchParams({
                i: id,
                apikey: process.env.REACT_APP_API_KEY,
            });
            const response = await MovieAPI.get(params)
            setMovieDetail(response)
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchMovieDetails(id);
    }, [id]);
    return {
        loading,
        error,
        movieDetail

    };
}
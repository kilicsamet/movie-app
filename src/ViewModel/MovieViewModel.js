import axios from "axios";
import { useEffect, useState } from "react";
import { getButtonArray } from "../helper/function";
import { useNavigate } from "react-router-dom";
import { MovieAPI } from "../services/MovieAPI";

export const useMovieViewModel = () => {
  const navigate = useNavigate(); 
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [error, setError] = useState(null);
    const [selectYear, setSelectYear] = useState("");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [resultCount, setResultCount] = useState(0);
    const pages = getButtonArray(resultCount, page)

    const movieYear = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007"];

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };
    const handleClickPage = pageNumber => {
        setPage(pageNumber)
    }
    const handleClear = () => {
        setPage(1)
        setSelectYear("");
        setSearch("");
    };

    useEffect(() => {
        if (selectYear === "") {
            setPage(1)
            fetchMovies();
        }
    }, [selectYear]);

    const fetchMovies = async (search = "Pokemon") => {
        if (search?.trim() === "") {
            search = "Pokemon";
        }
        setLoadingSearch(true);
        try {
            const params = new URLSearchParams({
                page: page,
                s: search,
                ...(selectYear && { y: selectYear }),
                apikey: process.env.REACT_APP_API_KEY,
            });
            const response = await MovieAPI.getAll(params)
            setMovies(response.results || []);
            setResultCount(response.totalResults)
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
            setLoadingSearch(false);
        }
    };

    useEffect(() => {
        fetchMovies(search);
    }, [page]);

    const handleSearch = () => {
        setPage(1)
        fetchMovies(search);
    };

    return {
        loading,
        error,
        movieYear,
        setSelectYear,
        selectYear,
        handleSearch,
        handleClear,
        search,
        handleInputChange,
        loadingSearch,
        movies,
        pages,
        page,
        setLoadingSearch,
        handleClickPage,
        navigate

    };
}
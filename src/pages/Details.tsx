import {useNavigate, useParams} from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import {useDispatch, useSelector} from "react-redux";
import {countrySelector} from "../store/details/details-selector.ts";
import {useEffect} from "react";
import {clearDetails, loadCountryByName} from "../store/details/details-actions.ts";


export const Details = () => {
    const { name } = useParams();
    const dispatch = useDispatch();
    const {currentCountry, error, status} = useSelector(countrySelector)
    const navigate = useNavigate();

    useEffect(()=> {
        // @ts-ignore
        dispatch(loadCountryByName(name));
        return () => {
            dispatch(clearDetails())
        }
    }, [name,dispatch])

    // @ts-ignore
    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack /> Back
            </Button>
            {status === 'loading' && <h2>Loading....</h2>}
            {status === 'rejected' && <h2>{error}</h2>}
            {currentCountry && <Info push={navigate} {...currentCountry} />}
        </div>
    );
};
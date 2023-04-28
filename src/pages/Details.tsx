import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import {DataTypes} from "../types/types.ts";


export const Details = () => {
    const { name } = useParams();
    const navigate = useNavigate();

    const currentCountry: DataTypes | null = null;

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack /> Back
            </Button>
            {currentCountry && <Info push={navigate} {...currentCountry} />}
        </div>
    );
};
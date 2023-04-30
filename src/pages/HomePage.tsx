import {useNavigate} from "react-router";
import {Controls} from "../components/Controls.tsx";
import {List} from "../components/List.tsx";
import {ICountry} from "../types/types.ts";
import {Card} from "../components/Card.tsx";
import {useDispatch, useSelector} from "react-redux";
import {allCountriesInfo, visibleCounties, IState} from "../store/countries/countries-selectors.ts";
import {useEffect} from "react";
import {loadCountries} from "../store/countries/countries-action.ts";
import {allControlSelectors} from "../store/controls/control-selectors.ts";

export interface ICountryInfo extends ICountry {
    info: IInfo[]
}

export interface IInfo {
    title: string,
    description: string
}

export function HomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {search, region} = useSelector(allControlSelectors)
    const countries: ICountry[] | undefined = useSelector((state : IState) => visibleCounties(state, {search, region} ));
    const {status, error, qty} = useSelector(allCountriesInfo)


    useEffect(() => {
        if (!qty) {
            // @ts-ignore
            dispatch(loadCountries())
        }
    }, [qty, dispatch])

    return (
        <>
            <Controls/>
            {error && <h2>Cant fetch data</h2>}
            {status === 'loading' && <h2>Loading...</h2>}
            {status === 'received' && <List>
                {
                    countries?.map(c => {
                        const countryInfo = {
                            img: c.flags?.png,
                            name: c.name,
                            info: [
                                {
                                    title: 'Population',
                                    description: c.population.toLocaleString(),
                                },
                                {
                                    title: 'Region',
                                    description: c.region,
                                },
                                {
                                    title: 'Capital',
                                    description: c.capital,
                                },
                            ]
                        }
                        return (
                            <Card
                                key={c.name}
                                onClick={() => navigate(`/country/${c.name}`)}
                                {...countryInfo}
                            />)
                    })
                }
            </List>}

        </>
    );
}
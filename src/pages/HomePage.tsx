import {useNavigate} from "react-router";
import {Controls} from "../components/Controls.tsx";
import {List} from "../components/List.tsx";
import {DataTypes} from "../types/types.ts";
import {Card} from "../components/Card.tsx";


export interface ICountryInfo extends DataTypes{
    info : IInfo[]
}
export interface IInfo {
    title: string,
    description: string
}
export function HomePage() {
    const navigate = useNavigate();
    const countries: DataTypes[] = [];

    return (
        <>
            <Controls />

            <List>
                {
                    countries.map(c => {
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
            </List>
        </>
    );
}
import styled from 'styled-components';
import {CustomSelect} from "./CustomSelect.tsx";
import {Search} from "./Search.tsx";
import {useDispatch, useSelector} from "react-redux";
import {controlRegionSelectors} from "../store/controls/control-selectors.ts";
import {setRegion} from "../store/controls/controls-actions.ts";

interface IOptionsMap {
    value: string,
    label: string
}

const optionsMap: Record<string, IOptionsMap> = {
    'Africa': { value: 'Africa', label: 'Africa' },
    'America': { value: 'America', label: 'America' },
    'Asia': { value: 'Asia', label: 'Asia' },
    'Europe': { value: 'Europe', label: 'Europe' },
    'Oceania': { value: 'Oceania', label: 'Oceania' },
}
const options = Object.values(optionsMap);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = () => {
    const dispatch = useDispatch();
    const region = useSelector(controlRegionSelectors);

    const handleSelect = (reg: IOptionsMap) => {
        dispatch(setRegion(reg.value || ''))
    }
    return (
        <Wrapper>
            <Search />
            <CustomSelect
                options={options}
                placeholder="Filter by Region"
                isClearable
                isSearchable={false}
                value={optionsMap[region]}
                // @ts-ignore
                onChange={handleSelect}
            />
        </Wrapper>
    );
};
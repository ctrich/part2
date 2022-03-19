import { useEffect, useState } from "react";
import CountryView from "./CountryView";

const CountryListItem = ({ country }) => {
    const [show, setShow] = useState(false);

    const onClickExpand = (e) => {
        setShow(!show);
    }

    let expand = !show ? '' : <CountryView country={country} />;

    return (
        <div>
            { country.name.common }
            <button onClick={onClickExpand}>Show</button>
            {expand}
        </div>
    );
}

export default CountryListItem;
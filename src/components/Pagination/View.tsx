import { FunctionComponent, useState, useEffect } from 'react'

import { FlexDiv } from "../../assets/styles/utils/utils";
import { PaginationType } from './View.Types'
import styles from './View.module.css'

const Pagination: FunctionComponent<PaginationType> = ({ currentPage, totalPages, setNewPage}) => {

    const [activeStyle, setActiveStyle] = useState<object>({});
    const [pagesArray, setPagesArray] = useState<Array<number>>([]);
    const [currentLocation, setCurrentLocation] = useState<string>(location.pathname);

    const getPagesArray = (totalPages: number) => {
        let paginationNums = [];
        for (let i = totalPages; i > 0; i--) {
            paginationNums.push(i);
        }
        setPagesArray(paginationNums.reverse());
    }
    
    const handleClick = (event: any) => {
        setNewPage(event.target.value)
    }

    useEffect(() => {
        getPagesArray(totalPages);
    }, [totalPages]);


    return (
        <FlexDiv>
            {pagesArray && pagesArray.map((page: number) => {
                const activeClass = page === currentPage ? styles.active : '';
                return (
                    <button
                        onClick={handleClick}
                        className={[styles.pageBtn, activeClass].join(' ')}
                        key={page}
                        value={page}
                    >{page}</button>
                )
            })}
        </FlexDiv>
    )
}

export default Pagination
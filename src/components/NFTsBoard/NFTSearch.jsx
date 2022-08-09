import { useState, useCallback, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Search } from "../../assets/img/icons/Search.svg";
import { ReactComponent as Close } from "../../assets/img/icons/close.svg";
import {
    setFilteredNFTSList,
    setNFTList,
    setSearchNFTList,
} from "../../store/reducers/generalSlice";
import { debounce } from "../helpers";

export default function NFTSearch() {
    const dispatch = useDispatch();
    const widget = useSelector((state) => state.general.widget);
    const nfts = useSelector((state) => state.general.NFTList);
    const NFTListSearch = useSelector((state) => state.general.NFTListSearch);
    const [openSearch, setOpen] = useState(false);
    const [searchInput, setInput] = useState("");

    // const debounced = useCallback(
    //     debounce((value) => dispatch(setSearchNFTList(value)), 700),
    //     []
    // );

    // useEffect(() => {
    //     debounced(searchInput);
    // }, [searchInput]);

    const handleSearch = (e) => {
        const search = e.target.value;
        const filteredNFTs = nfts.filter(
            (e) =>
                e.name?.includes(search) ||
                e.native.name?.includes(search) ||
                e.description?.includes(search)
        );
        dispatch(setSearchNFTList(search));
        dispatch(setFilteredNFTSList(filteredNFTs));
    };

    return (
        <div className="search-dropdown">
            {openSearch ? (
                <div className="serchInputConatainer">
                    <Search className="svgWidget decorIcon" />
                    <input
                        type="text"
                        className="serchInput"
                        onChange={handleSearch}
                        value={NFTListSearch}
                    />{" "}
                    <div
                        id="SearchDrop"
                        className="CloseIcon"
                        onClick={() => {
                            setInput("");
                            setOpen(false);
                        }}
                    >
                        <Close className="svgWidget " />
                    </div>{" "}
                </div>
            ) : (
                <div
                    id="SearchDrop"
                    className="SearchDrop"
                    onClick={() => setOpen(true)}
                >
                    <Search className="svgWidget " />
                </div>
            )}
        </div>
    );
}

/**
 * 
 * 
 *  <Dropdown.Toggle id="SearchDrop">
        <Search className="svgWidget "/>
      </Dropdown.Toggle>
      <Dropdown.Menu>
          <input
            onChange={(e) => handleSearch(e)}
            type="text"
            placeholder="Search NFT"
          />
      </Dropdown.Menu>
 */

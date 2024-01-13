import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MatchActions } from "../Api/Match-call-api";

export const MatchListContext = createContext(null);

const MatchListProvider = ({ children }) => {
    const [matches, setMatches] = useState([]);

    const fetchMatches = async () => {
        try {
            const data = await MatchActions.fetch();
            setMatches(data);
        } catch (error) {
            console.error("Failed to fetch matches:", error);
        }
    };

    useEffect(() => {
        fetchMatches();
    }, []);

    const deleteMatch = async (match) => {
        try {
            await MatchActions.delete(match);
            setMatches(matches.filter((m) => m.id !== match.id));
        } catch (error) {
            console.error("Failed to delete match:", error);
        }
    };

    const addMatch = async (match) => {
        try {
            const data = await MatchActions.add(match);
            setMatches([data, ...matches]);
        } catch (error) {
            console.error("Failed to add match:", error);
        }
    };

    const editMatch = async (match, newValue) => {
        try {
            const data = await MatchActions.edit(match, newValue);
            setMatches((prevMatches) =>
                prevMatches.map((m) => (m.id === data.id ? data : m))
            );
        } catch (error) {
            console.error("Failed to edit match:", error);
        }
    };

    const toggleMatchStatus = (match) => {
        editMatch(match, {
            status: !match.status,
        });
    };

    const matchListContextValue = {
        matches,
        editMatch,
        addMatch,
        deleteMatch,
        toggleMatchStatus,
        fetchMatches,
    };

    return (
        <MatchListContext.Provider value={matchListContextValue}>
            {children}
        </MatchListContext.Provider>
    );
};

MatchListProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MatchListProvider;
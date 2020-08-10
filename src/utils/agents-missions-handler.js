import agentsData from '../data/agents.json';

export const getTotalMissions = () => agentsData.length;

export const getMissionsAsc = () => {
    const missions = agentsData.sort((m1, m2) => {
        return new Date(m1.date) - new Date(m2.date);
    });

    return missions;
};

const _getCountriesByAgent = () => {
    return agentsData.reduce((accumulator, current) => {
        if (current.agent in accumulator) {
            accumulator[current.agent].push(current.country);
        } else {
            accumulator[current.agent] = [];
            accumulator[current.agent].push(current.country);
        }

        return accumulator;
    }, {});
};

const _getIsolatedAgentsByCountry = countryByAgent => {
    let countriesDegree = {};

    for (let agentID in countryByAgent) {
        if (countryByAgent[agentID].length === 1) {
            if (countriesDegree[countryByAgent[agentID][0]]) {
                countriesDegree[countryByAgent[agentID][0]].degree++;
            } else {
                countriesDegree[countryByAgent[agentID][0]] = { degree: 1 };
            }
        }
    }

    return countriesDegree;
};

const _findMostIsolatedCountryByAgents = isolatedAgentsByCountry => {
    const isolatedData = {};
    let degreeCount = 0;

    for (let country in isolatedAgentsByCountry) {
        if (degreeCount < isolatedAgentsByCountry[country].degree) {
            degreeCount = isolatedAgentsByCountry[country].degree;
            isolatedData.country = country;
            isolatedData.degree = degreeCount;
        }
    }

    return isolatedData;
};

export const getIsolationData = () => {
    const countryByAgent = _getCountriesByAgent();

    const isolatedAgentsByCountry = _getIsolatedAgentsByCountry(countryByAgent);

    return _findMostIsolatedCountryByAgents(isolatedAgentsByCountry);
};

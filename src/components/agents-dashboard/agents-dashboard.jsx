import React, { Fragment } from 'react';

// Utils
import { getIsolationData, getMissionsAsc, getTotalMissions } from '../../utils/agents-missions-handler';

// Components
import IsolationDegree from '../isolation-degree/isolation-degree';
import TableHeader from '../table-header/table-header';
import TableContent from '../table-content/table-content';
import TableFooter from '../table-footer/table-footer';

export default function AgentsDashboard() {
    return (
        <Fragment>
            <h1>Tikal - Agents Missions</h1>
            <IsolationDegree isolationData={getIsolationData()} />
            <TableHeader />
            <TableContent missions={getMissionsAsc()} />
            <TableFooter totalMissions={getTotalMissions()} />
        </Fragment>
    );
}

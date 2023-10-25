import AuditRound from "./Pages/AuditRound/AuditRound";
import Consequence from "./Pages/Consequence/Consequence";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Estate from "./Pages/Estate/Estate";
import Fir from "./Pages/Fir/Fir";
import LayoutContainer from "./Pages/LayoutContainer/LayoutContainer";
import Loginpages from "./Pages/Login/loginLayout";

import MockDrill from "./Pages/MockDrill/MockDrill";
import MomSheMeeting from "./Pages/MomSheMeeting/MomSheMeeting";
import NearMissSafetyObservationTracker from "./Pages/NearMissSafetyObservationTracker/NearMissSafetyObservationTracker";
import Psi from "./Pages/Psi/Psi";
import Rca from "./Pages/Rca/Rca";
import RcaScoreCard from "./Pages/RcaScoreCard/RcaScoreCard";
import Recognition from "./Pages/Recognition/Recognition";
import Register from "./Pages/Register/Register";
import ResumeDuty from "./Pages/ResumeDuty/ResumeDuty";
import ScoreCard from "./Pages/ScoreCard/ScoreCard";
import TrainingRecord from "./Pages/TrainingRecord/TrainingRecord";
import TrainingRecordForm from "./Pages/TrainingRecord/TrainingRecordForm";
import SifPas from "./Pages/sifPas/sifPas";
import { createBrowserRouter } from "react-router-dom";



export const router = createBrowserRouter([{
    path:'/',
    element:<LayoutContainer/>,
    children:[{
        path:"auditround",
        element:<AuditRound/>
    },{
        path:"consequence",
        element:<Consequence/>
    },{
        path:"dashboard",
        element:<Dashboard/>
    },{
        path:"estate",
        element:<Estate/>
    },
    {
        path:"fir",
        element:<Fir/>
    },
    {
        path:"mockdrill",
        element:<MockDrill/>
    },
    {
        path:"momshemeeting",
        element:<MomSheMeeting/>
    },{
        path:"nearmisssafteyobservationtracker",
        element:<NearMissSafetyObservationTracker/>
    },{
        path:"psi",
        element:<Psi/>
    },{
        path:"rca",
        element:<Rca/>
    },{
        path:"rcascorecard",
        element:<RcaScoreCard/>
    },{
        path:"recognition",
        element:<Recognition/>
    },{
        path:"resumeduty",
        element:<ResumeDuty/>
    },{
        path:"scorecard",
        element:<ScoreCard/>
    },{
        path:"sifpas",
        element:<SifPas/>
    },{
        path:"trainingrecord",
        element:<TrainingRecord/>
    }]
 },{
    path:"login",
    element:<Loginpages/>
},
{
    path:"register",
    element:<Register/>
},
{
    path:"trainingrecordform",
    element:<TrainingRecordForm/>
}
])
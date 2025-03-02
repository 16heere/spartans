import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import SBL from "./components/SBL/SBL";
import JuniorHoops from "./components/JuniorHoops/JuniorHoops";
import PlayerProfile from "./components/PlayerProfile/PlayerProfile";
import Coaches from "./components/Coaches/Coaches";
import Documents from "./components/Documents/Documents";
import News from "./components/News/News";
import NewsDetail from "./components/News/NewsDetail";
import Academy from "./components/Academy/Academy";
import Alumni from "./components/Alumni/Alumni";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";
import ClassPage from "./components/ClassPage/ClassPage";
import Facilities from "./components/Facilities/Facilities";
import Recruitment from "./components/Recruitment/Recruitment";
import Camps from "./components/Camps/Camps";
import Schedule from "./components/Schedule/Schedule";
import Roster from "./components/Roster/Roster";
import Team from "./components/Team/Team";

const UnderConstruction = () => (
    <div style={{ padding: "50px" }}>
        <h1>Page Under Construction</h1>
        <p>
            This page is currently under construction. Please check back later!
        </p>
    </div>
);

function App() {
    return (
        <Router>
            <ScrollToTop />

            <header>
                <Navbar />
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<UnderConstruction />} />
                    <Route path="/sbl" element={<UnderConstruction />} />
                    <Route path="/news" element={<UnderConstruction />} />
                    <Route path="/camps" element={<UnderConstruction />} />
                    <Route
                        path="/news/:newsId"
                        element={<UnderConstruction />}
                    />
                    <Route path="/coaches" element={<UnderConstruction />} />
                    <Route path="/documents" element={<UnderConstruction />} />
                    <Route path="/facilities" element={<UnderConstruction />} />
                    <Route path="/academy" element={<UnderConstruction />} />
                    <Route path="/alumni" element={<UnderConstruction />} />
                    <Route path="/recruitment" element={<Recruitment />} />
                    <Route
                        path="/junior-hoops"
                        element={<UnderConstruction />}
                    />
                    <Route
                        path="/player/:playerFullName"
                        element={<PlayerProfile />}
                    />
                    <Route path="/class/:year" element={<ClassPage />} />
                    <Route
                        path="/teams/mens/schedule"
                        // element={<Schedule contentType="mensSchedule" />}
                        element={<UnderConstruction />}
                    />
                    <Route
                        path="/teams/u19-I/schedule"
                        // element={<Schedule contentType="u19ISchedule" />}
                        element={<UnderConstruction />}
                    />
                    <Route
                        path="/teams/u19-II/schedule"
                        // element={<Schedule contentType="u19IiSchedule" />}
                        element={<UnderConstruction />}
                    />
                    <Route
                        path="/teams/u16/schedule"
                        // element={<Schedule contentType="u16Schedule" />}
                        element={<UnderConstruction />}
                    />
                    <Route
                        path="/teams/u14/schedule"
                        // element={<Schedule contentType="u14schedule" />}
                        element={<UnderConstruction />}
                    />
                    <Route
                        path="/teams/mens/roster"
                        // element={<Roster team="mens" />}
                        element={<UnderConstruction />}
                    />
                    <Route
                        path="/teams/u19/roster"
                        // element={<Roster team="u19" />}
                        element={<UnderConstruction />}
                    />
                    <Route
                        path="/teams/u16/roster"
                        // element={<Roster team="u16" />}
                        element={<UnderConstruction />}
                    />
                    <Route
                        path="/teams/u14/roster"
                        // element={<Roster team="u14" />}
                        element={<UnderConstruction />}
                    />
                    <Route
                        path="/teams/mens/team"
                        // element={<Team team="mens" />}
                        element={<UnderConstruction />}
                    />
                    <Route
                        path="/teams/u19/team"
                        // element={<Team team="u19" />}
                        element={<UnderConstruction />}
                    />
                    <Route
                        path="/teams/u16/team"
                        // element={<Team team="u16" />}
                        element={<UnderConstruction />}
                    />
                    <Route
                        path="/teams/u14/team"
                        // element={<Team team="u14" />}
                        element={<UnderConstruction />}
                    />
                </Routes>
            </main>

            <footer>
                <Footer />
            </footer>
        </Router>
    );
}

export default App;

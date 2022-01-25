import {Suspense} from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {Spinner} from "react-bootstrap";
import Home from "./screens/home";
import Detail from "./screens/detail";

function App() {

    return (
        <Router>
            <Suspense fallback={<Spinner animation="border"/>}>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/detail"} element={<Detail/>}/>
                </Routes>
            </Suspense>
        </Router>
    )
}

export default App;

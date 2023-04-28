import {Route, Routes} from "react-router";
import {Header, Main} from "./components";
import {Details, HomePage, NotFound} from "./pages/index.ts";

function App() {

    return (
        <>
            <Header/>
            <Main>
                <Routes>
                    <Route  path="/" element={
                        <HomePage/>
                    }/>
                    <Route path="/country/:name" element={<Details/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Main>

        </>
    )
}

export default App

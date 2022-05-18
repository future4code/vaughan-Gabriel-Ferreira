import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DiaDeSortePage } from "../pages/DiaDeSortePage/DiaDeSortePage"
import { LotofacilPage } from "../pages/LotofacilPage/LotofacilPage"
import { LotomaniaPage } from "../pages/LotomaniaPage/LotomaniaPage"
import { MegaSenaPage} from "../pages/MegaSenaPage/MegaSenaPage"
import { QuinaPage } from "../pages/QuinaPage/QuinaPage"
import { TimemaniaPage } from "../pages/TimemaniaPage/TimemaniaPage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<MegaSenaPage/>} />
                <Route path = "/diadesorte" element={<DiaDeSortePage/>}/>
                <Route path = "/lotofacil" element={<LotofacilPage/>}/>
                <Route path = "/lotomania" element={<LotomaniaPage/>}/>
                <Route path = "/quina" element={<QuinaPage/>}/>
                <Route path = "/timemania" element={<TimemaniaPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
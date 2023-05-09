import { Routes, Route , useParams} from 'react-router-dom'
import { Home, LinkRedirect }  from '../pages'

export function AppRoutes() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/:code" element={ <LinkRedirect />} />
        </Routes>
    )
}

import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'
import { useContext } from 'react'
import { AuthContext } from '../../auth'

export const HeroesRoutes = () => {
  
  return (
    <>
        <Navbar />
        <div className='container'>
            <Routes>
                <Route path="marvel" element={<MarvelPage />}/>
                <Route path="dc" element={<DcPage />}/>

                {/* Search, HeroByID */}
                <Route path="search" element={<SearchPage />}/>
                <Route path="hero/:id" element={<HeroPage />}/>

                <Route path="/" element={<Navigate to='/marvel'/>}/>
            </Routes>

        </div>
    </>
  )
}

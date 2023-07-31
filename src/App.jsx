import { Heading, Flex, Spacer, Divider, VStack, Center, HStack, GridItem, Grid } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import ErrorScreen from './screens/ErrorScreen'
import PricingScreen from './screens/PricingScreen'
import Contact from './screens/Contact'
import SignIn from './components/SignIn'
import Register from './components/Register'
import LandingPage from './screens/LandingPage'
import MainScreen from './screens/MainScreen'
import Sidebar from './components/Sidebar'
import Dashboard from './screens/Dashboard'
import Transcribe from './screens/Transcribe'

function App() {
  return (
      <Router>
        <Routes>        
          <Route path="signin" element={<SignIn/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route
            element={
              <>
              <Grid templateColumns={"repeat(6, 1fr)"} bg="gray.50">
                <GridItem>
                  <Sidebar/>
                </GridItem>
                <GridItem>
                  <Outlet/>
                </GridItem>
              </Grid>
              </>
            }
          >
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="transcribe" element={<Transcribe/>}/>
          </Route>
          <Route
            element={
              <>
                <Navbar />
                <Outlet/>
              </>
            }
          >
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/pricing" element={<PricingScreen/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/*" element={<ErrorScreen/>}/>
          </Route>
        </Routes>
      </Router>
  )
}

export default App

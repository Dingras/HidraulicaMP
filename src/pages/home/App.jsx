import './App.css'
import Header from '../../components/Header/Header'
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre'
import Welcome from '../../components/Welcome/Welcome'

function App() {

    return (
        <>
            <Header/>
            <div className='px-2'>
                <Welcome/>
                <WhoWeAre/>
            </div>
        </>
    )
}

export default App

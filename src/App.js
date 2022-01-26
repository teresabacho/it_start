import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Header} from "./components/header/Header";
import {Background} from "./components/background/Background";
import {Rectangles} from "./components/rectangles/Rectangles";
import {Home} from "./pages/home/Home";
import {Goal} from "./pages/goal/Goal";
import {Mentors} from "./pages/mentors/Mentors";
import LearningProc from "./pages/learningProcess/LearningProc";
import {ChooseCourse} from "./pages/chooseCourse/ChooseCourse";
import {Contacts} from "./pages/contacts/Contacts";
import {Footer} from "./components/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Background/>
            <main>
                <Home/>

                <Rectangles/>
                <Goal/>
                <div className="down">
                    <Rectangles/>
                </div>

                <Mentors/>

                <Rectangles/>
                <LearningProc/>
                <div className="down">
                    <Rectangles/>
                </div>

                <ChooseCourse/>

                <Rectangles/>
                <Contacts/>

            </main>

            <Footer/>
        </div>
    );
}

export default App;


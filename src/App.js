import React from 'react';
import './App.scss';

import Background from "./components/background/Background";
import Rectangles from "./components/rectangles/Rectangles";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./main_pages/main_home/Home";
import Goal from "./main_pages/main_goal/Goal";
import Mentors from "./main_pages/main_mentors/Mentors";
import Process from "./main_pages/main_process/Process";
import Course from "./main_pages/main_courses/Course";
import Contacts from "./main_pages/main_contacts/Contacts";

import CourseHome from "./courses_pages/course_home/CourseHome";
import CourseInfo from "./courses_pages/course_info/CourseInfo";
import CourseAbout from "./courses_pages/course_about/CourseAbout";
import CourseProgram from "./courses_pages/course_program/CourseProgram";
import CourseCareer from "./courses_pages/course_career/CourseCareer";
import CourseApply from "./courses_pages/course_apply/CourseApply";
import SideMenu from "./components/side_menu/SideMenu";


function App() {
    return (
        <div className="App">
            {/*<Header/>*/}
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
                <Process/>
                <div className="down">
                    <Rectangles/>
                </div>

                <Course/>

                <Rectangles/>
                <Contacts/>


                {/*CourseHome*/}



                {/*<CourseHome/>*/}
                {/*<div className="down">*/}
                {/*    <Rectangles/>*/}
                {/*</div>*/}
                {/*<CourseInfo/>*/}
                {/*<Rectangles/>*/}
                {/*<div className="sideMenu">*/}
                {/*    <SideMenu/>*/}
                {/*</div>*/}

                {/*<CourseAbout/>*/}
                {/*<CourseProgram/>*/}
                {/*<CourseCareer/>*/}
                {/*<CourseApply/>*/}


            </main>


            <Footer/>
        </div>
    );
}

export default App;


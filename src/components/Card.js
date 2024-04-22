import React from 'react';
import {toast} from "react-toastify";
import { FaCartPlus } from "react-icons/fa6";
import { BsCartCheckFill } from "react-icons/bs";
import { BsCartDashFill } from "react-icons/bs";

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        // ya to ye particular course liked hai ya to nhi hai
        if(likedCourses.includes(course.id)){
            // agr phle se array m hai to mtlb liked hai, ab isko unlike krdo
            setLikedCourses( (prev) => (prev.filter((cid) => (cid != course.id) )));
            toast.warning("Removed from Cart")
        }
        else{
            // agr phle nhi hai to mltb like krna h us course ko
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses( (prev) => [...prev, course.id]);
            }
            toast.success("Added to Cart")
        }
    }

    return (
        <div className=" w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden ">
            <div className="relative">
                <img src={course.image.url}></img>

                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ? (<BsCartCheckFill   fontSize="1.75rem"/>) : ( <BsCartDashFill fontSize="1.75rem" />
                    ) 
                    }
                </button>
            </div>
            </div>

            <div className="p-4" >
                <p className="text-white font-semibold text-lg loading-6">{course.title}</p>
                //<p className="text-[#1faa59] md:font-bold flex items-end justify-end">₹2000/-</p>
                <p className="mt-2 text-white">
                    {
                        course.description.length > 100 ? (`${course.description.substr(0,100)}...`) : (`${course.description}...`)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card;

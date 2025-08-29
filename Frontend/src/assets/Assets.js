import image_1 from './images/Core It_thumb.png';
import image_2 from './images/Digital_village_thumb.png';
import image_11 from './images/Cable Network thumb.png';
import image_21 from './images/1Cent_Property.png';
import image_22 from './images/Blog _thumb.png';
import image_23 from './images/Core_it_app_thumb.png';

import coverPic from './images/coverPic.jpg'

import insta from './images/insta.jpg';
import linkdn from './images/linkdn.png';
import git from './images/git.png';
import youtube from './images/youtube.png';

import chatgpt from './home_icons/chatgpt.png'
import cloudinary from './home_icons/cloudinary.png'
import express_icon from './home_icons/express_icon.png'
import git_icon from './home_icons/git_icon.png'
import github from './home_icons/github.png'
import js_icon from './home_icons/js_icon.png'
import json_icon from './home_icons/json_icon.png'
import mongodb from './home_icons/mongodb.png'
import mongoose from './home_icons/mongoose.png'
import node_icon from './home_icons/node_icon.png'
import razorpay from './home_icons/razorpay.png'
import react_icon from './home_icons/react_icon.png'
import redux from './home_icons/redux.png'
import vs from './home_icons/vs.png'
import render_icon from './home_icons/render_icon.png'
import netlify from './home_icons/netlify.png'

import website from './services_images/website.jpg'
import frontend from './services_images/frontend.webp'
import backend from './services_images/backend.jpg'
import mern from './services_images/MERN.jpg'


export const projects =[
    {
        _id : 121,
        title : 'Website for Computer Sales and Services Shop',
        category : 'HCJ',
        tools : 'HTML, CSS, Vanila JavaScript',
        image : image_1,
        description : 'A webiste for a computer shop which always do the installation and manintenance of survelience systems. (This same project is elaborated for the client to make a fully fledged e-commerce MERN Stack app for computer sales)',
        video_link :'https://www.youtube.com/watch?v=GP5mXRlbmBU&t=4s',
        github_link :'https://github.com/subhin-subramanian/CoreIt',
        live_link :'https://ubiquitous-florentine-546bef.netlify.app/'
    },
    {
        _id : 122,
        title : 'Website for a Digital Media Marketing Agency',
        category : 'HCJ',
        tools : 'HTML, CSS, Vanila JavaScript',
        image : image_2,
        description : 'A website made for a Digital Media Marketing Agency, who specializes in creating online marketing strategies and solutions for businesses.',
        video_link :'https://www.youtube.com/watch?v=uc88vJwLGRU&t=5s',
        github_link :'https://github.com/subhin-subramanian/Digital-Village',
        live_link :'https://digitalmarketingvillage.netlify.app/'
    },
    {
        _id : 131,
        title : 'Website for a Cable Network',
        category : 'R&T',
        tools : 'React and Tailwind CSS',
        image : image_11,
        description :'A react website created for the customers to checkout the plans, register complains and raise queries to a Cable Network provider.' ,
        video_link :'https://www.youtube.com/watch?v=2WIy6xggqP4&t=36s',
        github_link :'https://github.com/subhin-subramanian/Cable-Website',
        live_link :''
    },
    {
        _id : 141,
        title : 'Web Application for a Real Estate Agency',
        category : 'MERN',
        tools : 'MongoDB, Express,React,Node,JWT',
        image : image_21,
        description :'A MERN application with JWT authentication, user and admin roles, Ad request and posting functionality, used Cloudinary for image uploads.',
        video_link :'https://www.youtube.com/watch?v=WhtVz_DedqA&t=19s',
        github_link :'https://github.com/subhin-subramanian/MERN-Estate',
        live_link :'https://one-cent-property.onrender.com/'
    },
    {
        _id : 142,
        title : 'Web Application for a Blogging community',
        category : 'MERN',
        tools : 'MongoDB, Express,React,Node,Flowbite',
        image : image_22,
        description : 'A MERN application for a blogging platform with user authentication, post creation, and comment (creation, Deletion and liking) features',
        video_link :'https://www.youtube.com/watch?v=8-hxwptb7xw',
        github_link :'https://github.com/subhin-subramanian/MERN-Blog',
        live_link :'https://subhins-blog.onrender.com/'
    },
    {
        _id : 143,
        title : 'E-commerce Application for computer hardware enterprise',
        category : 'MERN',
        tools : 'Razorpay, MongoDB, Express,React,Node',
        image : image_23,
        description : 'A MERN application for a blogging platform with user authentication, post creation, and comment (creation, Deletion and liking) features',
        video_link :'',
        github_link :'https://github.com/subhin-subramanian/Core-It-App',
        live_link :''
    }
]

export const icons = {
    coverPic,
    insta,
    linkdn,
    git,
    youtube,
    chatgpt,
    cloudinary,
    mongoose,
    node_icon,
    razorpay,
    react_icon,
    redux,
    vs,
    express_icon,
    git_icon,
    github,
    js_icon,
    json_icon,
    mongodb,
    render_icon,
    netlify
}

export const services = [
    {
        id: 1,
        title: "Boost Your Online Presence with Custom made Websites",
        description:['I build responsive and modern websites tailored to your brand and marketing strategy using React and Tailwind CSS',
            'In my projects you can see that i started with HTML,CSS,JS sites and shifted to React due to market demand, functionality and design features',
            'My focus is on clean design, smooth performance, and user-friendly experiences'
        ],
        image: website
    },
    {
        id: 2,
        title: "Front-End Development Services",
        description:['From landing pages to complete web applications, I create fast and responsive interfaces using React.js, Tailwind CSS, and JavaScript',
            'If you have an application idea and want to create an app, sent me the proposal, i will convert it to an app',
            'If you are a backend developer and want landing pages or UI - message me to colaborate'
        ],
        image: frontend
    },
    {
        id: 3,
        title: "Back-End Development Services",
        description:['I offer back-end development services using Node.js, Express, and MongoDB to create robust and scalable server-side applications.',
            'I can build RESTful APIs, integrating databases, and ensuring security and performance.',
            'If you need a back-end solution for your application, feel free to reach out!'
        ],
        image: backend
    },
    {
        id: 4,
        title: 'Full Stack Applications (MERN)',
        description:['Develop dynamic and scalable applications using the MERN stack (MongoDB, Express, React, Node.js).',
            'Implement login/signup systems, JWT authentication, and role-based access control for enhanced security',
            'All my works are fully responsive, optimized for all screen sizes, and designed to deliver consistent performance across devices'
        ],
        image: mern
    }

]

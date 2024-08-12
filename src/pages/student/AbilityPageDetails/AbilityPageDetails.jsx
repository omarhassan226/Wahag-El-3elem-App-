import React, { useContext, useState } from 'react';
import { Container, Box } from '@mui/material';
import TutorProfile from './components/TutorProfile';
import CourseDetailsForAbilities from './components/CourseDetailsForAbilities';
import LecturesList from './components/LecturesList';
import CallToAction from './components/CallToAction';
import Header from '../../../components/Header';
import UpdateIcon from '@mui/icons-material/Update';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { colors } from '../../../colors/colors';
import CompleteBuying from './components/CompleteBuying';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';

const AbilityPageDetails = () => {

    const { clicked, addItem } = useContext(CartContext)

    const handleAddToCart = () => {
        addItem({
            id: "1",
            name: 'ahmed',
            price: '250',
            quantity: 1,
            description:'مدرس رياضيات'
        });
    };

    const tutor = {
        name: "احمد ابو العزم",
        rating: 4,
        description: "مدرس رياضيات لديه خبرة أكثر من عشر سنوات وقام بتدريس...",
        image: "/path/to/tutor-image.png"
    };

    const courseDetails = [
        { title: "الاختبارات", description: "4 اختبارات", icon: <ContentPasteSearchIcon sx={{ backgroundColor: colors.sky, borderRadius: '50px', fontSize: '60px', padding: '10px' }} /> },
        { title: "المستوى", description: "مبتدئين", icon: <EqualizerIcon sx={{ backgroundColor: colors.sky, borderRadius: '50px', fontSize: '60px', padding: '10px' }} /> },
        { title: "شهرين ", description: "يومين ى الاسبوع", icon: <UpdateIcon sx={{ backgroundColor: colors.sky, borderRadius: '50px', fontSize: '60px', padding: '10px' }} /> },
        { title: "الأجهزة المتاحة", description: "الهاتف المحمول / كمبيوتر", icon: <AdUnitsIcon sx={{ backgroundColor: colors.sky, borderRadius: '50px', fontSize: '60px', padding: '10px' }} /> },
    ];

    const lectures = [
        { title: "الرياضيات", time: "5 ساعات" },
        { title: "الرياضيات", time: "5 ساعات" },
        { title: "الرياضيات", time: "5 ساعات" },
        { title: "الرياضيات", time: "5 ساعات" },
        { title: "الرياضيات", time: "5 ساعات" },
        { title: "الرياضيات", time: "5 ساعات" },
    ];



    return (
        <Container sx={{ maxWidth: '1500px !important', marginBottom: '4rem' }}>
            <Header text={'التفاصيل'} />
            <TutorProfile {...tutor} />
            <CourseDetailsForAbilities details={courseDetails} />
            <LecturesList lectures={lectures} />
            {
                clicked ? <Link to={'/app/student/cart'}><CompleteBuying /> </Link>: <CallToAction handleAddToCart={handleAddToCart} />
            }
        </Container>
    );
};

export default AbilityPageDetails;

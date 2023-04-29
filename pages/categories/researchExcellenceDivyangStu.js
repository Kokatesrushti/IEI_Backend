import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Center, Text } from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import NavBa from '../components/Navba';
const researchExcellence = () => {
    return (
        <div>
            <Head>
                <title>Categories- IEI-NMLC FCRIT</title>
                <meta name="title" content="IEI-BLC FCRIT" />

            </Head>
            <Header /><NavBa />
            
            <Text fontSize="3xl" fontWeight="bold" color="black" marginStart={"300"}>
                Research Excellence (National/Regional)
            </Text>
           
            <br />
            <br />
            <Text fontSize="xl" color="black" marginStart={"350"}>
                <Text fontSize="2xl" fontWeight="bold">
                    Divyang Student<br />
                </Text>
                <br />
                Entry Level Criteria:<br /> <br />
                <Text>
                ●  Should be a Student of TE or BE in January 2023.
               < br />
                ●  Disabilities recognized by the admission authorities of the affiliated Institute.
                </Text>
                <br/>
               </Text>
            <br />
            <br />
            <br />


            <Footer />
        </div>
    );
};

export default researchExcellence;
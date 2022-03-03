import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "./layout";
import DevelopingSite from "./components/developingSite";
import WhatIsWebkite from "./components/whatIsWebkite";
import ChooseUsYouChoose from "./components/chooseUsYouChoose";
import PriceList from "./components/priceList";
import Reviews from "./components/reviews";
import UpdateYourBusiness from "./components/updateYourBusiness";


export default function Home() {
  return (

      <Layout>
          <DevelopingSite/>
          <WhatIsWebkite/>
          <ChooseUsYouChoose/>
          <PriceList/>
          <Reviews/>
          <UpdateYourBusiness/>
      </Layout>
  )
}

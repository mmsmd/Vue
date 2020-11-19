import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'
import ThirdPage from '../components/ThirdPage'
import FourthPage from '../components/FourthPage'
import FirstPart from '@/components/HomeComponents/FirstPart'
import SecondPart from '@/components/HomeComponents/SecondPart'
import FreeTravel from '../components/Travel/FreeTravel'
import WeekendTour from '../components/Travel/WeekendTour'
import DomesticHotel from '../components/Accommodation/DomesticHotel'
import Homestay from '../components/Accommodation/Homestay'
import OverseasHotels from '../components/Accommodation/OverseasHotels'
import About from '@/components/About'
import Login from '../components/Login'
import GT1 from '../components/Travel/GT1'
import GroupTravel from '../components/Travel/GroupTravel'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'FirstPart',
          component: FirstPart
        },
        {
          path: 'SecondPart',
          name: 'SecondPart',
          component: SecondPart
        }
      ]
    },
    {
      path: '/FirstPage',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/SecondPage',
      name: 'SecondPage',
      component: SecondPage
    },
    {
      path: '/ThirdPage',
      name: 'ThirdPage',
      component: ThirdPage
    },
    {
      path: '/FourthPage',
      name: 'FourthPage',
      component: FourthPage
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/FreeTravel',
      name: 'FreeTravel',
      component: FreeTravel
    },
    {
      path: '/WeekendTour',
      name: 'WeekendTour',
      component: WeekendTour
    },
    {
      path: '/DomesticHotel',
      name: 'DomesticHotel',
      component: DomesticHotel
    },
    {
      path: '/Homestay',
      name: 'Homestay',
      component: Homestay
    },
    {
      path: '/OverseasHotels',
      name: 'OverseasHotels',
      component: OverseasHotels
    },
    {
      path: '/GT1',
      name: 'GT1',
      component: GT1
    },
    {
      path: '/GroupTravel',
      name: 'GroupTravel',
      component: GroupTravel
    }
  ]
})

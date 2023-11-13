import { useState } from "react";
import oderImag from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import CoverBanner from "../../shared/CoverBanner";
import OrderTabs from "./OrderTabs";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ["salad","pizza","soup","dessert", "drinks", "popular", "offer"]
    const {category} = useParams();
    const initialIndx = categories.indexOf(category);
   const [tabIndex, setTabIndex] = useState(initialIndx);
   const [menu] = useMenu(); 
    const dessert = menu.filter(item=> item.category === 'dessert');
    const soup = menu.filter(item=> item.category === 'soup');
    const salad = menu.filter(item=> item.category === 'salad');
    const pizza = menu.filter(item=> item.category === 'pizza');
    const offered = menu.filter(item=> item.category === 'offered');
    const drinks = menu.filter(item=> item.category === 'drinks');
    const popular = menu.filter(item=> item.category === 'popular');
  return (
    <div>
         <Helmet>
                <title>Bistro | Order</title>
            </Helmet>
        <CoverBanner img={oderImag} title={"order now"}></CoverBanner>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
          <Tab>Popular</Tab>
          <Tab>Offer</Tab>
        </TabList>
        <TabPanel>
        <OrderTabs items={salad}></OrderTabs>
        </TabPanel>
        <TabPanel>
        <OrderTabs items={pizza}></OrderTabs>
        </TabPanel>
        <TabPanel>
        <OrderTabs items={soup}></OrderTabs>
        </TabPanel>
        <TabPanel>
        <OrderTabs items={dessert}></OrderTabs>
        </TabPanel>
        <TabPanel>
        <OrderTabs items={drinks}></OrderTabs>
        </TabPanel>
        <TabPanel>
        <OrderTabs items={popular}></OrderTabs>
        </TabPanel>
        <TabPanel>
        <OrderTabs items={offered}></OrderTabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;

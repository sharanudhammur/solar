
"use client";

import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import Image from "next/image";
import styles from "./Products.scss";

const products = [
    {
        id: 1,
        name: "Solar Panel 300W",
        description: "High efficiency 300W solar panel ideal for homes and offices.",
        price: "₹12,000",
        image: "https://cdn.britannica.com/91/222691-050-E8BDF226/installing-solar-panels.jpg",
        badge: "Best Seller",
    },
    {
        id: 2,
        name: "Solar Inverter",
        description: "Efficient solar inverter with smart load management technology.",
        price: "₹18,000",
        image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202401/65b09ad15d89e-pradhan-mantri-suryodaya-yojana-what-is-the-cost-of-installing-rooftop-solar-panel-check-subsidy-240623703-16x9.jpg?size=1200:675",
        badge: "New Arrival",
    },
    {
        id: 3,
        name: "Solar Battery",
        description: "Long-life solar battery with deep cycle technology.",
        price: "₹15,000",
        image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/R9046125-01",
        badge: "Hot",
    },
    {
        id: 4,
        name: "Solar Water Heater",
        description: "Efficient heating solution using solar energy for homes.",
        price: "₹20,000",
        image: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=800&q=80",
        badge: "Eco Friendly",
    },
    {
        id: 1,
        name: "Solar Panel 300W",
        description: "High efficiency 300W solar panel ideal for homes and offices.",
        price: "₹12,000",
        image: "https://cdn.britannica.com/91/222691-050-E8BDF226/installing-solar-panels.jpg",
        badge: "Best Seller",
    },
    {
        id: 2,
        name: "Solar Inverter",
        description: "Efficient solar inverter with smart load management technology.",
        price: "₹18,000",
        image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202401/65b09ad15d89e-pradhan-mantri-suryodaya-yojana-what-is-the-cost-of-installing-rooftop-solar-panel-check-subsidy-240623703-16x9.jpg?size=1200:675",
        badge: "New Arrival",
    },
    {
        id: 3,
        name: "Solar Battery",
        description: "Long-life solar battery with deep cycle technology.",
        price: "₹15,000",
        image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/R9046125-01",
        badge: "Hot",
    },
    {
        id: 4,
        name: "Solar Water Heater",
        description: "Efficient heating solution using solar energy for homes.",
        price: "₹20,000",
        image: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=800&q=80",
        badge: "Eco Friendly",
    },
];


export default function AboutPage() {
    return (
        <div className="products-component">
            <div></div>
            <div className="products-component-body">
                <div className="products-list">

                    {
                        products.map((ele, index) => (
                            <div key={index} className="product-card">
                                <div className="product-img">
                                    <Image
                                        src="https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0="
                                        alt="Solar Panels"
                                        width={550}
                                        height={380}
                                        style={{
                                            objectFit: "cover",
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </div>
                                <div className="product-detail">
                                    <div className="product-name">{ele.name}</div>
                                    <div className="product-desc">{ele.description}</div>
                                    <div className="product-price">{ele.price}</div>
                                    {/* <div className="product-specification">
                                        <table style={{ width: "100%" }}>
                                            <tbody>
                                                <tr><th className="thStyle">Feature</th><th className="tdStyle">Details</th></tr>
                                                <tr><td className="thStyle">Model</td><td className="tdStyle">SP-400W Monocrystalline</td></tr>
                                                <tr><td className="thStyle">Power Output</td><td className="tdStyle">400 Watts</td></tr>
                                                <tr><td className="thStyle">Efficiency</td><td className="tdStyle">21.5%</td></tr>
                                                <tr><td className="thStyle">Cell Type</td><td className="tdStyle">Monocrystalline Silicon</td></tr>
                                                <tr><td className="thStyle">Dimensions</td><td className="tdStyle">1722 mm x 1134 mm x 30 mm</td></tr>
                                                <tr><td className="thStyle">Weight</td><td className="tdStyle">20 kg</td></tr>
                                                <tr><td className="thStyle">Operating Temperature</td><td className="tdStyle">-40°C to 85°C</td></tr>
                                                <tr><td className="thStyle">Warranty</td><td className="tdStyle">25 Years Performance Warranty</td></tr>
                                                <tr><td className="thStyle">Certifications</td><td className="tdStyle">IEC 61215, IEC 61730, CE</td></tr>
                                            </tbody>
                                        </table>
                                    </div> */}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    );
}

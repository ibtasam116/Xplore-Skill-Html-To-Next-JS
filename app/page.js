import React from 'react';

import Home_header from './(components)/home_header/home_header';

import Home_program_card from './(components)/home_program_card/home_program_card';

import Section_header from './(components)/section_header/section_header';

import Home_tour_card from './(components)/home_tour_card/home_tour_card';
import img1 from "../public/img/Campus1.png";
import img2 from "../public/img/Campus2.png";
import img3 from "../public/img/Campus3.png";

import Home_facilities_card from './(components)/home_facilities_card/home_facilities_card';
import img4 from "../public/img/libary.png";
import img5 from "../public/img/playground.png";
import img6 from "../public/img/food.png";

import Home_student_card from './(components)/home_student_card/home_student_card';
import studentImg from "../public/img/user.png"

import Button from './(components)/button/button';
import Home_verticalLine from './(components)/home_verticalLine/home_verticalLine';

export default function Home() {
  return (
    <>
      <Home_header >

      </Home_header>

      <section className="course">

        <Home_verticalLine />

        <h1>EXPLORE OUR 60+ <br /> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <Home_program_card title="Undergraduate Programs" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
              soluta labore quisquam impedi distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non." />

          <Home_program_card title="Graduate Programs" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
              soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non." />

          <Home_program_card title="Adult Learning & Degree Completion" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
              soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non." />

        </div>
      </section>

      <section className="campus">

        <Home_verticalLine />

        <Section_header sectionTitle="TAKE OUR VIRTUAL TOUR" sectionDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />

        <div className="row">
          <Home_tour_card ImgSrc={img1} title="DELHI" />
          <Home_tour_card ImgSrc={img2} title="HYDERABAD" />
          <Home_tour_card ImgSrc={img3} title="MUMBAI" />
        </div>

      </section>


      <section className="facilities">

        <Home_verticalLine />

        <Section_header sectionTitle="Our Facilities" sectionDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />

        <div className="row">
          <Home_facilities_card imgSrc={img4} title="Best Libary" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam." />
          <Home_facilities_card imgSrc={img5} title="Athletics" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam." />
          <Home_facilities_card imgSrc={img6} title="Tasty and Healthy Food" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam." />
        </div>

      </section>

      <section className="testimonials">

        <Home_verticalLine />

        <Section_header sectionTitle="What Our Student Says" sectionDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />

        <div className="row">
          <Home_student_card studentImgSrc={studentImg} studentDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime." studentName="Student Name" star_className="fa-star" />

          <Home_student_card studentImgSrc={studentImg} studentDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime." studentName="Student Name" star_className="fa-star-half-alt" />
        </div>
      </section>

      <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <Button btnHref="/contact" btnTitle="CONTACT US" />
      </section>

    </>
  )
}

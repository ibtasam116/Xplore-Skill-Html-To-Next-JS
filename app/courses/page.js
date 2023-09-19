import Home_facilities_card from "../(components)/home_facilities_card/home_facilities_card";
import Home_program_card from "../(components)/home_program_card/home_program_card";
import Navbar from "../(components)/navbar/navbar";
import Section_header from "../(components)/section_header/section_header";

import img1 from '../../public/img/course1.png'
import img2 from '../../public/img/course2.png'
import img3 from '../../public/img/course3.png'

export default function Courses() {
  return (
    <>
      <Navbar header_title="OUR COURSES" />

      <section class="course">

        <Section_header
          sectionTitle="Course We Offer"
          sectionDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />

        <div class="row">
          <Home_program_card
            title="Undergraduate Programs"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
              soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non."/>

          <Home_program_card
            title="Graduate Programs"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
            soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
            laborum velit non."/>

          <Home_program_card
            title="Adult Learning & Degree Completion"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
            soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
            laborum velit non."/>

        </div>
      </section>

      <section class="facilities">
        <Section_header
          sectionTitle="Best Courses"
          sectionDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />


        <div class="row">

          <Home_facilities_card
            imgSrc={img1}
            title="Web Development"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam." />

          <Home_facilities_card
            imgSrc={img2}
            title="Artificial Intelligence"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam." />

          <Home_facilities_card
            imgSrc={img3}
            title="Data Science"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam." />


          
        </div>
      </section>


    </>
  )
}

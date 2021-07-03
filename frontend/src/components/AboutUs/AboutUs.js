import React from "react";
import MemberItem from "./MemberItem";

import Title from "../style/Title";

import "./AboutUs.css";

const AboutUs = () => {
  const memberArr = [
    {
      name: "Elisa Ng Li",
      content:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus inmassa egestas mollis varius; dignissim elementum. Mollistincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.Hendrerit parturient habitant pharetra rutrum gravida porttitoreros feugiat. Mollis elit sodales taciti duis praesent id.Consequat urna vitae morbi nunc congue.",
      image: `${process.env.PUBLIC_URL}/images/bee.png`,
    },
    {
      name: "Hyun Ji Lee",
      content:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus inmassa egestas mollis varius; dignissim elementum. Mollistincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.Hendrerit parturient habitant pharetra rutrum gravida porttitoreros feugiat. Mollis elit sodales taciti duis praesent id.Consequat urna vitae morbi nunc congue.",
      image: `${process.env.PUBLIC_URL}/images/koala.png`,
    },
    {
      name: "Krupa Kirtikumar Shah",
      content:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus inmassa egestas mollis varius; dignissim elementum. Mollistincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.Hendrerit parturient habitant pharetra rutrum gravida porttitoreros feugiat. Mollis elit sodales taciti duis praesent id.Consequat urna vitae morbi nunc congue.",
      image: `${process.env.PUBLIC_URL}/images/rabbit.png`,
    },
    {
      name: "Sergey Kozyrev",
      content:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus inmassa egestas mollis varius; dignissim elementum. Mollistincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.Hendrerit parturient habitant pharetra rutrum gravida porttitoreros feugiat. Mollis elit sodales taciti duis praesent id.Consequat urna vitae morbi nunc congue.",
      image: `${process.env.PUBLIC_URL}/images/toucan.png`,
    },
  ];
  return (
    <div className="container mt-5">
      <div className="text-center">
        <Title name="About Us" />
        <h4>Meet our team of developers! </h4>
      </div>

      <div className="mt-4">
        {memberArr.map((member, index) => (
          <MemberItem
            key={index}
            name={member.name}
            content={member.content}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

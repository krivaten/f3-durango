import eachWeekOfIntervalWithOptions from "date-fns/esm/fp/eachWeekOfIntervalWithOptions/index.js";
import { StaticImage } from "gatsby-plugin-image";
import React, { FunctionComponent } from "react";
import Free from "../components/icons/Free";
import Male from "../components/icons/Male";
import Run from "../components/icons/Run";
import Weather from "../components/icons/Weather";
import { Layout } from "../components/layout";

const callouts = [
  {
    Icon: Free,
    title: "Free of charge",
    description: "Always have been, always will be",
  },
  {
    Icon: Male,
    title: "Open to all men",
    description: "Any weight or fitness level",
  },
  {
    Icon: Weather,
    title: "Held outdoors",
    description: "Rain or shine, hot or cold",
  },
  {
    Icon: Run,
    title: "Lead by peers",
    description: "No certification necessary",
  },
];

export const Index: FunctionComponent = () => {
  return (
    <Layout>
      <div>
        <div className="grid grid-cols-5 gap-10">
          <div className="col-span-3 prose max-w-none">
            <h2 className="text-2xl uppercase font-bold mb-3">What is F3?</h2>
            <p>
              <strong>
                F3 is an international network of free, peer-led workouts for men. Our mission is to plant, grow, and
                serve small workout groups for the invigoration of male community leadership.
              </strong>
            </p>

            <p>
              The three Fs in our name stand for Fitness, Fellowship, and Faith – the last of which we define not as one
              specific religion, sect, or faith system, but simply in something outside of oneself.
            </p>

            <p>
              We welcome men of all fitness levels and ages to our workouts and have no requirement for membership other
              than that you show up at the appointed time and place and follow what the workout leader (The "Q" in F3
              lingo) does.
            </p>
          </div>

          <div className="col-span-2 bg-gray p-5 rounded">
            <h3 className="text-2xl uppercase font-bold mb-3">Come Join Us</h3>
            <ul className="list-none">
              <li className="prose">
                <StaticImage src="../images/saturday.png" alt="" className="rounded"></StaticImage>
                <p>
                  <strong>Saturdays at 0630</strong>
                  <br />
                  <a href="https://goo.gl/maps/DfHBkoU3Tniatsmr7" target="_blank" title="Click to view map">
                    Santa Rita Park
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-5">
          <h2 className="text-3xl uppercase font-bold">Our Workouts Are</h2>
        </div>
        <ul className="list-none grid grid-cols-2 md:grid-cols-4 gap-10 mt-10 text-center">
          {callouts.map(({ Icon, title, description }) => (
            <li>
              <Icon className="w-24 block mx-auto" />
              <h3>{title}</h3>
              <small>{description}</small>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Index;

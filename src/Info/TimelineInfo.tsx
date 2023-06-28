import React from "react";

const timelineInfo: { title: string; desc: React.ReactNode; date: string }[] = [
  {
    title: "Enrolled in Computer Science",
    desc: "Enrolled for two years at Inver Hills Community College then later transferred to Metropolitan State University.",
    date: "September 1, 2020",
  },
  {
    title: "Started Independently Learning Web Development",
    desc: "After realizing traditional education has some significant shortcomings I start to take matters into my own hands and started learnig the fundamentals of web development.",
    date: "September 15, 2022",
  },
  {
    title: "Created First React App",
    desc: (
      <React.Fragment>
        Created the first version of QuickBudgetTool.com. I later came around to
        completely redoing this app, as the initial version was very rough
        (First ever web app). Can be found in projects section, or at{" "}
        <a href="https://quickbudgettool.com" target="_blank" rel="noreferrer">
          QuickBudgetTool.com
        </a>
        . (Awful old version for those interested:{" "}
        <a
          href="https://github.com/JoshBergman/QuickBudgetTool-React-App"
          target="_blank"
          rel="noreferrer"
        >
          Old Repo
        </a>
        )
      </React.Fragment>
    ),
    date: "October 3, 2022",
  },
  {
    title: "Created First Full-Stack App",
    desc: (
      <React.Fragment>
        As my first fullstack app I created API Monitor. API Monitor allowed you
        to add REST endpoints, configure them, set headers, and save them to
        your account for testing. I later took the site down as it didn't
        represent the high standards I have set for myself. Remains can be found
        at:{" "}
        <a
          href="https://apimonitor.dev/welcome"
          target="_blank"
          rel="noreferrer"
        >
          APIMonitor.dev
        </a>
        ,{" "}
        <a
          href="https://github.com/JoshBergman/Api-Monitor-Frontend"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Repo
        </a>
        , and{" "}
        <a
          href="https://github.com/JoshBergman/Api-Monitor-Backend"
          target="_blank"
          rel="noreferrer"
        >
          Backend Repo
        </a>
      </React.Fragment>
    ),
    date: "October 24, 2022",
  },
  {
    title: "Deployed Portfolio V1",
    desc: (
      <React.Fragment>
        Originially hosted on this very domain. As my third app it showed. I
        later replaced this portfolio once I had more expierence, as it did not
        meet my quality standards. Ironically the replacement eventually no
        longer met my quality standards either and was also replaced. You are on
        V3 currently.{" "}
        <a
          href="https://github.com/JoshBergman/Portfolio-Website-JoshuaBergman"
          target="_blank"
          rel="noreferrer"
        >
          Awful V1 Repo
        </a>
      </React.Fragment>
    ),
    date: "November 1, 2022",
  },
  {
    title: "First Web Development Contract",
    desc: (
      <React.Fragment>
        My first professional front-end expierence. I saw the complete design,
        construction, and deployment of a website for a local frame shop. Can be
        found in projects sections, or at:{" "}
        <a
          href="https://mikesframe-25201.web.app/home"
          target="_blank"
          rel="noreferrer"
        >
          https://mikesframe-25201.web.app/home
        </a>
        . Personally I believe this is when I started to become confident as a
        developer.
      </React.Fragment>
    ),
    date: "November 5, 2022",
  },
];

export default timelineInfo;
//!!! MUST PUT EVENTS IN CHRONOLOGICAL ORDER IF YOU WANT THIS TIMELINE TO MAKE SENSE !!!
//! Index 0 should be what happen farthest from now. Last index should be the soonest.
//? Im too lazy to sort by date.

// "desc" property is set as ReactNode as in you can put <a> tags and such in it.

// {
//     title: "",
//     desc: "",
//     date: "",
// },
// for your pasting convenience

// or if you have a link in the desc
// {
//     title: "",
//     desc: <React.Fragment>
//              <a href="link" target="_blank" rel="noreferrer"></a>
//           </React.Fragment>,
//     date: "",
// },

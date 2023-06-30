import React from "react";

const timelineInfo: { title: string; desc: React.ReactNode; date: string }[] = [
  {
    title: "Enrolled in Computer Science",
    desc: "Enrolled for two years at Inver Hills Community College then later transferred to Metropolitan State University.",
    date: "September 1, 2020",
  },
  {
    title: "Created WordChecker",
    desc: (
      <React.Fragment>
        A python command line application that efficiently compares large
        strings for matches in a database. Running in linear time, it creates a
        node-tree of letters that follow paths indicating if a word has
        validity.{" "}
        <a
          href="https://github.com/JoshBergman/WordChecker"
          target="_blank"
          rel="noreferrer"
        >
          WordChecker
        </a>
      </React.Fragment>
    ),
    date: "September 7, 2022",
  },
  {
    title: "Started Independently Learning Web Development",
    desc: "After realizing traditional education has some significant shortcomings I start to take matters into my own hands and started learning the fundamentals of web development.",
    date: "September 15, 2022",
  },
  {
    title: "Created First React App",
    desc: (
      <React.Fragment>
        Created the first version of QuickBudgetTool.com. I later came around to
        completely redoing this app, as the initial version was very rough
        (First ever web app). The remake can be found in projects section, or at{" "}
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
        later replaced this portfolio once I had more experience, as it did not
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
        My first professional front-end experience. I saw the complete design,
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
  {
    title: "Deployed Portfolio V2",
    desc: (
      <React.Fragment>
        My first porfolio was about the third real react app I made, and it
        showed. experience shows in your work and thats ultimately why I decided
        on making yet another version after this.{" "}
        <a
          href="https://github.com/JoshBergman/Portfolio-v2"
          target="_blank"
          rel="noreferrer"
        >
          Repo
        </a>
      </React.Fragment>
    ),
    date: "Feb 2, 2023",
  },
  {
    title: "Created TPM",
    desc: (
      <React.Fragment>
        TPM as in "Terrible Password Manager". Made with python it was a quick
        solution for a personal password manager that stores passwords in a
        "secure" plaintext file{" "}
        <a
          href="https://github.com/JoshBergman/TerriblePasswordManager"
          target="_blank"
          rel="noreferrer"
        >
          TPM Repo
        </a>
        . Quickly afterwards I created a Node app to do the same thing but with
        SHA-256 encryption. Though - I have not made this Repo public as I do
        not want to risk exposing any security flaws.{" "}
      </React.Fragment>
    ),
    date: "March 23, 2023",
  },
  {
    title: "Created TSA",
    desc: (
      <React.Fragment>
        TSA as in "Too Simple Analytics". I wanted a method to keep track of
        when my content is getting new views. This is when I created TSA which
        is a very simple analytics tracker. The tracker was also made with a
        companion app that outputs some useful analytic information along with
        new views.{" "}
        <a
          href="https://github.com/JoshBergman/TooSimpleAnalytics"
          target="_blank"
          rel="noreferrer"
        >
          Too Simple Analytics
        </a>
        ,{" "}
        <a
          href="https://github.com/JoshBergman/TooSimpleAnalyticsCheck"
          target="_blank"
          rel="noreferrer"
        >
          Companion App
        </a>
      </React.Fragment>
    ),
    date: "April 8, 2023",
  },
  {
    title: "Deployed Algo Example",
    desc: (
      <React.Fragment>
        Algo Example is an educational resource for learning about data
        structures and algorithms. Algo Example has algorithm visualization,
        interaction, and even games. Check it out at{" "}
        <a href="https://algoexample.com/" target="_blank" rel="noreferrer">
          AlgoExample.com
        </a>
        . Algo Example is a passion project made in collaboration with a long
        time peer. I personally overheaded the creation, execution, and
        deployment of this app.{" "}
        <a
          href="https://github.com/JoshBergman/Algorithms-Explained"
          target="_blank"
          rel="noreferrer"
        >
          Algo Example Repo
        </a>{" "}
      </React.Fragment>
    ),
    date: "May 7, 2023",
  },
  {
    title: "Created Quick Budget Tool V2",
    desc: (
      <React.Fragment>
        This is the updated version I mention earlier. QuickBudgetTool is great
        for quickly making a budget. Its not intended to be an investment
        tracker or dedicated financial app. The tool strives when used for
        breaking down how your cash flows on a month-to-month basis. Check it
        out:{" "}
        <a href="https://quickbudgettool.com/" target="_blank" rel="noreferrer">
          QuickBudgetTool.com
        </a>
        . Repos:{" "}
        <a
          href="https://github.com/JoshBergman/QBT2"
          target="_blank"
          rel="noreferrer"
        >
          QBT2 Frontend Repo
        </a>
        ,{" "}
        <a
          href="https://github.com/JoshBergman/qbt2-backend"
          target="_blank"
          rel="noreferrer"
        >
          QBT2 Backend Repo
        </a>
      </React.Fragment>
    ),
    date: "June 18, 2023",
  },
  {
    title: "Deployed Portfolio V3",
    desc: (
      <React.Fragment>
        While the second version of my porfolio is not bad, it was not up to the
        standard I strive to set for myself. This is why you are on the third
        iteration of my portfolio.{" "}
        <a
          href="https://github.com/JoshBergman/Portfolio-V3"
          target="_blank"
          rel="noreferrer"
        >
          Repo for this site
        </a>{" "}
        and the live:{" "}
        <a href="https://joshuabergman.dev/" target="_blank" rel="noreferrer">
          JoshuaBergman.dev
        </a>{" "}
        (You are already on this site... You better not click that.) **Note:
        There are many more projects I have not covered, feel free to check out
        my GitHub to see more.
      </React.Fragment>
    ),
    date: "July 1, 2023",
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

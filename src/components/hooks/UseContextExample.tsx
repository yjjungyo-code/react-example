import React, { ChangeEvent, memo, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

interface Props {}

const MyContext = React.createContext<{ hello: string } | undefined>(undefined);

function ContextProvider({ children, text }: { children: React.ReactNode; text: string }) {
  return <MyContext.Provider value={{ hello: text }}>{children}</MyContext.Provider>;
}

function useMyContext() {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
}

function GrandChildComponent() {
  const { hello } = useMyContext();
  useEffect(() => {
    console.log("GrandChild rendered");
  });
  return <div>GrandChild : {hello}</div>;
}

// function ChildComponent() {
//   useEffect(() => {
//     console.log("Child rendered");
//   });
//   return <GrandChildComponent />;
// }

//memoized ChildComponent
const ChildComponent = memo(() => {
  useEffect(() => {
    console.log("Child rendered");
  });
  return <GrandChildComponent />;
});

//parent component  that provides the context
const UseContextExample = (props: Props) => {
  const [text, setText] = React.useState("");
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  useEffect(() => {
    console.log("Parent rendered");
  });
  return (
    <>
      <ContextProvider text={text}>
        <input type="text" className="form-control width?:20rem" value={text} onChange={handleChange} />
        <ChildComponent />
      </ContextProvider>
      <br></br>
      <hr></hr>
      <h1> Source Code </h1>
      <pre>
        <code className="border">{code}</code>
      </pre>
    </>
  );
};
const code: string = `
import React, { ChangeEvent, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

interface Props {}

const MyContext = React.createContext<{ hello: string } | undefined>(undefined);

function ContextProvider({ children, text }: { children: React.ReactNode; text: string }) {
  return <MyContext.Provider value={{ hello: text }}>{children}</MyContext.Provider>;
}

function useMyContext() {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
}

function GrandChildComponent() {
  const { hello } = useMyContext();
  useEffect(() => {
    console.log("GrandChild rendered");
  });
  return <div>GrandChild : {hello}</div>;
}

// function ChildComponent() {
//   useEffect(() => {
//     console.log("Child rendered");
//   });
//   return <GrandChildComponent />;
// }

//memoized ChildComponent
const ChildComponent = memo(() => {
  useEffect(() => {
    console.log("Child rendered");
  });
  return <GrandChildComponent />;
});

//parent component  that provides the context
const UseContextExample = (props: Props) => {
  const [text, setText] = React.useState("");
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  useEffect(() => {
    console.log("Parent rendered");
  });
  return (
    <ContextProvider text={text}>
      <input type="text" className="form-control width?:20rem" value={text} onChange={handleChange} />
      <ChildComponent />
    </ContextProvider>
  );
};

export default UseContextExample;
`;
export default UseContextExample;

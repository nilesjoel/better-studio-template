function Concept() {
  return (
    <div>
      <div></div>
      <style jsx>{`
        p {
          color: gray;
        }
        div {
          height: 100vh;
          background: #13648b;
          margin: 0 auto;
        }
        @media (max-width: 600px) {
          div {
            background: silver;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          background: black;
        }
      `}</style>
    </div>
  );
}

export default Concept;

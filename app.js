const heading = React.createElement("h1", {id: "heading", className: "title"}, "HI Hello");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)

// const h = React.createElement("div", {id: "root"}, 
//     React.createElement("h2", {id: "nest"}, React.createElement("h3", {}, "Im Kiran"))
// )
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(h)
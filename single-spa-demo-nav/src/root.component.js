import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./root.component.css";

export default function Root() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/object-storage" className="link">
          Object Storage
        </Link>
        <Link to="/cna" className="link">
          CNA
        </Link>
      </nav>
    </BrowserRouter>
  );
}

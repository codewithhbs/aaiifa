import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const formatText = (text) =>
    text.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  const currentPage =
    pathnames.length > 0 ? formatText(pathnames[pathnames.length - 1]) : "Home";

  return (
    <section className="breadcrumb-section">
      <div className="breadcrumb-container">
        {/* <h1 className="breadcrumb-title">{currentPage}</h1> */}

        <nav className="breadcrumb-nav">
          <ol className="breadcrumb-list">
            <li>
              <Link to="/" className="breadcrumb-link">Home</Link>
            </li>

            {pathnames.map((item, index) => {
              const route = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              const label = formatText(item);

              return (
                <React.Fragment key={route}>
                  <ChevronRight size={14} className="breadcrumb-icon" />
                  {isLast ? (
                    <span className="breadcrumb-current">{label}</span>
                  ) : (
                    <Link to={route} className="breadcrumb-link">{label}</Link>
                  )}
                </React.Fragment>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumb;
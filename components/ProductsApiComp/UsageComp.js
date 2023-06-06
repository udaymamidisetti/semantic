import React from "react";

const UsageComp = () => {
  return (
    <div className="max-w-[1200px] m-auto flex items-center justify-between">
      <img
        className="h-[250px] w-[250px]"
        src="https://assets-global.website-files.com/605236bb767e9a5bb229c63c/60d4e8b2554784749365b7f7_our_research-01.png"
        alt="img"
      />
      <div className="w-[900px]">
        <h1 className="font-bold text-[24px]">
          Why use semantice scholar API?
        </h1>
        <p className="font-[300]">
          The Semantic Scholar API is a way of representing the world’s
          scientific publications. Scientific papers and their authors are
          connected by citations of one paper by another. Our API allows you to
          find and explore these relations, including data about authors,
          papers, citations, venues, and more. Currently, Semantic Scholar API
          supports Paper and Author Lookup, Conflict of Interest detection,
          Conference Reviewer Match, SPECTER embeddings, and SUPP.AI
          annotations. We are actively developing new features based on user
          demand. ‍ To learn more about our API service, read The Semantic
          Scholar Open Data Platform paper.
        </p>
      </div>
    </div>
  );
};

export default UsageComp;

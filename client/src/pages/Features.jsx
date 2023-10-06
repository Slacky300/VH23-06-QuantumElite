import React from "react";
import search from "../gifs/search.gif";
import puzzle from "../gifs/puzzle.gif";
import statis from "../gifs/statis.gif";
import noti from "../gifs/noti.gif";
import rock from "../gifs/features.gif";
import proct from "../gifs/proct.gif";

const Features = () => {
  return (
    <>
      <section id="services" class="services_wrapper mb-5">
        <div class="container">
          <h5 className="text-center" style={{ color: '#3d86e8' }}>Best Features for your Safety</h5>
          <h1 className="text-center">Features</h1>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12 mb-4">
              <div class="bg-transparent border-0">
                <div class="card-body text-md-end">
                  <h3>Optimize images <span style={{ color: '#3d86e8' }}>01 </span></h3>
                  <p>Keywords play a major role in this formula. You want to include words people will search
                    for throughout your content.</p>
                  <h3>Use outbound links <span style={{ color: '#3d86e8' }}>02 </span></h3>
                  <p>There are certain things you can do to increase the credibility of your website. You
                    should also include internal links..</p>
                  <h3>Add more than text <span style={{ color: '#3d86e8' }}>03 </span></h3>
                  <p>There more you can add to improve your SEO ranking. Consider adding other multimedia
                    elements such as videos,</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 mb-4">
              <div class=" bg-transparent border-0">
                <div class="card-body text-center">
                  <img src={rock} class="img-fluid mb-4 service_phone" />
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 mb-4">
              <div class=" bg-transparent border-0">
                <div class="card-body text-start">
                  <h3><span style={{ color: '#3d86e8' }}>04 </span>Start blogging</h3>
                  <p>If you are using authority websites for hyperlinks, you shouldn’t have to worry about the
                    links breaking.</p>
                  <h3><span style={{ color: '#3d86e8' }}>05 </span>Fix any broken links</h3>
                  <p>There are certain things you can do to increase the credibility of your website. You
                    should also include internal links..</p>
                  <h3><span style={{ color: '#3d86e8' }}>06 </span>Click-worthy title</h3>
                  <p>When it comes to writing titles for search engines, the thing you have to know is you
                    only have 65 characters to write headline.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
